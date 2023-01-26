{{-- this is main file for dashboard display --}}

@extends('frontend.layouts.app')


@section('title', $title)
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

    <style>
        .update_class {
            background-color: green;
            color: white;
            padding-left: 6px;
            padding-right: 6px;
            padding-top: 6px;
            padding-bottom: 6px;
            border-radius: 6px;
            border: none;
            text-align: center;
            font-size: 12px;
        }

        .delete_class {
            background-color: red;
            color: white;
            padding-left: 6px;
            padding-right: 6px;
            padding-top: 6px;
            padding-bottom: 6px;
            border-radius: 6px;
            border: none;
            text-align: center;
            font-size: 12px;
        }

        .btn:hover {
            color: white;
            background-color: yellow
        }
    </style>
    <div class="col-xs-12 main">

        <div class="page-on-top">

            @include('sweetalert::alert')

            <!-- tables/default -->
            <div class="row m-b-20">
                <div style="width: 100%"></div>
                <div style="width: 100%;">

                    <div class="container">
                        <div class="row justify-content-center" style="width: 100%">
                            <div class="col-2-ms" style="width: 70%;margin-left: 16px;">
                                {{-- <form action="{{ route('tasks.index') }}">
                                        <input type="search" name="search" placeholder="search by name"
                                            style="padding-left: 10px;width: 100%;padding: 4px;" value="{{ $search }}" />
                                        <div style="height: 10px;"></div>
                                        <div style="text-align: start;">
                                            <button class="update_class btn" class="submit" type="submit"
                                                style="padding-left: 16px;padding-right: 16px; color: white;">Search</button>

                                            <a href="{{ route('tasks.index') }}" class="update_class btn" type="submit"
                                                style="padding-left: 16px;padding-right: 16px;">Reset
                                            </a>
                                        </div>
                                    </form> --}}
                            </div>
                            <div style="width: 18%"></div>

                            <div class="col-ms">
                                <a href="{{ route('usercreateTask') }}" class="update_class btn"
                                    style="padding-left: 16px;padding-right: 16px;">Add New
                                </a>
                            </div>
                        </div>

                        <div style="height: 30px;"></div>

                        <table class="table table-bordered project-data-table">
                            <thead align="center">
                                <tr>
                                    <th style="width:8% ;text-align: center;">Id</th>
                                    <th style="width:20% ;text-align: center;">Task Name</th>

                                    <th style="width:15%;text-align: center;">Performed Duration (m)</th>
                                    <th style="width:15%;text-align: center;"> Expected Duration (m)</th>
                                    <th style="width:27%;text-align: center;">Description</th>
                                    <th style="width:15%;text-align: center;">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                @foreach ($tasks as $item)
                                    @if ($item->active_status == 'stopped')
                                        <tr
                                            style="font-size: 14px; font-weight: lighter;color: rgba(16, 18, 13, 0.827); text-align: center;">
                                            <th style="text-align: center;">{{ $item->id }}</th>
                                            <th style="text-align: center;">{{ $item->task_name }}</th>

                                            <th style="text-align: center;">{{ $item->duration }}</th>
                                            <th style="text-align: center;">{{ $item->expected_duration }}</th>
                                            <th style="text-align: center; font-size: 12px">{{ $item->description }}</th>
                                            <th style="text-align: center;" colspan="2">

                                                <a href="{{ route('startTASK', [
                                                    'task_id' => $item->id,
                                                    'user_id' => $id,
                                                ]) }}"
                                                    class="update_class btn " style="color: white;">Start</a>

                                                {{-- <a onclick="deleteTask( `{{ $item->id }}`, `{{ $item->task_name }}` , `{{ $item->project_id }}` )"
                                                    class="delete_class btn " style="color: white;">Delele</a>

                                                <br>
                                                <a href="{{ route('getTaskDetail', [
                                                    'id' => $item->id,
                                                    'task_name' => $item->task_name,
                                                    'expected_duration' => $item->expected_duration,
                                                    'duration' => $item->duration,
                                                ]) }}"
                                                    class="update_class btn " style="color: white;">View Detail</a> --}}

                                            </th>
                                        </tr>
                                    @endif
                                @endforeach
                            </tbody>
                        </table>

                        <span><label for="total">Total : {{ $tasks->total() }}</label></span>
                        {{ $tasks->onEachSide(2)->links() }}


                    </div>
                </div>

            </div>
        </div>
    </div>
@endsection
