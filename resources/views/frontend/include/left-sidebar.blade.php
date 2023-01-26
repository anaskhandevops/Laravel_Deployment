<div class="left-sidebar-1">
    <div class="wrapper">
        <div class="content">
            <div class="content-top">
                <div class="logo">
                    <a class="text">
                        <i class="fa fa-adjust"></i>
                        <span>Technonies</span>
                    </a>
                </div>
                <div class="left-sidebar-search">

                </div>
                <div class="sidebar-heading">
                    <div class="sidebar-image">

                        <i class="fas fa-user-circle size" style="font-size: 50px;"></i>
                    </div>
                    <div class="sidebar-options">
                        <div class="dropdown">
                            <a class="btn btn-primary btn-raised dropdown-toggle" data-toggle="dropdown" id="name" style="">
                                <label style="font-size: 12px;width: 145px;max-lines: 2;text-align: start;">@yield('name') </label></a>
                            <div class="dropdown-menu dropdown-menu-center from-top">

                                <a class="dropdown-item" href="{{ route('userchangePassword') }}">
                                    <i class="material-icons icon">update</i>
                                    <span class="title">Change Password</span>
                                </a>

                                <a class="dropdown-item" href="{{ route('userlogOut') }}">
                                    <i class="material-icons icon">power_settings_new</i>
                                    <span class="title">Logout</span>
                                </a>

                            </div>
                        </div>
                        <div class="description"  style="text-transform:lowercase;">
                            <label style="font-size: 11px;"> @yield ('email')</label>
                        </div>
                    </div>
                </div>
            </div>


            {{-- //////////////////////////// --}}



            <div class="content-bottom">
                <div class="left-sidebar-section">
                    <div class="section-title">Menus</div>
                    <ul class="list-unstyled">

                        <li>
                            <a href="{{ route('homePage') }}"
                                class="btn btn-flat {{ ( request()->is('users/homepage') ||  request()->is('users/Project/allTasks') ||  request()->is('user/task/new') ) ? 'bg-primary' : '' }}">
                                <span class="btn-title">All Projects</span>
                                <i class="material-icons pull-left icon">dashboard</i>
                                <i class="pull-right fa fa-caret-down"></i>
                            </a>
                        </li>


                        {{-- ///////////////////////////// --}}


                        <li>
                            <a href="{{ route('performingTask') }}"
                                class="btn btn-flat {{  request()->is('user/performingTask') ? 'bg-primary' : '' }}">
                                <span class="btn-title">Performing Task</span>
                                <i class="material-icons pull-left icon">dashboard</i>
                                <i class="pull-right fa fa-caret-down"></i>
                            </a>
                        </li>



                        <li>
                            <a href="{{ route('completedTask') }}"
                                class="btn btn-flat {{  request()->is('user/completedTask') ? 'bg-primary' : '' }}">
                                <span class="btn-title">Completed Tasks</span>
                                <i class="material-icons pull-left icon">dashboard</i>
                                <i class="pull-right fa fa-caret-down"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
