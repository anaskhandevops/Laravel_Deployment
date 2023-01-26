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
                    {{-- <form class="form-inline form-custom">
                        <i class="material-icons">search</i>
                        <div class="form-group">
                            <label for="search" class="bmd-label-floating">Search</label>
                            <input type="text" class="form-control" id="search">
                        </div>
                    </form> --}}
                </div>
                <div class="sidebar-heading">
                    <div class="sidebar-image">
                        {{-- <img src="fas fa-user-circle" class="img-circle img-fluid" alt="sidebar-image" /> --}}
                        {{-- <span class='' style="size: 100px;"></span> --}}
                        <i class="fas fa-user-circle size" style="font-size: 50px;"></i>
                    </div>
                    <div class="sidebar-options">
                        <div class="dropdown">
                            <a class="btn btn-primary btn-raised dropdown-toggle" data-toggle="dropdown" id="name" style="font-size: 13">
                                @yield('name')  </a>
                            <div class="dropdown-menu dropdown-menu-center from-top">

                                <a class="dropdown-item" href="{{ route('changePassword') }}">
                                    <i class="material-icons icon">update</i>
                                    <span class="title">Change Password</span>
                                </a>

                                <a class="dropdown-item" href="{{ route('logOut') }}">
                                    <i class="material-icons icon">power_settings_new</i>
                                    <span class="title">Logout</span>
                                </a>

                            </div>
                        </div>
                        <div class="description"  style="text-transform:lowercase">
                            @yield ('email')

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
                            <a href="{{ route('dashboard') }}"
                                class="btn btn-flat {{ request()->is('admin/dashboard') ? 'bg-primary' : '' }}">
                                <span class="btn-title">Dashboard</span>
                                <i class="material-icons pull-left icon">dashboard</i>
                                <i class="pull-right fa fa-caret-down"></i>
                            </a>
                        </li>


                        {{-- ///////////////////////////// --}}


                        <li>
                            <div class="sidebar-options">
                                <div class="dropdown">
                                    {{-- <a href="{{ url('admin/dashboard') }}" --}}
                                    {{-- <a class="btn btn-primary btn-raised dropdown-toggle" data-toggle="dropdown">
                                        Eric Simpson </a> --}}
                                    <a class="btn btn-flat btn-raised   {{ request()->is('admin/users/all') || request()->is('admin/user/new') || request()->is('admin/user/update/{id}') || request()->is('admin/user/update') ? 'bg-primary' : '' }}"
                                        data-toggle="dropdown">
                                        <span class="btn-title">Users</span>
                                        <i class="material-icons pull-left icon">dashboard</i>
                                        <i class="pull-right fa fa-caret-down"></i>
                                    </a>
                                    <div class="dropdown-menu dropdown-menu-center from-top">
                                        <a href="{{ route('users.index') }}" class="dropdown-item">
                                            <i class="material-icons icon">person</i>
                                            <span class="title">All Users</span>
                                            {{-- <span
                                                class="pull-xs-right tag tag-outline-primary tag-rounded tag-xs">5</span> --}}
                                        </a>
                                        <a href="{{ route('createUser') }}" class="dropdown-item">
                                            <i class="material-icons icon">person</i>
                                            <span class="title">Add New</span>
                                            <span
                                                class="pull-xs-right tag tag-pill tag-raised tag-danger tag-xs">New</span>
                                        </a>

                                        <a href="{{ route('updateUserPage') }}" class="dropdown-item">
                                            <i class="fas fa-refresh"> &nbsp; </i>
                                            <span class="title"> Update User</span>
                                        </a>
                                        <a class="dropdown-item">
                                            <i class=""> &nbsp; </i>
                                            <span class="title"> </span>
                                        </a>

                                    </div>
                                </div>
                            </div>
                        </li>

                        {{-- <li>
                            <a href="{{ url('admin/properties') }}"
                                class="btn btn-flat {{ request()->is('admin/properties') ? 'bg-primary' : '' }}">
                                <span class="btn-title">Projects</span>
                                <i class="material-icons pull-left icon">dashboard</i>
                                <i class="pull-right fa fa-caret-down"></i>
                            </a>
                        </li>
                        ///////////////////// --}}
                        <li>
                            <div class="sidebar-options">
                                <div class="dropdown">
                                    {{-- <a href="{{ url('admin/dashboard') }}" --}}
                                    {{-- <a class="btn btn-primary btn-raised dropdown-toggle" data-toggle="dropdown">
                                        Eric Simpson </a> --}}
                                    <a class="btn btn-flat btn-raised   {{ request()->is('admin/projects/all') || request()->is('admin/project/new') || request()->is('admin/project/update') || request()->is('admin/project/update/{id}') ? 'bg-primary' : '' }}"
                                        data-toggle="dropdown">
                                        <span class="btn-title">Projects</span>
                                        <i class="material-icons pull-left icon">dashboard</i>
                                        <i class="pull-right fa fa-caret-down"></i>
                                    </a>
                                    <div class="dropdown-menu dropdown-menu-center from-top">
                                        <a href="{{ route('projects.index') }}" class="dropdown-item">
                                            <i class='fa fa-tasks'></i>
                                            <span class="title">All Projects</span>
                                            {{-- <span
                                                class="pull-xs-right tag tag-outline-primary tag-rounded tag-xs">5</span> --}}
                                        </a>
                                        <a class="dropdown-item" href="{{ route('createProject') }}">
                                            <i class='fa fa-tasks'></i>
                                            <span class="title">Add New</span>
                                            <span
                                                class="pull-xs-right tag tag-pill tag-raised tag-danger tag-xs">New</span>
                                        </a>

                                        {{-- <a class="dropdown-item" href="{{ route('updateProject') }}">
                                            <i class="fas fa-refresh"> &nbsp; </i>
                                            <span class="title"> Update Project</span>
                                        </a> --}}

                                    </div>
                                </div>
                            </div>
                        </li>

                        {{-- <li>
                            <a
                                class="btn btn-flat {{ request()->is('admin/blog') ? 'bg-primary' : '' }}">
                                <span class="btn-title">Tasks</span>
                                <i class="material-icons pull-left icon">dashboard</i>
                                <i class="pull-right fa fa-caret-down"></i>


                            </a>
                        </li> --}}

                        <li>
                            <div class="sidebar-options">
                                <div class="dropdown">
                                    {{-- <a href="{{ url('admin/dashboard') }}" --}}
                                    {{-- <a class="btn btn-primary btn-raised dropdown-toggle" data-toggle="dropdown">
                                        Eric Simpson </a> --}}
                                    <a class="btn btn-flat btn-raised   {{ request()->is('admin/tasks/all') || request()->is('admin/task/new') || request()->is('admin/task/update') || request()->is('admin/task/update/{id}') ? 'bg-primary' : '' }}"
                                        data-toggle="dropdown">
                                        <span class="btn-title">Tasks</span>
                                        <i class="material-icons pull-left icon">dashboard</i>
                                        <i class="pull-right fa fa-caret-down"></i>
                                    </a>
                                    <div class="dropdown-menu dropdown-menu-center from-top">
                                        <a href="{{ route('tasks.index') }}" class="dropdown-item">
                                            <i class='fa fa-tasks'></i>
                                            <span class="title">All Tasks</span>
                                            {{-- <span
                                                class="pull-xs-right tag tag-outline-primary tag-rounded tag-xs">5</span> --}}
                                        </a>
                                        <a class="dropdown-item" href="{{ route('createTask') }}">
                                            <i class='fa fa-tasks'></i>
                                            <span class="title">Add New</span>
                                            <span
                                                class="pull-xs-right tag tag-pill tag-raised tag-danger tag-xs">New</span>
                                        </a>

                                        <a class="dropdown-item" href="{{ route('updateTask') }}">
                                            <i class="fas fa-refresh"> &nbsp; </i>
                                            <span class="title"> Update Task</span>
                                        </a>

                                    </div>
                                </div>
                            </div>
                        </li>
                        {{-- <li>
                            <a href="{{ url('admin/contact') }}" class="btn btn-flat {{ (request()->is('admin/contact')) ? 'bg-primary' : '' }}">
                                <span class="btn-title">Contact</span>
                                <i class="material-icons pull-left icon">dashboard</i>
                                <i class="pull-right fa fa-caret-down"></i>
                            </a>
                        </li> --}}
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
