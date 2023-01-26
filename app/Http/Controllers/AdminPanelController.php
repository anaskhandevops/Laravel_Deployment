<?php

namespace App\Http\Controllers;

use App\Models\Projects;
use App\Models\Tasks;
use App\Models\Time_Sheet;
use App\Models\User;
use App\Models\UserType;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Session;
use RealRashid\SweetAlert\Facades\Alert;

class AdminPanelController extends Controller
{



    function adminLoginPage()
    {

        return view('backend.auth.login');
        // return view('admin.admin_login_page');
    }


    function verify_admin(Request $request)
    {
        $request->validate(
            [
                'email' => 'required|email',
                'password' => 'required',
            ],
            [
                'password.required' => 'Password is required',
            ]
        );

        // $user = User::where('email', $request->email)->first();
        // // print_r($data);
        // if (!$user || !Hash::check($request->password, $user->password)) {
        //     Alert::error('Invalid Email and Password');
        //     return back();
        // }
        // if ($user->admin_type == 'admin') {
        //     Auth::attempt();
        // } else {

        // }

        //    // return redirect(route('dashboard'));
        $credentials = $request->only('email', 'password');
        // return Hash::make(123);

        if (auth()->guard('web')->attempt($credentials)) {
            if (Auth::user()->user_type == 'admin') {
                // admin dashboard path
                return redirect(route('dashboard'));
            } else {
                return redirect(route('homePage'));
            }
            // return auth()->guard('web')->user();
            // echo 'login';
            //Alert::success('Login Successfully');

        } else {
            Alert::error('Invalid Email and Password');
            return back();
        }
    }

    function dashboard()
    {
        $users = User::all()->count();
        $projects = Projects::all()->count();
        $tasks = Tasks::all()->count();
        $userData = auth()->guard('web')->user();
        // echo 'hello world';
        $data = [
            'title' => 'Dashboard',
            'page_title' => 'Dashboard',
            'breadcumb' => [['name' => 'dashboard']],
            'userCount' => $users,
            'projectCount' => $projects,
            'taskCount' => $tasks,
            'userData' => [
                'id' => $userData['id'],
                'name' => $userData['name'],
                'email' => $userData['email'],
            ],
        ];

        // $data = compact('title', 'page_title');
        return view('backend.pages.dashboard.index')->with($data);

        // $users = User::all()->count();
        // $projects = Projects::all()->count();
        // $tasks = Tasks::all()->count();

        // $data = compact('users', 'projects', 'tasks');
        // return view('admin.dashboard')->with($data);
    }



    /////////////////  users

    function createUserPage()
    {
        $userData = auth()->guard('web')->user();
        $user_type = UserType::all();
        $data = [
            'title' => 'Dashboard',
            'page_title' => 'Create User',
            'breadcumb' => [['link' => '/', 'name' => 'dashboard'], ['name' => 'admin/users/new']],
            'user_type' => $user_type,
            'userData' => [
                'id' => $userData['id'],
                'name' => $userData['name'],
                'email' => $userData['email'],
            ],
            // 'users'=>$users,
        ];
        return view('backend.pages.users.newUser')->with($data);
        // return view('admin.users.create_user_page');
    }

    function userCreated(Request $request)
    {
        $request->validate(
            [
                'name' => 'required',
                'email' => 'required|email',
                'password' => 'required',
                'user_type' => 'required',
                'rePassword' => 'required|same:password'
            ]
        );

        try {
            $user = new User;
            $user->name = $request->name;
            $user->email = $request->email;
            $user->user_type = $request->user_type;
            $user->password = Hash::make($request->password);
            $result = $user->save();
            if ($result) {
                Alert::success('Success', 'User has been successfully created');
                return redirect(route('users.index'));
            } else {
                Alert::error('Failed', 'Something went wrong!');
                return back();
            }
        } catch (Exception $e) {
            Alert::error('Failed', 'This email already exist!Try with different one');
            return back();
        }
    }

    function updateUserByID(Request $request)
    {
        $userData = auth()->guard('web')->user();
        $user_type  = UserType::all();
        $data = [
            'title' => 'Dashboard',
            'page_title' => 'Update User',
            'breadcumb' => [['link' => '/', 'name' => 'dashboard'], ['name' => 'admin/users/update']],
            'user_type' => $user_type,
            'id' => $request->id,
            'name' => $request->name,
            'email' => $request->email,
            'userData' => [
                'id' => $userData['id'],
                'name' => $userData['name'],
                'email' => $userData['email'],
            ],
        ];

        return view('backend.pages.users.updateUserById')->with($data);
    }


    function user_updated_by_id(Request $request)
    {
        $request->validate(
            [
                'id' => 'required',
                'name' => 'required',
                'email' => 'required|email',
                'password' => 'required',
                'user_type' => 'required',
                'rePassword' => 'required|same:password'
            ]
        );
        try {
            $user = User::find($request->id);
            if ($user == null) {

                Alert::error('Failed', 'No User found with this id');
                return back();
            }
            $user->name = $request->name;
            $user->email = $request->email;
            $user->user_type = $request->user_type;
            $user->password = Hash::make($request->password);
            try {
                $result = $user->save();

                if ($result) {
                    Alert::success('Success', 'User has been successfully updated');
                    // return back();
                    return redirect(route('users.index'));
                } else {
                    Alert::error('Failed', 'Something went wrong!');
                    return back();
                }
            } catch (Exception $e) {
                Alert::error('Failed', 'This email already exist for a user. Please try with different one...' . $e);
                return back();
            }
        } catch (Exception $e) {
            Alert::error('Failed', 'No User found with this id');
            return back();
        }
    }

    function updateUserPage()
    {
        $userData = auth()->guard('web')->user();
        $user_type = UserType::all();
        $data = [
            'title' => 'Dashboard',
            'page_title' => 'Update User',
            'breadcumb' => [['link' => '/', 'name' => 'dashboard'], ['name' => 'admin/user/update']],
            'user_type' => $user_type,
            'userData' => [
                'id' => $userData['id'],
                'name' => $userData['name'],
                'email' => $userData['email'],
            ],
        ];
        return view('backend.pages.users.updateUser')->with($data);
    }

    function user_updated(Request $request)
    {
        $request->validate(
            [
                'id' => 'required',
                'name' => 'required',
                'email' => 'required|email',
                'password' => 'required',
                'user_type' => 'required',
                'rePassword' => 'required|same:password'
            ]
        );

        try {
            $user = User::find($request->id);
            if ($user == null) {

                Alert::error('Failed', 'No User found with this id');
                return back();
            }
            $user->name = $request->name;
            $user->email = $request->email;
            $user->user_type = $request->user_type;
            $user->password = Hash::make($request->password);
            $result = $user->save();

            if ($result) {
                Alert::success('Success', 'User has been successfully updated');
                return redirect(route('users.index'));
            } else {
                Alert::error('Failed', 'Something went wrong!');
                return back();
            }
        } catch (Exception $e) {
            Alert::error('Failed', 'This email already exist for another user. Try with different email');
            return back();
        }
    }

    function deleteUser($id)
    {
        $user = User::find($id);
        if ($user == null) {
            return response('No data found with this Id', 250);
        }
        try {
            $result = $user->delete();
            if ($result) {
                return response('User id deleted successfully', 210);
            } else {
                return response('Data can not be deleted', 240);
            }
        } catch (Exception $e) {
            return response('Data can not be deleted', 260);
        }
    }



    ////////////////////// projects

    function createProjectPage()
    {
        $userData = auth()->guard('web')->user();
        $data = [
            'title' => 'Dashboard',
            'page_title' => 'Create Project',
            'breadcumb' => [['link' => '/', 'name' => 'dashboard'], ['name' => 'admin/project/new']],
            'userData' => [
                'id' => $userData['id'],
                'name' => $userData['name'],
                'email' => $userData['email'],
            ],
            // 'users'=>$users,
        ];
        return view('backend.pages.projects.newProject')->with($data);
    }

    function project_created(Request $request)
    {
        $request->validate(
            [
                'project_name' => 'required'
            ],
            [
                'project_name.required' => 'Project name is required'
            ]
        );

        $model = new Projects;
        $model->project_name = $request->project_name;
        try {
            $data = $model->save();
            if ($data) {
                Alert::success('Success', 'Project has been successfully created');
                return redirect(route('dashboard'));
            } else {
                Alert::error('Failed', 'Something went wrong!. Try again later');
                return back();
            }
        } catch (Exception $e) {
            Alert::error('Failed', 'Project already exist with this name. Please try again with different name');
            return back();
        }
    }

    function updateProjectPage()
    {
        $userData = auth()->guard('web')->user();
        $data = [
            'title' => 'Dashboard',
            'page_title' => 'Update Project',
            'breadcumb' => [['link' => '/', 'name' => 'dashboard'], ['name' => 'admin/project/update']],
            'userData' => [
                'id' => $userData['id'],
                'name' => $userData['name'],
                'email' => $userData['email'],
            ],
            // 'users'=>$users,
        ];

        return view('backend.pages.projects.updateProject')->with($data);
    }

    function project_updated(Request $request)
    {
        $request->validate(
            [
                'id' => 'required',
                'project_name' => 'required'
            ],

        );

        try {
            $project = Projects::find($request->id);
            if ($project == null) {

                Alert::error('Failed', 'No project found with this id');
                return back();
            }

            $project->project_name = $request->project_name;
            $result = $project->save();
            if ($result) {
                Alert::success('Success', 'Project name has been successfully updated');
                return redirect(route('dashboard'));
            } else {
                Alert::error('Failed', 'Something went wrong!');
                return back();
            }
        } catch (Exception $e) {
            Alert::error('Failed', 'No project found with this id');
            return back();
        }
    }

    function updateProjectPageById(Request $request)
    {
        $userData = auth()->guard('web')->user();
        $data = [
            'title' => 'Dashboard',
            'page_title' => 'Update Project',
            'breadcumb' => [['link' => '/', 'name' => 'dashboard'], ['name' => 'admin/project/update/' . $request->id]],
            'id' => $request->id,
            'project_name' => $request->project_name,
            'userData' => [
                'id' => $userData['id'],
                'name' => $userData['name'],
                'email' => $userData['email'],
            ],
            // 'users'=>$users,
        ];
        // $id = $request->id;
        // $project_name = $request->project_name;
        // $data = compact('id', 'project_name');
        return view('backend.pages.projects.updateProjectById')->with($data);
    }

    function project_updated_by_id(Request $request)
    {

        $request->validate(
            [
                'id' => 'required',
                'project_name' => 'required',
            ]
        );

        try {
            $project = Projects::find($request->id);
            if ($project == null) {

                Alert::error('Failed', 'No project found with this id');
                return back();
            }
            $project->project_name = $request->project_name;
            try {
                $result = $project->save();
                if ($result) {
                    Alert::success('Success', 'Project name has been successfully updated');
                    return redirect(route('projects.index'));
                } else {
                    Alert::error('Failed', 'Something went wrong!');
                    return back();
                }
            } catch (Exception $e) {
                Alert::error('Failed', 'Project Name already exist. Try with different name' . $e);
                return back();
            }
        } catch (Exception $e) {
            Alert::error('Failed', 'No project found with this id' . $e);
            return back();
        }
    }

    function deleteProject($id)
    {
        try {
            $project = Projects::find($id);
            if ($project == null) {
                // echo 'no record';
                return response('No data found with this Id', 250);
            }
            try {
                $result = $project->delete();
                if ($result) {
                    // echo 'project is deleted';
                    return response('Project deleted successfully', 210);
                } else {
                    // echo 'project can no be deleted';
                    return response('Data can not be deleted', 240);
                }
            } catch (Exception $e) {
                // echo 'error while deleting';
                return response('Some tasks are assign to this projects, first delete tasks', 260);
            }
        } catch (Exception $e) {
            // echo 'error while finding';
            return response('Error while finding', 250);
        }
    }



    ///////////////////////////// tasks

    function createTaskPage()
    {
        $userData = auth()->guard('web')->user();
        $projects = Projects::all();
        $data = [
            'title' => 'Dashboard',
            'page_title' => 'Create Task',
            'breadcumb' => [['link' => '/', 'name' => 'dashboard'], ['name' => 'admin/task/new']],
            'projects' => $projects,
            'userData' => [
                'id' => $userData['id'],
                'name' => $userData['name'],
                'email' => $userData['email'],
            ],

        ];
        return view('backend.pages.tasks.newTask')->with($data);
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
                return redirect(route('tasks.index'));
            } else {
                Alert::error('Failed', 'Something went wrong!');
                return back();
            }
        } catch (Exception $e) {
            Alert::error('Failed', 'Task name already exist. Try with different name');
            return back();
        }
    }

    function updateTaskPage()
    {
        $userData = auth()->guard('web')->user();
        $projects = Projects::all();
        $data = [
            'title' => 'Dashboard',
            'page_title' => 'Create Task',
            'breadcumb' => [['link' => '/', 'name' => 'dashboard'], ['name' => 'admin/task/update']],
            'projects' => $projects,
            'userData' => [
                'id' => $userData['id'],
                'name' => $userData['name'],
                'email' => $userData['email'],
            ],

        ];
        return view('backend.pages.tasks.updateTask')->with($data);
    }
    function task_updated(Request $request)
    {
        $request->validate(
            [
                'id' => 'required',
                'task_name' => 'required',
                'project_id' => 'required',
                'expected_duration' => 'required',
            ]
        );

        try {
            $task = Tasks::find($request->id);
            if ($task == null) {

                Alert::error('Failed', 'No task found with this id');
                return back();
            }

            $task->task_name = $request->task_name;
            $task->project_id = $request->project_id;
            $task->expected_duration = $request->project_id;
            $task->description = $request->description;

            try {
                $result = $task->save();
                if ($result) {
                    Alert::success('Success', 'Task has been successfully updated');
                    return redirect(route('dashboard'));
                } else {
                    Alert::error('Failed', 'Something went wrong!');
                    return back();
                }
            } catch (Exception $e) {
                Alert::error('Failed', 'Task name already exist. Try with different name' . $e);
                return back();
            }
        } catch (Exception $e) {
            Alert::error('Failed', 'No task found with this id' . $e);
            return back();
        }
    }
    function updateTaskPageById(Request $request)
    {
        $userData = auth()->guard('web')->user();

        $projects = Projects::all();
        $data = [
            'title' => 'Dashboard',
            'page_title' => 'Update Task',
            'breadcumb' => [['link' => '/', 'name' => 'dashboard'], ['name' => 'admin/task/update/' . $request->id]],
            'id' => $request->id,
            'task_name' => $request->task_name,
            'project_id' => $request->project_id,
            'description' => $request->description,
            'expected_duration' => $request->expected_duration,
            'projects' => $projects,
            'userData' => $userData,
        ];




        // $id = $request->id;
        // $project_name = $request->project_name;
        // $data = compact('id', 'project_name');
        return view('backend.pages.tasks.updateTaskById')->with($data);
    }

    function task_updated_by_id(Request $request)
    {
        $request->validate(
            [
                'id' => 'required',
                'task_name' => 'required',
                'project_id' => 'required',
                'expected_duration' => 'required',
            ]
        );

        try {
            $task = Tasks::find($request->id);
            if ($task == null) {

                Alert::error('Failed', 'No task found with this id');
                return back();
            }
            $task->task_name = $request->task_name;
            $task->project_id = $request->project_id;
            $task->expected_duration = $request->expected_duration;
            $task->description = $request->description;
            try {
                $result = $task->save();
                if ($result) {
                    Alert::success('Success', 'Task has been successfully updated');
                    return redirect(route('tasks.index'));
                } else {
                    Alert::error('Failed', 'Something went wrong!');
                    return back();
                }
            } catch (Exception $e) {
                Alert::error('Failed', 'Task name already exist. Try with different name' . $e);
                return back();
            }
        } catch (Exception $e) {
            Alert::error('Failed', 'No task found with this id' . $e);
            return back();
        }
    }

    function deleteTask($id)
    {
        try {
            $task = Tasks::find($id);
            if ($task == null) {
                // echo 'no record';
                return response('No data found with this Id', 250);
            }
            try {
                $result = $task->delete();
                if ($result) {
                    // echo 'project is deleted';
                    return response('Project deleted successfully', 210);
                } else {
                    // echo 'project can no be deleted';
                    return response('Data can not be deleted', 240);
                }
            } catch (Exception $e) {
                // echo 'error while deleting';
                return response('Data can not be deleted', 230);
            }
        } catch (Exception $e) {
            // echo 'error while finding';
            return response('Error while finding', 250);
        }
    }

    function getTaskDetail(Request $request)
    {
        $request->validate([
            'id' => 'required'
        ]);

        $userData = auth()->guard('web')->user();
        $tasks = Time_Sheet::where('task_id', '=', $request->id)->get();
        $users = User::all();

        $data = [
            'title' => 'Dashboard',
            'page_title' => 'Task Detail',
            'breadcumb' => [['link' => '/', 'name' => 'dashboard'], ['name' => 'admin/getTaskDetail/' . $request->id]],
            'tasks' => $tasks,
            'users' => $users,
            'task_name' => $request->task_name,
            'expected_duration' => $request->expected_duration,
            'duration' => $request->duration,
            'userData' => $userData,
        ];
        return view('backend.pages.tasks.task_detail')->with($data);
    }

    ////////////////////////////////////

    function totalUsersPage(Request $request)
    {
        $userData = auth()->guard('web')->user();

        $search = $request['search'] ?? "";

        if ($search != '') {

            $users = User::query()
                ->where('name', 'LIKE', "%{$search}%")
                ->orWhere('email', 'LIKE', "%{$search}%")
                ->paginate(10);
            $users->appends(array('search' => $search));
        } else {
            $users = User::where('user_type', '!=', '')->paginate(10);
        }

        $data = [
            'title' => 'Dashboard',
            'page_title' => 'Users',
            'breadcumb' => [['link' => '/', 'name' => 'dashboard'], ['name' => 'admin/users/all']],
            'search' => $search,
            'users' => $users,
            'userData' => [
                'id' => $userData['id'],
                'name' => $userData['name'],
                'email' => $userData['email'],
            ],
        ];
        return view('backend.pages.users.index')->with($data);

        // $data = compact('users', 'search');
        // return view('admin.users.total_user_page')->with($data);

    }

    function totalprojectsPage(Request $request)
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
            'title' => 'Dashboard',
            'page_title' => 'Projects',
            'breadcumb' => [['link' => '/', 'name' => 'dashboard'], ['name' => 'admin/projects/all']],
            'search' => $search,
            'projects' => $projects,
            'userData' => [
                'id' => $userData['id'],
                'name' => $userData['name'],
                'email' => $userData['email'],
            ],
        ];
        return view('backend.pages.projects.index')->with($data);

        // $data = compact('projects', 'search');
        // return view('backend.pages.projects.index')->with($data);
    }

    function totalTasksPage(Request $request)
    {
        $userData = auth()->guard('web')->user();
        $search = $request['search'] ?? "";

        if ($search != '') {
            $tasks = Tasks::query()
                ->where('task_name', 'LIKE', "%{$search}%")
                ->paginate(10);
            $tasks->appends(array('search' => $search));
        } else {
            $tasks = Tasks::paginate(10);
        }
        $projects = Projects::all();

        $data = [
            'title' => 'Dashboard',
            'page_title' => 'Tasks',
            'breadcumb' => [['link' => '/', 'name' => 'dashboard'], ['name' => 'admin/tasks/all']],
            'search' => $search,
            'tasks' => $tasks,
            'projects' => $projects,
            'userData' => [
                'id' => $userData['id'],
                'name' => $userData['name'],
                'email' => $userData['email'],
            ],
        ];
        return view('backend.pages.tasks.index')->with($data);

        // $data = compact('projects', 'search');
        // return view('backend.pages.projects.index')->with($data);

        // if ($request->ajax()) {
        //     $data = Tasks::select('*');
        //     return DataTables::of($data)
        //         ->setRowClass(function ($data) {
        //             return $data->id % 2 == 0 ? 'alert-success' : "alert-warning";
        //         })
        //         ->setRowId(function ($data) {
        //             return $data->id;
        //         })
        //         ->setRowAttr(
        //             [
        //                 // 'align' => 'center',

        //             ]
        //         )

        //         // ->setRowData([
        //         //     'date-name' => 'row-{{$name}}'
        //         // ])
        //         ->editColumn('project_id', function (Tasks $pro) {
        //             $user = Projects::find($pro->project_id);
        //             return $user->project_name;
        //         })
        //         ->editColumn('active_status', function (Tasks $pro) {
        //             return $pro->active_status;
        //         })
        //         ->editColumn('start_time', function (Tasks $pro) {
        //             if ($pro->start_time != '') {
        //                 return Carbon::parse($pro->start_time)->diffForHumans(Carbon::parse(now()));
        //             }
        //             return '';
        //         })
        //         ->editColumn('end_time', function (Tasks $pro) {
        //             if ($pro->end_time != '') {
        //                 return Carbon::parse($pro->end_time)->diffForHumans(Carbon::parse(now()));
        //             }
        //             return '';
        //         })
        //         ->editColumn('duration', function (Tasks $pro) {
        //             if ($pro->duration != '') {
        //                 $m = $pro->duration % 60;
        //                 $r = $pro->duration - $m;
        //                 $h = $r / 60;
        //                 return $h . 'hour  ' . $m . 'm';
        //             }
        //             return '';
        //         })
        //         ->editColumn('created_at', function (Tasks $pro) {
        //             return $pro->created_at->diffForHumans(Carbon::parse(now()));
        //         })
        //         ->editColumn('updated_at', function (Tasks $pro) {
        //             return $pro->updated_at->diffForHumans(Carbon::parse(now()));
        //         })

        //         ->make(true);

        // }
        // return view('admin.tasks.total_tasks_page');
    }


    //////////////////////////////// profile

    function changePasswordPage()
    {
        $userData = auth()->guard('web')->user();
        $data = [
            'title' => 'Dashboard',
            'page_title' => 'Change Password',
            'breadcumb' => [['link' => '/', 'name' => 'dashboard'], ['name' => 'admin/profile/changePassword']],
            'userData' => [
                'id' => $userData['id'],
                'name' => $userData['name'],
                'email' => $userData['email'],
            ],
            // 'users'=>$users,
        ];
        return view('backend.pages.userProfile.changePassword')->with($data);
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
                    return redirect(route('dashboard'));
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
