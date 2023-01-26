<?php

namespace App\Http\Controllers;

use App\Models\Tasks;
use App\Models\Time_Sheet;
use App\Models\User;
use Carbon\Carbon;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserAPI extends Controller
{
    //

    function login(Request $request)
    {

        $result = $request->has(['email', 'password',]);
        if ($result == 1) {
            $user = User::where('email', $request->email)->first();
            // print_r($data);
            if (!$user || !Hash::check($request->password, $user->password)) {
                $res = [
                    'statusCode' => 0,
                    'status' => false,
                    'message' => 'These credentials do not match our records.',

                ];
                return response($res, 404);
            }

            $token = $user->createToken('my-app-token')->plainTextToken;
            $response = [
                'statusCode' => 200,
                'status' => true,
                'message' => 'Admin Login successfully',
                'user' => $user,
                'token' => $token
            ];
            return response($response, 200);
        } else {

            $response = [
                'statusCode' => 0,
                'status' => false,
                'message' => 'Fields are required',
                'data' => [
                    'The field email is required',
                    'The field password is required',
                ]

            ];

            return response($response, 404);
        }
    }

    function forgotPassword(Request $request)
    {
        $result = $request->has(['email', 'password']);
        if ($result == 1) {
            $user = User::where('email', '=', $request->email)->first();

            if ($user) {

                try {
                    $user->password = Hash::make($request->password);
                    $check = $user->save();
                    if ($check) {
                        $response = [
                            'statusCode' => 200,
                            'status' => true,
                            'message' => 'Password has been successfully changed',
                            'user' => $user,
                        ];
                        return response($response, 200);
                    } else {
                        $response = [
                            'statusCode' => 0,
                            'status' => false,
                            'message' => 'Data can not be saved',
                            'data' => [],
                        ];
                        return response($response, 200);
                    }
                } catch (Exception $e) {
                    $response = [
                        'statusCode' => 0,
                        'status' => false,
                        'message' => 'Password can not be changed',
                        'data' => $e,
                    ];
                    return response($response, 404);
                }
            } else {
                $response = [
                    'statusCode' => 0,
                    'status' => false,
                    'message' => 'No user found with this email',
                ];
                return response($response, 404);
            }
        } else {

            $response = [
                'statusCode' => 0,
                'status' => false,
                'message' => 'Fields are required',
                'data' => [
                    'The field email is required',
                    'The field password is required',
                ]

            ];
            return response($response, 404);
        }
    }

    function startTask(Request $request)
    {
        $result = $request->has(['task_id', 'user_id',]);
        if ($result == 1) {


            $timesheet = new Time_Sheet;

            $timesheet->task_id = $request->task_id;
            $timesheet->user_id = $request->user_id;
            $timesheet->start_time = now();;
            $check = $timesheet->save();

            $task = Tasks::find($request->task_id);
            $task->active_status = 'Started';
            $task->save();

            if ($check) {
                $response = [
                    'statusCode' => 200,
                    'status' => true,
                    'message' => 'Task has been started successfully',
                    'data' => $timesheet,
                ];
                return response($response, 200);
            } else {
                $response = [
                    'statusCode' => 0,
                    'status' => false,
                    'message' => 'Data can not be saved',
                    'data' => [],
                ];
                return response($response, 404);
            }
        } else {

            $response = [
                'statusCode' => 0,
                'status' => false,
                'message' => 'Fields are required',
                'data' => [
                    'The field task_id is required',
                    'The field user_id is required',
                ]

            ];
            return response($response, 404);
        }
    }


    function endTask(Request $request)
    {
        $result = $request->has(['id',]);
        if ($result == 1) {


            $timesheet = Time_Sheet::find($request->id);

            if ($timesheet != null) {

                $timesheet->end_time = now();
                try {
                    $durationCal = Carbon::parse($timesheet->end_time)->diffInMinutes(Carbon::parse($timesheet->start_time));
                    $timesheet->TotalDuration = $durationCal;


                    $tasks = Tasks::find($timesheet->task_id);
                    $tasks->duration = $tasks->duration + $durationCal;
                    $tasks->active_status = 'stopped';

                    $tasks->save();
                    $check = $timesheet->save();



                    if ($check) {
                        $response = [
                            'statusCode' => 200,
                            'status' => true,
                            'message' => 'Task has been stopped successfully',
                            'data' => $timesheet,
                        ];
                        return response($response, 200);
                    } else {
                        $response = [
                            'statusCode' => 0,
                            'status' => false,
                            'message' => 'Data can not be saved',
                            'data' => [],
                        ];
                        return response($response, 404);
                    }
                } catch (Exception $e) {
                    $response = [
                        'statusCode' => 0,
                        'status' => false,
                        'message' => 'Error',
                        'data' => $e,

                    ];
                    return response($response, 404);
                }
            } else {
                $response = [
                    'statusCode' => 0,
                    'status' => false,
                    'message' => 'No task started with this id',
                    'data' => [],

                ];
                return response($response, 404);
            }
        } else {

            $response = [
                'statusCode' => 0,
                'status' => false,
                'message' => 'Fields are required',
                'data' => [
                    'The field id is required',
                ]

            ];
            return response($response, 404);
        }
    }

    function partOfTask(Request $request)
    {
        if ($request->has(['task_id'])) {
            $task = Time_Sheet::where('task_id' , '=' , $request->task_id)->get();
            $response = [
                'statusCode' => 200,
                'status' => true,
                'message' => 'Data found successfully',
                'data' =>$task,
            ];
            return response($response, 404);

        }else{

            $response = [
                'statusCode' => 0,
                'status' => false,
                'message' => 'Fields are required',
                'data' => [
                    'The field task_id is required',
                ]

            ];
            return response($response, 404);
        }
    }


    function tasksbyuser(Request $request){

        if ($request->has(['user_id'])) {
            $task = Time_Sheet::where('user_id' , '=' , $request->user_id)->get();
            $response = [
                'statusCode' => 200,
                'status' => true,
                'message' => 'data found successfully',
                'data' =>$task,
            ];
            return response($response, 404);

        }else{

            $response = [
                'statusCode' => 0,
                'status' => false,
                'message' => 'Fields are required',
                'data' => [
                    'The field user_id is required',
                ]

            ];
            return response($response, 404);
        }
    }
}
