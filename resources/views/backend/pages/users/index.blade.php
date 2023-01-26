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
                            <div class="col-2-ms" style="width: 80%;margin-left: 16px;">
                                <form action="{{ route('users.index') }}">
                                    <input type="search" name="search" placeholder="search by name or email"
                                        style="padding-left: 10px;width: 100%;padding: 4px;" value="{{ $search }}" />
                                    <div style="height: 10px;"></div>
                                    <div style="text-align: start;">
                                        <button class="update_class btn" class="submit" type="submit"
                                            style="padding-left: 16px;padding-right: 16px; color: white;">Search</button>

                                        <a href="{{ route('users.index') }}" class="update_class btn" type="submit"
                                            style="padding-left: 16px;padding-right: 16px;">Reset
                                        </a>
                                    </div>
                                </form>
                            </div>
                            <div style="width: 11%"></div>
                            <div class="col-ms" style="text-align: end">

                                <a href="{{ route('createUser') }}" class="update_class btn"
                                    style="padding-left: 16px;padding-right: 16px;">Add
                                </a>
                            </div>
                        </div>

                        <table class="table table-bordered project-data-table" style="width: 100%;">
                            <thead align="center">
                                <tr>
                                    <th style="width: 60px;text-align: center;width: 5%;">Id</th>
                                    <th style="width: 60px;text-align: center;width: 20%;">Name</th>
                                    <th style="width: 60px;text-align: center;width: 22%;">Email</th>
                                    <th style="width: 60px;text-align: center;width: 5%;">User Type</th>
                                    <th style="width: 60px;text-align: center;width: 16%;">Created_at</th>
                                    <th style="width: 60px;text-align: center;width: 16%;">Updated_at</th>
                                    <th style="width: 60px;text-align: center;width: 16%;">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                @foreach ($users as $item)
                                    @if ($item->user_type != 'admin')
                                        <tr
                                            style="font-size: 14px; font-weight: lighter;color: rgba(16, 18, 13, 0.827); text-align: center;">
                                            <th style="width: 60px;text-align: center">{{ $item->id }}</th>
                                            <th>{{ $item->name }}</th>
                                            <th>{{ $item->email }}</th>
                                            <th style="width: 60px;text-align: center">{{ $item->user_type }}</th>
                                            <th style="font-size: 13px;">{{ $item->created_at }}</th>
                                            <th style="font-size: 13px;">{{ $item->updated_at }}</th>

                                            <th style="text-align: center;" colspan="2">
                                                <a href="{{ route('updateUserById', [
                                                    'id' => $item->id,
                                                    'name' => $item->name,
                                                    'email' => $item->email,
                                                ]) }}"
                                                    class="update_class btn " style="color: white;">Update</a>

                                                <a class="delete_class btn" style="color: white"
                                                    onclick="deleteRecord(`{{ $item->id }}`, `{{ $item->name }}` , `{{ $item->email }}`)">Delete</a>


                                                {{-- <button class="delete_class"
                                                    onclick="deleteRecord(`{{ $item->id }}`, `{{ $item->name }}` , `{{ $item->email }}`)">Delete</a> --}}


                                            </th>
                                        </tr>
                                    @endif
                                @endforeach
                            </tbody>
                        </table>

                        <span><label for="total">Total : {{ $users->total() }}</label></span>
                        {{ $users->onEachSide(2)->links() }}


                    </div>

                    {{-- <div class="widget">
                    <div class="row m-b-20">
                        <div class="col-xs-12">
                            <p class="color-grey-900 m-b-5">{{ $page_title }} Table</p>
                            <p class="color-grey-700 text-sm m-b-10">Use the <code>.table</code> class for default table
                                styling. Add the <code>.table-hover</code> for styled hover behaviour.</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xs-12">
                            <div class="table-responsive">
                                <table class="table table-hover">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Ticker</th>
                                            <th>Price</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Apple Inc.</td>
                                            <td>AAPL</td>
                                            <td>115.52</td>
                                        </tr>
                                        <tr>
                                            <td>Google Inc.</td>
                                            <td>GOOG</td>
                                            <td>635.30</td>
                                        </tr>
                                        <tr>
                                            <td>Microsoft Corporation</td>
                                            <td>MSFT</td>
                                            <td>46.74</td>
                                        </tr>
                                        <tr>
                                            <td>LinkedIn Corp</td>
                                            <td>LNKD</td>
                                            <td>190.04</td>
                                        </tr>
                                        <tr>
                                            <td>Facebook Inc.</td>
                                            <td>FB</td>
                                            <td>94.30</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="widget">
                    <div class="row m-b-20">
                        <div class="col-xs-12">
                            <p class="color-grey-900 m-b-5">Striped table</p>
                            <p class="color-grey-700 text-sm m-b-10">Use the <code>.table-striped</code> class for
                                striped table rows</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xs-12">
                            <table class="table table-striped table-hover">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Name</th>
                                        <th>Country</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <div class="badge badge-40">
                                                <span class="tag tag-rounded tag-primary">1</span>
                                                <img src="asset/backend/assets/faces/w1.png" class="max-w-40 img-circle"
                                                    alt="badge">
                                            </div>
                                        </td>
                                        <td>Lucas smith</td>
                                        <td>Australia</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="badge badge-40">
                                                <span class="tag tag-rounded tag-secondary">2</span>
                                                <img src="asset/backend/assets/faces/w2.png" class="max-w-40 img-circle"
                                                    alt="badge">
                                            </div>
                                        </td>
                                        <td>Janet Abshire</td>
                                        <td>USA</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="badge badge-40">
                                                <span class="tag tag-rounded tag-info">3</span>
                                                <img src="asset/backend/assets/faces/w3.png" class="max-w-40 img-circle"
                                                    alt="badge">
                                            </div>
                                        </td>
                                        <td>Lucas Koch</td>
                                        <td>England</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="badge badge-40">
                                                <span class="tag tag-rounded tag-success">4</span>
                                                <img src="asset/backend/assets/faces/w4.png" class="max-w-40 img-circle"
                                                    alt="badge">
                                            </div>
                                        </td>
                                        <td>Gladys Schuster</td>
                                        <td>USA</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="widget">
                    <div class="row m-b-20">
                        <div class="col-xs-12">
                            <p class="color-grey-900 m-b-5">Bordered table</p>
                            <p class="color-grey-700 text-sm m-b-10">Use the <code>.table-bordered</code> class for
                                bordered table rows</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xs-12">
                            <div class="table-responsive">
                                <table class="table table-bordered table-hover">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Ticker</th>
                                            <th>Price</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Apple Inc.</td>
                                            <td>AAPL</td>
                                            <td>115.52</td>
                                        </tr>
                                        <tr>
                                            <td>Google Inc.</td>
                                            <td>GOOG</td>
                                            <td>635.30</td>
                                        </tr>
                                        <tr>
                                            <td>Microsoft Corporation</td>
                                            <td>MSFT</td>
                                            <td>46.74</td>
                                        </tr>
                                        <tr>
                                            <td>LinkedIn Corp</td>
                                            <td>LNKD</td>
                                            <td>190.04</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="widget">
                    <div class="row m-b-20">
                        <div class="col-xs-12">
                            <p class="color-grey-900 m-b-5">Unbordered table</p>
                            <p class="color-grey-700 text-sm m-b-10">Use the <code>.table-unbordered</code> class for
                                tables without borders</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xs-12">
                            <div class="table-responsive">
                                <table class="table table-unbordered table-hover">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Ticker</th>
                                            <th>Price</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Apple Inc.</td>
                                            <td>AAPL</td>
                                            <td>115.52</td>
                                        </tr>
                                        <tr>
                                            <td>Google Inc.</td>
                                            <td>GOOG</td>
                                            <td>635.30</td>
                                        </tr>
                                        <tr>
                                            <td>Microsoft Corporation</td>
                                            <td>MSFT</td>
                                            <td>46.74</td>
                                        </tr>
                                        <tr>
                                            <td>LinkedIn Corp</td>
                                            <td>LNKD</td>
                                            <td>190.04</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="widget">
                    <div class="row m-b-20">
                        <div class="col-xs-12">
                            <p class="color-grey-900 m-b-5">Condensed table</p>
                            <p class="color-grey-700 text-sm m-b-10">Use the <code>.table-condensed</code> class for
                                condensed tables</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xs-12">
                            <div class="table-responsive">
                                <table class="table table-condensed table-hover">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Ticker</th>
                                            <th>Price</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Apple Inc.</td>
                                            <td>AAPL</td>
                                            <td>115.52</td>
                                        </tr>
                                        <tr>
                                            <td>Google Inc.</td>
                                            <td>GOOG</td>
                                            <td>635.30</td>
                                        </tr>
                                        <tr>
                                            <td>Microsoft Corporation</td>
                                            <td>MSFT</td>
                                            <td>46.74</td>
                                        </tr>
                                        <tr>
                                            <td>LinkedIn Corp</td>
                                            <td>LNKD</td>
                                            <td>190.04</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div> --}}
                </div>
            </div>
            <!-- tables/default -->
        </div>
    </div>
    <script type="text/javascript">
        function deleteRecord(id, name, email) {
            var check = confirm('Are you want to delete this User \nid:' + id + '\nname:' + name + '\nemail:' + email);
            if (check) {
                loadAjaxFunction(id);
            }
        }

        function loadAjaxFunction(id) {

            let xhr = new XMLHttpRequest();
            xhr.open('GET', '{{ url('admin/deleteUser') }}/' + id, true);
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
                    alert('User can not be deleted');
                } else {
                    alert(`Error ${xhr.status}: ${xhr.statusText}`);
                }
            };

            xhr.onerror = function() {
                alert("Request failed");
            };
        }
    </script>
    {{-- <script type="text/javascript">
        function deleteRecord() {
            let check = confirm('Are you sure to delete this record.\n\nId: ' + "\nName: " + name + "\nEmail: " +
                email);
            if (check) {
                //  loadAjaxFunction(id);
            }
        }

        function loadAjaxFunction(id) {

            let xhr = new XMLHttpRequest();
            xhr.open('POST', '', true);
            xhr.send();

            xhr.onload = function() {
                if (xhr.status == 210) {
                    alert('Data is deleted successfully');
                } else if (xhr.status == 250) {
                    alert('No record found with this Id');
                } else if (xhr.status == 240) {
                    alert('Something went wrong!');
                } else if (xhr.status == 260) {
                    alert(
                        'User can not be deleted'
                    );
                } else {
                    alert(`Error ${xhr.status}: ${xhr.statusText}`);
                }
            };

            xhr.onerror = function() {
                alert("Request failed");
            };
        }

    </script> --}}



@endsection
