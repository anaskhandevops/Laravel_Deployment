<?php

namespace App\Http\Controllers;

use App\Models\Projects;
use App\Models\Tasks;
use App\Models\Time_Sheet;
use Illuminate\Console\View\Components\Task;
use Illuminate\Foundation\Auth\User;
use Illuminate\Http\Request;
use Carbon\Carbon;
use Exception;
use Illuminate\Support\Facades\Hash;
use RealRashid\SweetAlert\Facades\Alert;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    //

    function homePage(Request $request)
    {
        $userData = auth()->guard('web')->user();

        $search = $request['search'] ?? "";

        if ($search != '') {
            $projects = Projects::query()
                ->where('project_name', 'LIKE', "%{$search}%")
                ->paginate(10);
            $projects->appends(array('search' => $search));
        } else {
            $projects = Projects::paginate(10);
        }

        $data = [
            'title' => 'HomePage',
            'page_title' => 'HomePage',
            'breadcumb' => [['link' => '/', 'name' => 'homePage'], ['name' => 'users/homepage']],
            'search' => $search,
            'projects' => $projects,
            'userData' => [
                'id' => $userData['id'],
                'name' => $userData['name'],
                'email' => $userData['email'],
            ],
        ];

        return view('frontend.pages.homepage.index')->with($data);
    }


    function taskByProjectId(Request $request)
    {
        $userData = auth()->guard('web')->user();

        $tasks = Tasks::query()
            ->where('project_id', '=', $request->project_id)
            ->paginate(10);

        // $search = $request['search'] ?? "";

        // if ($search != '') {
        //     $tasks = Tasks::query()
        //         ->where('project_id', '=', $request->project_id)
        //         ->paginate(10);
        //     $tasks->appends(array('search' => $search));
        // } else {
        //     $tasks = Tasks::query()
        //         ->where('project_id', '=', $request->project_id)
        //         ->paginate(10);
        //     $tasks->appends(array('search' => $search));
        // }

        $data = [
            'title' => 'HomePage',
            'page_title' => 'HomePage',
            'breadcumb' => [['link' => '/', 'name' => 'homePage'], ['name' => 'users/project/tasks']],
            // 'search' => $search,
            'tasks' => $tasks,
            'project_id' => $request->project_id,
            'userData' => [
                'id' => $userData['id'],
                'name' => $userData['name'],
                'email' => $userData['email'],
            ],
        ];

        return view('frontend.pages.Tasks.all_tasks')->with($data);
    }


    ////////////////////// create task

    function createTaskPage()
    {
        $userData = auth()->guard('web')->user();
        $projects = Projects::all();
        $data = [
            'title' => 'HomePage',
            'page_title' => 'Create Task',
            'breadcumb' => [['link' => '/', 'name' => 'homePage'], ['name' => 'user/task/new']],
            'projects' => $projects,
            'userData' => [
                'id' => $userData['id'],
                'name' => $userData['name'],
                'email' => $userData['email'],
            ],

        ];
        return view('frontend.pages.tasks.newTask')->with($data);
    }

    function task_created(Request $request)
    {
        $request->validate(
            [
                'task_name' => 'required',
                'project_id' => 'required',
                'expected_duration' => 'required'
            ]
        );

        $model = new Tasks;
        $model->project_id = $request->project_id;
        $model->task_name = $request->task_name;
        $model->active_status = 'stopped';
        $model->expected_duration = $request->expected_duration;
        $model->description = $request->description;
        try {
            $data = $model->save();
            if ($data) {
                Alert::success('Success', 'Task has been successfully created');
                return redirect(route('homePage'));
            } else {
                Alert::error('Failed', 'Something went wrong!');
                return back();
            }
        } catch (Exception $e) {
            Alert::error('Failed', 'Task name already exist. Try with different name');
            return back();
        }
    }

    /////////// START TASK

    function startTASK(Request $request)
    {

        $timesheet = new Time_Sheet;

        $timesheet->task_id = $request->task_id;
        $timesheet->user_id = $request->user_id;
        $timesheet->description = 'started';
        $timesheet->start_time = now();;
        $check = $timesheet->save();
        if ($check) {
            $task = Tasks::find($request->task_id);
            $task->active_status = 'Started';
            $task->save();
            return redirect(route('performingTask'));
        } else {
            Alert::error('Error', 'Task not started');
            return back();
        }
    }

    /////////////// stop task

    function stopTask(Request $request)
    {
        $timesheet = Time_Sheet::find($request->id);

        if ($timesheet != null) {

            $timesheet->end_time = now();

            $durationCal = Carbon::parse($timesheet->end_time)->diffInMinutes(Carbon::parse($timesheet->start_time));
            $timesheet->TotalDuration = $durationCal;
            $timesheet->description = 'stopped';


            $tasks = Tasks::find($timesheet->task_id);
            $tasks->duration = $tasks->duration + $durationCal;
            $tasks->active_status = 'stopped';

            $tasks->save();
            $check = $timesheet->save();
            if($check){
                return redirect(route('completedTask'));
            }
        }else{
            Alert::error('Error', 'No Task found with this id');
            return back();
        }
    }

    //////////////// completed task

    function completedTask(Request $request)
    {
        $userData = auth()->guard('web')->user();
        $user_id = $userData['id'];
        $completedTask = Time_Sheet::where('user_id', '=', $user_id)->get();
        $tasks = Tasks::all();

        $workDuration = 0;

        foreach ($completedTask as $item) {
            $workDuration += intval($item->TotalDuration);
        }

        $data = [
            'title' => 'HomePage',
            'page_title' => 'Completed Task',
            'breadcumb' => [['link' => '/', 'name' => 'homePage'], ['name' => 'user/completedTask']],
            // 'search' => $search,
            'completedTask' => $completedTask,
            'workDuration' => strval($workDuration),
            'tasks' => $tasks,
            'userData' => $userData,
        ];

        return view('frontend.pages.Tasks.completed_task')->with($data);
    }

    //////////////// performing task
    function performingTask(Request $request)
    {
        $userData = auth()->guard('web')->user();
        $user_id = $userData['id'];
        $performingTask = Time_Sheet::where('user_id', '=', $user_id)->get();
        $tasks = Tasks::all();

        $data = [
            'title' => 'HomePage',
            'page_title' => 'Performing Task',
            'breadcumb' => [['link' => '/', 'name' => 'homePage'], ['name' => 'user/performingTask']],
            // 'search' => $search,
            'performingTask' => $performingTask,
            'tasks' => $tasks,
            'userData' => $userData,
        ];

        return view('frontend.pages.Tasks.performing_task')->with($data);
    }




    ////////////////////user profile

    function changePasswordPage()
    {
        $userData = auth()->guard('web')->user();
        $data = [
            'title' => 'HomePage',
            'page_title' => 'Change Password',
            'breadcumb' => [['link' => '/', 'name' => 'homePage'], ['name' => 'user/profile/changePassword']],
            'userData' => [
                'id' => $userData['id'],
                'name' => $userData['name'],
                'email' => $userData['email'],
            ],
            // 'users'=>$users,
        ];
        return view('frontend.pages.userProfile.changePassword')->with($data);
    }

    function passwordChanged(Request $request)
    {
        $request->validate(
            [
                'old_pass' => 'required',
                'new_pass' => 'required',
                'con_pass' => 'required|same:new_pass'
            ]
        );

        $userData = auth()->guard('web')->user();
        $password = $userData['password'];
        if (Hash::check($request->old_pass, $password)) {
            $id = $userData['id'];
            $user = User::where('id', $id)->first();
            $user->password = Hash::make($request->new_pass);
            try {
                $result = $user->save();
                if ($result) {
                    Alert::success('success', 'Password is changed successfully');
                    return redirect(route('homePage'));
                } else {
                    Alert::error('Failed', 'Something went wrong!');
                    return back()->withErrors('Something went wrong! Please try again later');
                }
            } catch (Exception $e) {
                Alert::error('Failed', 'Something went wrong!');
                return back()->withErrors('Something went wrong! Please try again later');
            }
        } else {
            $request->validate(
                [
                    'old_pass' => 'required'
                ]
            );
        }
    }

    function userLogOut()
    {
        Session::flush();
        Auth::logout();
        return redirect('/');
    }
}
