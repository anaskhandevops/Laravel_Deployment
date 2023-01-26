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
    @include('sweetalert::alert')
    <style>
        .inp {
            outline: 4px;
            border: 2px;

            border-radius: 8px;
        }
    </style>
    <div class="col-xs-12 main">
        <div class="page-on-top">

            <div class="container " style="width: 40%;">
                <div class="row">
                    <div class="cc" style="width: 100%">
                        <form action="{{ route('projectCreated') }}" method="post">
                            @csrf
                            <fieldset class="container" style="width: 100%">
                                <legend class="container" style="text-align: center">Create New Project</legend>

                                <div class="container">
                                    <label>Project Name :</label>
                                    <div
                                        style="border: 1px solid #000000;padding-top: 4px;padding-left: 4px;padding-right: 4px;border-radius: 6px;">
                                        <input type="text" class="form-control inp" name="project_name"
                                            placeholder="name" style="border-bottom: 0px" value="{{ old('project_name') }}">
                                    </div>
                                    <span class="text_danger">
                                        @error('project_name')
                                            <label for="error"
                                                style="font-size: 12px; color: red;">{{ $message }}</label>
                                        @enderror
                                    </span>
                                </div>
                                <div style="height: 40px;"></div>
                                <div style="text-align: center">
                                    <button type="submit" class="btn btn-success mt-4" , style="border-radius:10px; ">
                                        Create
                                    </button>
                                </div>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>


            {{-- <!-- tables/default -->
        <div class="row m-b-20">
            <div class="col-xs-12">
                <div class="widget">
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
                </div>
            </div>
        </div>
        <!-- tables/default --> --}}
        </div>
    </div>
@endsection
