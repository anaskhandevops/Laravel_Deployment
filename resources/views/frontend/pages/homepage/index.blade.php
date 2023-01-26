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
                    <div style="width: 20%"></div>
                    <div style="width: 60%;">

                        <div class="container">
                            <div class="row justify-content-center" style="width: 100%">
                                <div class="col-2-ms" style="width: 70%;margin-left: 16px;">
                                    <form action="{{ route('homePage') }}">
                                        <input type="search" name="search" placeholder="search by name"
                                            style="padding-left: 10px;width: 100%;padding: 4px;"
                                            value="{{ $search }}" />
                                        <div style="height: 10px;"></div>
                                        <div style="text-align: start;">
                                            <button class="update_class btn" class="submit" type="submit"
                                                style="padding-left: 16px;padding-right: 16px; color: white;">Search</button>

                                            <a href="{{ route('homePage') }}" class="update_class btn" type="submit"
                                                style="padding-left: 16px;padding-right: 16px;">Reset
                                            </a>
                                        </div>
                                    </form>
                                </div>
                            </div>

                            <table class="table table-bordered project-data-table">
                                <thead align="center">
                                    <tr>
                                        <th style="text-align: center;">Sr. No:</th>
                                        <th style="">Name</th>
                                        <th style="text-align: center;">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @foreach ($projects as $item)
                                        <tr
                                            style="font-size: 14px; font-weight: lighter;color: rgba(16, 18, 13, 0.827); text-align: center;">
                                            <th style="text-align: center;">
                                                {{ ($projects->currentPage() - 1) * $projects->perPage() + $loop->iteration }}
                                            </th>
                                            <th>{{ $item->project_name }}</th>
                                            <th style="text-align: center;" colspan="2">

                                                <a href="{{ route('allTasks', [
                                                    'project_id' => $item->id,
                                                ]) }}"
                                                    class="update_class btn " style="color: white;">View Tasks</a>
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
@endsection
