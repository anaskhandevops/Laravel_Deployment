<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AdminAPI;
use App\Http\Controllers\UserAPI;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::group(['middleware' => 'auth:sanctum'], function () {
    //All secure URL's

    Route::post('/admin/deleteUser', [AdminAPI::class, 'deleteUser']);
    Route::post('/admin/updateUser', [AdminAPI::class, 'updateUser']);



    ////////////////////////////// create tasks

    Route::post('/admin/createTask', [AdminAPI::class, 'createTask']);
    Route::post('/admin/getTask', [AdminAPI::class, 'getTask']);




/////////////////////////project
    Route::post('/admin/createProject', [AdminAPI::class, 'createProject']);
    Route::post('/admin/updateProject', [AdminAPI::class, 'updateProject']);
    Route::get('/admin/getAllProject', [AdminAPI::class, 'getAllProject']);





    //////////////////////////////////// user


    Route::post('user/startTask', [UserAPI::class, 'startTask']);
    Route::post('user/endTask', [UserAPI::class, 'endTask']);

    Route::post('user/partOfTask', [UserAPI::class, 'partOfTask']);

    Route::post('user/tasksbyuser', [UserAPI::class, 'tasksbyuser']);

});




Route::post('/admin/login', [AdminAPI::class, 'login']);
Route::post('/admin/createUser', [AdminAPI::class, 'createUser']);



Route::post('user/userLogin', [UserAPI::class, 'login']);
Route::post('/user/findUser', [AdminAPI::class, 'findUser']);
Route::post('/user/forgotPassword', [UserAPI::class, 'forgotPassword']);
