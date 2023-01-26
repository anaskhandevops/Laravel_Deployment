{{-- this is main file for dashboard display --}}

@extends('frontend.layouts.app')


@section('title', $title)
@php
$total = 0;
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
                            <div class="col-2-ms" style="width: 60%;margin-left: 16px;">
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
                            <div style="width: 15%"></div>

                            <div class="col-ms">
                                <label for="">Total Work Duration: {{ $workDuration}} (m)</label>
                                {{-- <a href="{{ route('usercreateTask') }}" class="update_class btn"
                                style="padding-left: 16px;padding-right: 16px;">Add New
                            </a> --}}
                            </div>
                        </div>

                        <div style="height: 20px;"></div>

                        <table class="table table-bordered project-data-table">
                            <thead align="center">
                                <tr>
                                    <th style="width:8% ;text-align: center;">Id</th>
                                    <th style="width:20% ;text-align: center;">Task Name</th>

                                    <th style="width:15%;text-align: center;">Start Time</th>
                                    <th style="width:15%;text-align: center;">End Time</th>
                                    <th style="width:27%;text-align: center;">Total Duration</th>
                                </tr>
                            </thead>
                            <tbody>
                                @foreach ($completedTask as $item)
                                @if ($item->description == 'stopped')
                                <tr
                                style="font-size: 14px; font-weight: lighter;color: rgba(16, 18, 13, 0.827); text-align: center;">
                                <th style="text-align: center;">{{ $item->id }}</th>

                                <th style="text-align: center;">
                                    @foreach ($tasks as $i)
                                    @if ($i->id == $item->task_id)
                                    <label for="">{{ $i->task_name }}</label>
                                    @endif
                                    @endforeach
                                </th>

                                <th style="text-align: center;">{{ $item->start_time }}</th>
                                <th style="text-align: center;">{{ $item->end_time }}</th>
                                <th style="text-align: center; font-size: 12px">{{ $item->TotalDuration }}</th>
                            </tr>

                                @endif
                                @endforeach
                            </tbody>
                        </table>

                    </div>
                </div>

            </div>
        </div>
    </div>
@endsection
