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

                                <label for="label" style="font-size: 18px;font-weight: bold;">{{ $task_name }}</label>
                            </div>
                            <div style="width: 6%"></div>

                            <div class="col-ms">
                                <label for="">Expected Duration: {{ $expected_duration}}  mint</label>
                                <br>
                                <label for="">Performed Duration: {{ $duration}}  mint</label>
                                {{-- <a href="{{ route('createTask') }}" class="update_class btn"
                                    style="padding-left: 16px;padding-right: 16px;">Add
                                </a> --}}
                            </div>
                        </div>

                        <div style="height:60px;"></div>
                        @if ( count($tasks) ==0 )
                           <div style="text-align: center;font-size: 16px;">No one yet started this task</div>
                        {{-- // @endempty) --}}

                        @else
                        <table class="table table-bordered project-data-table">
                            <thead align="center">
                                <tr>
                                    <th style="width:4% ;text-align: center;">Id</th>
                                    <th style="text-align: center;">User</th>
                                    <th style="text-align: center;">Start Tiem</th>
                                    <th style="text-align: center;"> End Time</th>
                                    <th style="text-align: center;">Duration (m)</th>
                                </tr>
                            </thead>
                            <tbody>
                                @foreach ($tasks as $item)
                                    <tr
                                        style="font-size: 14px; font-weight: lighter;color: rgba(16, 18, 13, 0.827); text-align: center;">
                                        <th style="text-align: center;">{{ $item->id }}</th>
                                        <th style="text-align: center">
                                            @foreach ($users as $i)
                                                @if ($i->id == $item->user_id)
                                                    <label style="padding: 6px;text-align: center;">{{ $i->name }}</label>
                                                @endif
                                            @endforeach
                                        </th>

                                        <th style="text-align: center;">{{ $item->start_time }}</th>
                                        <th style="text-align: center;">{{ $item->end_time }}</th>
                                        <th style="text-align: center;">{{ $item->TotalDuration }}</th>
                                    </tr>
                                @endforeach
                            </tbody>
                        </table>
                        @endif


                        {{-- <span><label for="total">Total : {{ $tasks->total() }}</label></span>
                        {{ $tasks->onEachSide(2)->links() }} --}}

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
