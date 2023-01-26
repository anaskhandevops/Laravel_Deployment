{{-- this is main file for dashboard display --}}

@extends('backend.layouts.app')
@php
$id = $userData['id'];
$name = $userData['name'];
$email = $userData['email'];
@endphp
@section('name', $name)
@section('id', $id)
@section('email', $email)

@section('title', $title)

@section('content')
@include('sweetalert::alert')

<div class="container-fluid" style="width: 70%;margin-left: 25%;padding-bottom: 20px;padding-top: 20px;">

    <div class="row justify-content-center">

        <div style="height: 10px;"></div>

        <div class="col-lg-4 col-md-12" style="background-color: rgba(4, 49, 184, 0.807);padding: 10px;border-radius: 10px; margin-right: 10px;">
            <div class="white-box analytics-info">
                {{-- <h3 class="box-title"><a href="{{ route('projects.index') }}">Total Projects</a></h3> --}}
                <h4 class="box-title"><a href="{{ route('users.index') }}" style="color: white;">All Users</a></h4>
                <div style="text-align: end">
                    <label style="font-size: 24px; color: darkturquoise">{{ $userCount - 1 }}</label>
                </div>
            </div>
        </div>

        <div style="height: 10px;"></div>

        <div class="col-lg-4 col-md-12" style="background-color: rgba(4, 49, 184, 0.807);padding: 10px;border-radius: 10px; margin-left: 10px;">
            <div class="white-box analytics-info">
                {{-- <h3 class="box-title"><a href="{{ route('createProject') }}"> Add new project</a> --}}
                <h4 class="box-title"><a href="{{ route('createUser') }}" style="color: white;">Add new user</a></h4>
                <div style="text-align: end">
                    <label style="font-size: 24px; color: darkturquoise; visibility: hidden ">0</label>
                </div>
            </div>
        </div>

    </div>

    <div style="height: 20px;"></div>

    <div class="row justify-content-center">
        <div style="height: 10px;"></div>

        <div class="col-lg-4 col-md-12" style="background-color: rgba(4, 49, 184, 0.807);padding: 10px;border-radius: 10px; margin-right: 10px;">
            <div class="white-box analytics-info">
                {{-- <h3 class="box-title"><a href="{{ route('projects.index') }}">Total Projects</a></h3> --}}
                <h4 class="box-title"><a href="{{ route('projects.index') }}" style="color: white;">All Projects</a>
                </h4>
                <div style="text-align: end">
                    <label style="font-size: 24px; color: darkturquoise">{{ $projectCount }}</label>
                </div>
            </div>
        </div>

        <div style="height: 10px;"></div>

        <div class="col-lg-4 col-md-12" style="background-color: rgba(4, 49, 184, 0.807);padding: 10px;border-radius: 10px; margin-left: 10px;">
            <div class="white-box analytics-info">
                {{-- <h3 class="box-title"><a href="{{ route('createProject') }}"> Add new project</a> --}}
                <h4 class="box-title"><a href="{{ route('createProject') }}" style="color: white;">Add new
                        project</a></h4>
                <div style="text-align: end">
                    <label style="font-size: 24px; color: darkturquoise; visibility: hidden ">0</label>
                </div>
            </div>
        </div>

    </div>

    <div style="height: 20px;"></div>


    <div class="row justify-content-center">
        <div style="height: 10px;"></div>

        <div class="col-lg-4 col-md-12" style="background-color: rgba(4, 49, 184, 0.807);padding: 10px;border-radius: 10px; margin-right: 10px;">
            <div class="white-box analytics-info">
                {{-- <h3 class="box-title"><a href="{{ route('projects.index') }}">Total Projects</a></h3> --}}
                <h4 class="box-title"><a href="{{ route('tasks.index') }}" style="color: white;">All Tasks</a></h4>
                <div style="text-align: end">
                    <label style="font-size: 24px; color: darkturquoise">{{ $taskCount }}</label>
                </div>
            </div>
        </div>
        <div style="height: 10px;"></div>

        <div class="col-lg-4 col-md-12" style="background-color: rgba(4, 49, 184, 0.807);padding: 10px;border-radius: 10px; margin-left: 10px;">
            <div class="white-box analytics-info">
                {{-- <h3 class="box-title"><a href="{{ route('createProject') }}"> Add new project</a> --}}
                <h4 class="box-title"><a href="{{ route('createTask') }}" style="color: white;">Add new task</a></h4>
                <div style="text-align: end">
                    <label style="font-size: 24px; color: darkturquoise; visibility: hidden ">0</label>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
