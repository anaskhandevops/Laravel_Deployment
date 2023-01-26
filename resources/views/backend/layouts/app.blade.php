<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <base href="{{ asset('/') }}">
    <meta charset="UTF-8">
    <meta name="description" content="">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Admin') }} - @yield('title')</title>

    @include('backend.include.styles')

    @stack('style')



</head>

<body id="dashboards-analytics" data-layout="default-sidebar-1" data-sidebar="primary" data-navbar="primary"
    data-controller="dashboards" data-view="analytics">
    <div id="fakeloader"></div>

    <!-- navbar -->
    @include('backend.include.header')
    <!-- navbar  this is ok -->

    <!-- jumbotron -->
    @include('backend.include.jumbotron')
    <!-- jumbotron this is ok -->

    <div class="container-fluid">
        <div class="row">

            <!-- left sidebar -->
            @include('backend.include.left-sidebar')
            <!-- left sidebar --  this is ok  >

            <!-- right sidebar -->
            @include('backend.include.right-sidebar')
            <!-- right sidebar -->

            @yield('content')

        </div>
    </div>
    <!-- build:js js/vendor.js -->
    @include('backend.include.script')
    <!-- endbuild -->
    <div class="right-sidebar-backdrop"></div>
</body>

</html>
