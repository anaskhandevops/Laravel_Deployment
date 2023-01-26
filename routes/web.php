<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AdminPanelController;
use App\Http\Controllers\UserController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return view('welcome');
// });



Route::group(['middleware', 'guest'], function () {

    Route::get(
        '/',
        function () {
            return redirect(route('login'));
        }
    );
    Route::get('/admin/login', [AdminPanelController::class, 'adminLoginPage'])->name('login');
    Route::post('/admin/login/verify', [AdminPanelController::class, 'verify_admin'])->name('verifyLogin');
});


////////////////// authenticated routes
Route::group(['middleware' => 'auth'], function () {

    ///////// admin routes
    Route::middleware(['auth', 'isAdmin'])->group(function () {
        //////////////////////

        Route::get('admin/dashboard', [AdminPanelController::class, 'dashboard'])->name('dashboard');


        /////////////////////// users
        Route::get('admin/users/all', [AdminPanelController::class, 'totalUsersPage'])->name('users.index');

        Route::get('admin/user/new', [AdminPanelController::class, 'createUserPage'])->name('createUser');
        Route::post('admin/createUser', [AdminPanelController::class, 'userCreated'])->name('userCreated');

        Route::get('admin/user/update', [AdminPanelController::class, 'updateUserPage'])->name('updateUserPage');
        Route::post('admin/updateUser', [AdminPanelController::class, 'user_updated'])->name('userUpdated');

        Route::get('admin/user/update/{id}', [AdminPanelController::class, 'updateUserByID'])->name('updateUserById');
        Route::post('admin/updateUserById', [AdminPanelController::class, 'user_updated_by_id'])->name('userUpdatedById');

        Route::get('admin/deleteUser/{id}', [AdminPanelController::class, 'deleteUser'])->name('userDeleted');



        //////////////////////projects

        Route::get('admin/projects/all', [AdminPanelController::class, 'totalprojectsPage'])->name('projects.index');

        Route::get('admin/project/new', [AdminPanelController::class, 'createProjectPage'])->name('createProject');
        Route::post('admin/createProject', [AdminPanelController::class, 'project_created'])->name('projectCreated');

        Route::get('admin/project/update', [AdminPanelController::class, 'updateProjectPage'])->name('updateProject');
        Route::post('admin/projectUpdated', [AdminPanelController::class, 'project_updated'])->name('projectUpdated');


        Route::get('admin/project/update/{id}', [AdminPanelController::class, 'updateProjectPageById'])->name('updateProjectById');
        Route::post('admin/projectUpdatedyd', [AdminPanelController::class, 'project_updated_by_id'])->name('projectUpdatedById');


        Route::get('admin/deleteProject/{id}', [AdminPanelController::class, 'deleteProject'])->name('projectDeleted');



        ///////////////////// tasks

        Route::get('admin/tasks/all', [AdminPanelController::class, 'totalTasksPage'])->name('tasks.index');

        Route::get('admin/task/new', [AdminPanelController::class, 'createTaskPage'])->name('createTask');
        Route::post('admin/createTask', [AdminPanelController::class, 'task_created'])->name('taskCreated');

        Route::get('admin/task/update', [AdminPanelController::class, 'updateTaskPage'])->name('updateTask');
        Route::post('admin/taskUpdated', [AdminPanelController::class, 'task_updated'])->name('taskUpdated');

        Route::get('admin/task/updateById', [AdminPanelController::class, 'updateTaskPageById'])->name('updateTaskById');
        Route::post('admin/taskUpdatedyd', [AdminPanelController::class, 'task_updated_by_id'])->name('taskUpdatedById');

        Route::get('admin/deleteTask/{id}', [AdminPanelController::class, 'deleteTask'])->name('taskDeleted');

        Route::get('/admin/getTaskDetail', [AdminPanelController::class, 'getTaskDetail'])->name('getTaskDetail');


        //////////////////////////////////// change password

        Route::get('admin/profile/changePassword', [AdminPanelController::class, 'changePasswordPage'])->name('changePassword');
        Route::post('admin/profile/password_changed', [AdminPanelController::class, 'passwordChanged'])->name('passwordChanged');

        Route::get('admin/profile/logout', [AdminPanelController::class, 'userLogOut'])->name('logOut');

        /////////////////////
    });


    //////// users routes
    Route::middleware(['auth', 'isUser'])->group(function () {

        ///////////////////// homepage
        Route::get('users/homepage', [UserController::class, 'homePage'])->name('homePage');
        Route::get('users/Project/allTasks', [UserController::class, 'taskByProjectId'])->name('allTasks');


        Route::get('user/task/new', [UserController::class, 'createTaskPage'])->name('usercreateTask');
        Route::post('user/createTask', [UserController::class, 'task_created'])->name('usertaskCreated');

        Route::get('user/startTASK', [UserController::class, 'startTASK'])->name('startTASK');

        Route::get('user/stopTask', [UserController::class, 'stopTask'])->name('stopTask');



        Route::get('user/completedTask', [UserController::class, 'completedTask'])->name('completedTask');


        Route::get('user/performingTask', [UserController::class, 'performingTask'])->name('performingTask');





        Route::get('user/profile/changePassword', [UserController::class, 'changePasswordPage'])->name('userchangePassword');
        Route::post('user/profile/password_changed', [UserController::class, 'passwordChanged'])->name('userpasswordChanged');

        Route::get('user/profile/logout', [UserController::class, 'userLogOut'])->name('userlogOut');
    });
});
