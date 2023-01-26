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
                    <form action="{{ route('userpasswordChanged') }}" method="post">
                        @csrf
                        <fieldset class="container" style="width: 100%">
                            <legend class="container" style="text-align: center">Change Password</legend>

                            <div class="container">
                                <label> Old Password :</label>
                                <div style="border: 1px solid #000000;padding-top: 4px;padding-left: 4px;padding-right: 4px;border-radius: 6px;">
                                    <input type="password" class="form-control inp" name="old_pass" placeholder="Enter your password" style="border-bottom: 0px">
                                </div>
                                <span class="text_danger">
                                    @error('old_pass')
                                    <label for="error" style="font-size: 12px; color: red;">Invalid
                                        password</label>
                                    @enderror
                                </span>
                            </div>
                            <div style="height: 20px;"></div>

                            <div class="container">
                                <label>New Password :</label>
                                <div style="border: 1px solid #000000;padding-top: 4px;padding-left: 4px;padding-right: 4px;border-radius: 6px;">
                                    <input type="password" class="form-control inp" name="new_pass" placeholder="Enter new password" style="border-bottom: 0px">
                                </div>
                                <span class="text_danger">
                                    @error('new_pass')
                                    <label for="error" style="font-size: 12px; color: red;">password is
                                        required</label>
                                    @enderror
                                </span>
                            </div>

                            <div style="height: 20px;"></div>

                            <div class="container">
                                <label>Confirm Password :</label>
                                <div style="border: 1px solid #000000;padding-top: 4px;padding-left: 4px;padding-right: 4px;border-radius: 6px;">
                                    <input type="password" class="form-control inp" name="con_pass" placeholder="Confirm password" style="border-bottom: 0px">
                                </div>
                                <span class="text_danger">
                                    @error('con_pass')
                                    <label for="error" style="font-size: 12px; color: red;">password donot
                                        match</label>
                                    @enderror
                                </span>
                            </div>

                            <div style="height: 40px;"></div>
                            <div style="text-align: center">
                                <button type="submit" class="btn btn-success mt-4" , style="border-radius:10px; ">
                                    Change
                                </button>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
