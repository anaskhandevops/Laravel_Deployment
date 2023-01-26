<?php

namespace App\Http\Controllers;

use App\Models\Projects;
use App\Models\Tasks;
use App\Models\User;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AdminAPI extends Controller
{
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
            if ($user->user_type == 'admin') {
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
                    'message' => 'These credentials do not match our records.'
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

    function createUser(Request $request)
    {
        $result = $request->has(['name', 'email', 'password', 'user_type']);
        if ($result == 1) {

            try {
                $user = new User;
                $user->name = $request->name;
                $user->email = $request->email;
                $user->user_type = $request->user_type;
                $user->password = Hash::make($request->password);
                $result = $user->save();
                if ($result) {
                    $token = $user->createToken('my-app-token')->plainTextToken;
                    $response = [
                        'statusCode' => 200,
                        'status' => true,
                        'message' => 'User has been successfully created',
                        'user' => $user,
                        'token' => $token
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
                    'message' => 'Email already exist for a user',
                    'data' => $e,
                ];
                return response($response, 404);
            }
        } else {

            $response = [
                'statusCode' => 0,
                'status' => false,
                'message' => 'Fields are required',
                'data' => [
                    'The field name is required',
                    'The field email is required',
                    'The field password is required',
                    'The field user_type is required',
                ]

            ];
            return response($response, 404);
        }
    }

    function updateUser(Request $request)
    {
        $result = $request->has(['id', 'name', 'email', 'password', 'user_type']);
        if ($result == 1) {
            $user = User::find($request->id);

            if ($user != null) {

                try {
                    $user->name = $request->name;
                    $user->email = $request->email;
                    $user->user_type = $request->user_type;
                    $user->password = Hash::make($request->password);
                    $check = $user->save();
                    if ($check) {
                        $response = [
                            'statusCode' => 200,
                            'status' => true,
                            'message' => 'User has been successfully updated',
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
                        'message' => 'Email already exist for a user',
                        'data' => $e,
                    ];
                    return response($response, 404);
                }
            } else {
                $response = [
                    'statusCode' => 0,
                    'status' => false,
                    'message' => 'No user found with this id',
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
                    'The field name is required',
                    'The field email is required',
                    'The field password is required',
                    'The field user_type is required',
                ]

            ];
            return response($response, 404);
        }
    }

    function findUser(Request $request)
    {
        $result = $request->has(['email']);

        if ($result == 1) {
            $user = User::where('email', '=', $request->email)->first();
            if (!$user) {
                $response = [
                    'statusCode' => 0,
                    'status' => false,
                    'message' => 'No user found with this id',
                ];
                return response($response, 404);
            } else {
                $response = [
                    'statusCode' => 200,
                    'status' => true,
                    'message' => 'User found successfully',
                    'user' => $user,
                ];
                return response($response, 200);
            }

            // if ($user != null) {

            //     $response = [
            //         'statusCode' => 200,
            //         'status' => true,
            //         'message' => 'User has been successfully created',
            //         'user' => $user,
            //     ];
            //     return response($response, 200);

            // }
            // else{
            //     $response = [
            //         'statusCode' => 0,
            //         'status' => false,
            //         'message' => 'No user found with this id',
            //     ];
            //     return response($response, 404);
            // }


        } else {

            $response = [
                'statusCode' => 0,
                'status' => false,
                'message' => 'Fields are required',
                'data' => [
                    'The field email is required',
                ]

            ];
            return response($response, 404);
        }
    }

    function deleteUser(Request $request)
    {

        $result = $request->has(['id']);

        if ($result == 1) {
            $user = User::find($request->id);
            if ($user == null) {
                $response = [
                    'statusCode' => 0,
                    'status' => false,
                    'message' => 'No user found with this id',
                ];
                return response($response, 404);
            } else {
                $check = $user->delete();
                if ($check) {
                    $response = [
                        'statusCode' => 200,
                        'status' => true,
                        'message' => 'User found successfully',
                        'user' => $user,
                    ];
                    return response($response, 200);
                } else {
                    $response = [
                        'statusCode' => 0,
                        'status' => false,
                        'message' => 'Data can not be deleted',

                    ];
                    return response($response, 404);
                }
            }
        } else {

            $response = [
                'statusCode' => 0,
                'status' => false,
                'message' => 'Fields are required',
                'data' => [
                    'The field email is required',
                ]

            ];
            return response($response, 404);
        }
    }


    ///////////////////////////////  create task

    function createTask(Request $request)
    {
        $result = $request->has(['task_name', 'project_id', 'expected_duration', 'description']);
        if ($result == 1) {

            try {
                $task = new Tasks;
                $task->task_name = $request->task_name;
                $task->project_id = $request->project_id;
                $task->expected_duration = $request->expected_duration;
                $task->description = $request->description;
                $task->active_status = 'stopped';

                $result = $task->save();
                if ($result) {
                    $response = [
                        'statusCode' => 200,
                        'status' => true,
                        'message' => 'Task has been successfully created',
                        'data'=>$task,
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
                    'message' => 'Task name already exist for a user',
                    'data' => $e,
                ];
                return response($response, 404);
            }
        } else {

            $response = [
                'statusCode' => 0,
                'status' => false,
                'message' => 'Fields are required',
                'data' => [
                    'The field task_name is required',
                    'The field project_id is required',
                    'The field expected_duration is required',
                    'The field description is required',
                ]

            ];
            return response($response, 404);
        }
    }

    function getTask(Request $request){
        $result = $request->has([ 'project_id']);
        if ($result == 1) {

            $task = Tasks::where('project_id', '=', $request->project_id);
            if(!$task){
                $response = [
                    'statusCode' => 0,
                    'status' => false,
                    'message' => 'No tasks found with this project id',
                    'data' => []

                ];
                return response($response, 404);
            }else{
                $response = [
                    'statusCode' => 200,
                    'status' => true,
                    'message' => 'data found successfully',
                    'data' => $task,

                ];
                return response($response, 200);
            }
        } else {

            $response = [
                'statusCode' => 0,
                'status' => false,
                'message' => 'Fields are required',
                'data' => [
                    'The field project_id is required',
                ]

            ];
            return response($response, 404);
        }

    }

////////////////////////////// project



function createProject(Request $request)
    {
        $result = $request->has(['project_name']);
        if ($result == 1) {

            try {
                $project = new Projects;
                $project->project_name = $request->project_name;

                $result = $project->save();
                if ($result) {
                    $response = [
                        'statusCode' => 200,
                        'status' => true,
                        'message' => 'Project has been successfully created',
                        'data'=>$project,
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
                    'message' => 'Project name already exist for a user',
                    'data' => $e,
                ];
                return response($response, 404);
            }
        } else {

            $response = [
                'statusCode' => 0,
                'status' => false,
                'message' => 'Fields are required',
                'data' => [
                    'The field project_name is required',
                ]

            ];
            return response($response, 404);
        }
    }


    function updateProject(Request $request)
    {
        $result = $request->has(['id','project_name']);
        if ($result == 1) {
            $project = Projects::find($request->id);
            if ($project == null) {
                $response = [
                    'statusCode' => 0,
                    'status' => false,
                    'message' => 'No Project found with this id',
                    'data' => [],
                ];
                return response($response, 404);
            } else {
                try {

                    $project->project_name = $request->project_name;

                    $result = $project->save();
                    if ($result) {
                        $response = [
                            'statusCode' => 200,
                            'status' => true,
                            'message' => 'Project has been successfully created',
                            'data' => $project,
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
                        'message' => 'Project name already exist for a user',
                        'data' => $e,
                    ];
                    return response($response, 404);
                }
            }
        } else {

            $response = [
                'statusCode' => 0,
                'status' => false,
                'message' => 'Fields are required',
                'data' => [
                    'The field id is required',
                    'The field project_name is required',
                ]

            ];
            return response($response, 404);
        }
    }


    function getAllProject(){
        $project = Projects::all();
        $response = [
            'statusCode' => 200,
            'status' => true,
            'message' => 'Project found successfully',
            'data' => $project,
        ];
        return response($response, 200);
    }

}
