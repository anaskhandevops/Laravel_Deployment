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
                            <form action="{{ route('projects.index') }}">
                                <input type="search" name="search" placeholder="search by name" style="padding-left: 10px;width: 100%;padding: 4px;" value="{{ $search }}" />
                                <div style="height: 10px;"></div>
                                <div style="text-align: start;">
                                    <button class="update_class btn" class="submit" type="submit" style="padding-left: 16px;padding-right: 16px; color: white;">Search</button>

                                    <a href="{{ route('projects.index') }}" class="update_class btn" type="submit" style="padding-left: 16px;padding-right: 16px;">Reset
                                    </a>
                                </div>
                            </form>
                        </div>
                        <div style="width: 10%"></div>

                        <div class="col-ms">
                            <a href="{{ route('createProject') }}" class="update_class btn" style="padding-left: 16px;padding-right: 16px;">Add
                            </a>
                        </div>
                    </div>

                    <table class="table table-bordered project-data-table">
                        <thead align="center">
                            <tr>
                                <th style="width: 10%;text-align: center;">Id</th>
                                <th style="width: 20%">Name</th>
                                <th style="width: 25%;text-align: center;">Created_at</th>
                                <th style="width: 25%;text-align: center;">Updated_at</th>
                                <th style="width: 20%;text-align: center;">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            @foreach ($projects as $item)
                            <tr style="font-size: 14px; font-weight: lighter;color: rgba(16, 18, 13, 0.827); text-align: center;">
                                <th style="text-align: center;">{{ $item->id }}</th>
                                <th>{{ $item->project_name }}</th>
                                <th style="text-align: center;">{{ $item->created_at }}</th>
                                <th style="text-align: center;">{{ $item->updated_at }}</th>
                                <th style="text-align: center;" colspan="2">

                                    <a href="{{ route('updateProjectById', [
                                                'id' => $item->id,
                                                'project_name' => $item->project_name,
                                            ]) }}" class="update_class btn " style="color: white;">Update</a>

                                    <a class="delete_class btn" style="color: white" onclick="deleteRecord(`{{ $item->id }}`, `{{ $item->project_name }}`)">Delete</a>

                                </th>
                            </tr>
                            @endforeach
                        </tbody>
                    </table>

                    <span><label for="total">Total : {{ $projects->total() }}</label></span>
                    {{ $projects->onEachSide(2)->links() }}


                </div>
            </div>
        </div>
    </div>
</div>
<script type="text/javascript">
    function deleteRecord(id, name) {
        var check = confirm('Are you want to delete this Project \nid:' + id + '\nname:' + name);
        if (check) {
            loadAjaxFunction(id);
        }
    }

    function loadAjaxFunction(id) {

        let xhr = new XMLHttpRequest();
        xhr.open('GET', '{{ url('admin/deleteProject') }}/' + id, true);
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
                alert('Some tasks are assigned to this project.\nFirst delete all tasks related it then it will be deleted.');
            } else {
                alert(`Error ${xhr.status}: ${xhr.statusText}`);
            }
        };

        xhr.onerror = function() {
            alert("Request failed");
        };
    }
</script>




@endsection
