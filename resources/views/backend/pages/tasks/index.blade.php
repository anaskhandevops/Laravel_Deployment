@extends('backend.layouts.app')


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
                <div style="width: 100%">

                    <div class="container" style="width: 100%">
                        <div class="row justify-content-center" style="width: 100%">
                            <div class="col-2-ms" style="width: 70%;margin-left: 16px;">
                                <form action="{{ route('tasks.index') }}">
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
                                </form>
                            </div>
                            <div style="width: 10%"></div>

                            <div class="col-ms">
                                <a href="{{ route('createTask') }}" class="update_class btn"
                                    style="padding-left: 16px;padding-right: 16px;">Add
                                </a>
                            </div>
                        </div>

                        <table class="table table-bordered project-data-table">
                            <thead align="center">
                                <tr>
                                    <th style="width:4% ;text-align: center;">Id</th>
                                    <th style="width:12% ">Task Name</th>
                                    <th style="width:12% ">Project</th>
                                    <th style="width:8% ">Status</th>
                                    <th style="width:10%;text-align: center;">Performed Duration (m)</th>
                                    <th style="width:10% ; text-align: center;"> Expected Duration (m)</th>
                                    <th style="width:24% ">Description</th>
                                    <th style="width:20%;text-align: center;">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                @foreach ($tasks as $item)
                                    <tr
                                        style="font-size: 14px; font-weight: lighter;color: rgba(16, 18, 13, 0.827); text-align: center;">
                                        <th style="text-align: center;">{{ $item->id }}</th>
                                        <th>{{ $item->task_name }}</th>

                                        <th>
                                            @foreach ($projects as $i)
                                                @if ($i->id == $item->project_id)
                                                    <label style="padding: 6px">{{ $i->project_name }}</label>
                                                @endif
                                            @endforeach
                                        </th>

                                        <th style="text-align: center;">{{ $item->active_status }}</th>
                                        <th style="text-align: center;">{{ $item->duration }}</th>
                                        <th style="text-align: center;">{{ $item->expected_duration }}</th>
                                        <th style="text-align: center;">{{ $item->description }}</th>
                                        <th style="text-align: center;" colspan="2">

                                            <a href="{{ route('updateTaskById', [
                                                'id' => $item->id,
                                                'task_name' => $item->task_name,
                                                'expected_duration' => $item->expected_duration,
                                                'description' => $item->description,
                                            ]) }}"
                                                class="update_class btn " style="color: white;">Update</a>

                                            <a onclick="deleteTask( `{{ $item->id }}`, `{{ $item->task_name }}` , `{{ $item->project_id }}` )"
                                                class="delete_class btn " style="color: white;">Delele</a>

                                                <br>
                                                <a href="{{ route('getTaskDetail', [
                                                    'id' => $item->id,
                                                    'task_name'=>$item->task_name,
                                                    'expected_duration'=>$item->expected_duration,
                                                    'duration'=>$item->duration,
                                                ]) }}"
                                                    class="update_class btn " style="color: white;" >View Detail</a>

                                            {{-- <a class="delete_class btn" style="color: white"
                                                onclick="deleteRecord(`{{ $item->id }}`, `{{ $item->task_name }}`)">Delete</a> --}}

                                        </th>
                                    </tr>
                                @endforeach
                            </tbody>
                        </table>

                        <span><label for="total">Total : {{ $tasks->total() }}</label></span>
                        {{ $tasks->onEachSide(2)->links() }}

                        {{-- Login screen is user authenticated page that allows the user to get more actions. --}}
                        {{--  --}}
                    </div>
                </div>
            </div>
        </div>
    </div>

@endsection


<script>
    function deleteTask(id, name, project) {
        var check = confirm('Are you want to delete this Task \nid: ' + id + '\nname: ' + name);
        if (check) {
            loadAjaxFunction(id);
        }

        function loadAjaxFunction(id) {

            let xhr = new XMLHttpRequest();
            xhr.open('GET', '{{ url('admin/deleteTask') }}/' + id, true);
            xhr.send();

            xhr.onload = function() {
                if (xhr.status == 210) {

                    alert('Data is deleted successfully');
                    window.location.reload();
                } else if (xhr.status == 250) {
                    alert('No record found with this Id');
                } else if (xhr.status == 240) {
                    alert('Something went wrong!');
                } else if (xhr.status == 260) {
                    alert(
                        'Some tasks are assigned to this project.\nFirst delete all tasks related it then it will be deleted.'
                    );
                } else {
                    alert(`Error ${xhr.status}: ${xhr.statusText}`);
                }
            };

            xhr.onerror = function() {
                alert("Request failed");
            };
        }

    }
</script>
