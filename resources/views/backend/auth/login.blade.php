<!doctype html>
<html lang="en" class="loading loading-primary">

<!-- Mirrored from peak.batchthemes.com/empty-view-1/pages/sign-in.html by HTTrack Website Copier/3.x [XR&CO'2014], Sun, 23 Sep 2018 15:31:43 GMT -->

<head>
    <base href="{{ asset('/') }}">
    <meta charset="UTF-8">
    <meta name="description" content="">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>Admin-Sign In</title>
    <link rel="apple-touch-icon" sizes="57x57" href="asset/backend/assets/icons/apple-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="asset/backend/assets/icons/apple-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="asset/backend/assets/icons/apple-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="asset/backend/assets/icons/apple-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="asset/backend/assets/icons/apple-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="asset/backend/assets/icons/apple-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="asset/backend/assets/icons/apple-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="asset/backend/assets/icons/apple-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="asset/backend/assets/icons/apple-icon-180x180.png">
    <link rel="icon" type="image/png" sizes="192x192" href="asset/backend/assets/icons/android-icon-192x192.png">
    <link rel="icon" type="image/png" sizes="32x32" href="asset/backend/assets/icons/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="96x96" href="asset/backend/assets/icons/favicon-96x96.png">
    <link rel="icon" type="image/png" sizes="16x16" href="asset/backend/assets/icons/favicon-16x16.png">
    <link rel="manifest" href="asset/backend/assets/icons/manifest.json">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="msapplication-TileImage" content="asset/backend/assets/icons/ms-icon-144x144.png">
    <meta name="theme-color" content="#ffffff">
    <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700">
    <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <link rel="stylesheet" type="text/css"
        href="asset/backend/../cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/css/font-awesome.min.css" />
    <link rel="stylesheet" type="text/css"
        href="asset/backend/../cdnjs.cloudflare.com/ajax/libs/flag-icon-css/1.0.0/css/flag-icon.min.css" />
    <link rel="stylesheet" type="text/css"
        href="asset/backend/../cdnjs.cloudflare.com/ajax/libs/weather-icons/2.0.9/css/weather-icons.min.css" />
    <link rel="stylesheet" type="text/css"
        href="asset/backend/../cdnjs.cloudflare.com/ajax/libs/weather-icons/2.0.9/css/weather-icons-wind.min.css" />
    <!-- build:css css/vendor.css -->
    <link rel="stylesheet" type="text/css" href="asset/backend/bower_components/chartist/dist/chartist.min.css" />
    <link rel="stylesheet" type="text/css" href="asset/backend/bower_components/morris.js/morris.css" />
    <link rel="stylesheet" type="text/css" href="asset/backend/bower_components/nvd3/build/nv.d3.css" />
    <link rel="stylesheet" type="text/css" href="asset/backend/bower_components/sweetalert2/dist/sweetalert2.css" />
    <link rel="stylesheet" type="text/css" href="asset/backend/bower_components/toastr/toastr.css" />
    <link rel="stylesheet" type="text/css" href="asset/backend/bower_components/summernote/dist/summernote.css" />
    <link rel="stylesheet" type="text/css" href="asset/backend/bower_components/fakeLoader/fakeLoader.css" />
    <link rel="stylesheet" type="text/css"
        href="asset/backend/bower_components/nouislider/distribute/nouislider.min.css" />
    <link rel="stylesheet" type="text/css"
        href="asset/backend/bower_components/bootstrap-material-datetimepicker/css/bootstrap-material-datetimepicker.css" />
    <link rel="stylesheet" type="text/css" href="asset/backend/components/css/zoom.css" />
    <!-- endbuild -->
    <!-- build:css css/styles.css -->
    <link rel="stylesheet" type="text/css" href="asset/backend/css/main.css">
    <link rel="stylesheet" type="text/css" href="asset/backend/css/global.css">
    <link rel="stylesheet" type="text/css" href="asset/backend/css/colors.css">
    <link rel="stylesheet" type="text/css" href="asset/backend/css/box-shadows.css">
    <link rel="stylesheet" type="text/css" href="asset/backend/css/animate.css">
    <link rel="stylesheet" type="text/css" href="asset/backend/css/layouts/homepage.css">
    <link rel="stylesheet" type="text/css" href="asset/backend/css/layouts/default-sidebar-1.css">
    <link rel="stylesheet" type="text/css" href="asset/backend/css/layouts/default-sidebar-2.css">
    <link rel="stylesheet" type="text/css" href="asset/backend/css/layouts/empty-view-1.css">
    <link rel="stylesheet" type="text/css" href="asset/backend/css/layouts/empty-view-2.css">
    <link rel="stylesheet" type="text/css" href="asset/backend/css/layouts/empty-view-3.css">
    <link rel="stylesheet" type="text/css" href="asset/backend/css/layouts/empty-view-4.css">
    <link rel="stylesheet" type="text/css" href="asset/backend/css/layouts/empty-view-5.css">
    <link rel="stylesheet" type="text/css" href="asset/backend/css/layouts/empty-view-6.css">
    <link rel="stylesheet" type="text/css" href="asset/backend/css/layouts/top-navigation-1.css">
    <link rel="stylesheet" type="text/css" href="asset/backend/css/layouts/top-navigation-2.css">
    <link rel="stylesheet" type="text/css" href="asset/backend/css/layouts/off-canvas.css">
    <link rel="stylesheet" type="text/css" href="asset/backend/css/layouts/fixed-navbar-1.css">
    <link rel="stylesheet" type="text/css" href="asset/backend/css/elements/left-sidebar-1.css">
    <link rel="stylesheet" type="text/css" href="asset/backend/css/elements/navbar-1.css">
    <link rel="stylesheet" type="text/css" href="asset/backend/css/elements/navbar-2.css">
    <link rel="stylesheet" type="text/css" href="asset/backend/css/elements/navbar-3.css">
    <link rel="stylesheet" type="text/css" href="asset/backend/css/elements/top-search.css">
    <link rel="stylesheet" type="text/css" href="asset/backend/css/elements/top-navigation-1.css">
    <link rel="stylesheet" type="text/css" href="asset/backend/css/elements/right-sidebar-1.css">
    <link rel="stylesheet" type="text/css" href="asset/backend/css/elements/jumbotron-1.css">
    <link rel="stylesheet" type="text/css" href="asset/backend/css/elements/jumbotron-2.css">
    <link rel="stylesheet" type="text/css" href="asset/backend/css/elements/jumbotron-3.css">
    <link rel="stylesheet" type="text/css" href="asset/backend/css/dashboards/geographic.css">
    <link rel="stylesheet" type="text/css" href="asset/backend/css/dashboards/analytics.css">
    <link rel="stylesheet" type="text/css" href="asset/backend/css/helpers/margin.css">
    <link rel="stylesheet" type="text/css" href="asset/backend/css/helpers/padding.css">
    <link rel="stylesheet" type="text/css" href="asset/backend/css/helpers/text.css">
    <link rel="stylesheet" type="text/css" href="asset/backend/css/helpers/border.css">
    <link rel="stylesheet" type="text/css" href="asset/backend/css/helpers/height.css">
    <link rel="stylesheet" type="text/css" href="asset/backend/css/helpers/width.css">
    <link rel="stylesheet" type="text/css" href="asset/backend/css/helpers/other.css">
    <link rel="stylesheet" type="text/css" href="asset/backend/css/color-system/material-design-colors.css">
    <link rel="stylesheet" type="text/css" href="asset/backend/css/icons/flags.css">
    <link rel="stylesheet" type="text/css" href="asset/backend/css/icons/font-awesome.css">
    <link rel="stylesheet" type="text/css" href="asset/backend/css/icons/weather-icons.css">
    <link rel="stylesheet" type="text/css" href="asset/backend/css/icons/material-design-icons.css">
    <link rel="stylesheet" type="text/css" href="asset/backend/css/charts/chartist.css">
    <link rel="stylesheet" type="text/css" href="asset/backend/css/charts/easy-pie-chart.css">
    <link rel="stylesheet" type="text/css" href="asset/backend/css/charts/morris.css">
    <link rel="stylesheet" type="text/css" href="asset/backend/css/charts/nvd3.css">
    <link rel="stylesheet" type="text/css" href="asset/backend/css/charts/echarts.css">
    <link rel="stylesheet" type="text/css" href="asset/backend/css/extras/crop.css">
    <link rel="stylesheet" type="text/css" href="asset/backend/css/extras/invoice.css">
    <link rel="stylesheet" type="text/css" href="asset/backend/css/extras/mousetrap.css">
    <link rel="stylesheet" type="text/css" href="asset/backend/css/extras/pricing-tables.css">
    <link rel="stylesheet" type="text/css" href="asset/backend/css/extras/syntax-highlighting.css">
    <link rel="stylesheet" type="text/css" href="asset/backend/css/extras/zoom.css">
    <link rel="stylesheet" type="text/css" href="asset/backend/css/extras/white-frames.css">
    <link rel="stylesheet" type="text/css" href="asset/backend/css/extras/search-results.css">
    <link rel="stylesheet" type="text/css" href="asset/backend/css/editors/summernote.css">
    <link rel="stylesheet" type="text/css" href="asset/backend/css/forms/basic.css">
    <link rel="stylesheet" type="text/css" href="asset/backend/css/forms/checkboxes.css">
    <link rel="stylesheet" type="text/css" href="asset/backend/css/forms/radios.css">
    <link rel="stylesheet" type="text/css" href="asset/backend/css/forms/sliders.css">
    <link rel="stylesheet" type="text/css" href="asset/backend/css/forms/toggles.css">
    <link rel="stylesheet" type="text/css" href="asset/backend/css/forms/file-uploads.css">
    <link rel="stylesheet" type="text/css" href="asset/backend/css/forms/date-picker.css">
    <link rel="stylesheet" type="text/css" href="asset/backend/css/forms/steps.css">
    <link rel="stylesheet" type="text/css" href="asset/backend/css/tables/default.css">
    <link rel="stylesheet" type="text/css" href="asset/backend/css/tables/datatable.css">
    <link rel="stylesheet" type="text/css" href="asset/backend/css/tables/sortable.css">
    <link rel="stylesheet" type="text/css" href="asset/backend/css/pages/index.css">
    <link rel="stylesheet" type="text/css" href="asset/backend/css/pages/banners.css">
    <link rel="stylesheet" type="text/css" href="asset/backend/css/pages/error.css">
    <link rel="stylesheet" type="text/css" href="asset/backend/css/pages/sign-in.css">
    <link rel="stylesheet" type="text/css" href="asset/backend/css/pages/sign-up.css">
    <link rel="stylesheet" type="text/css" href="asset/backend/css/pages/coming-soon.css">
    <link rel="stylesheet" type="text/css" href="asset/backend/css/pages/forgot-password.css">
    <link rel="stylesheet" type="text/css" href="asset/backend/css/pages/unlock-account.css">
    <link rel="stylesheet" type="text/css" href="asset/backend/css/ui/alerts.css">
    <link rel="stylesheet" type="text/css" href="asset/backend/css/ui/badges.css">
    <link rel="stylesheet" type="text/css" href="asset/backend/css/ui/breadcrumbs.css">
    <link rel="stylesheet" type="text/css" href="asset/backend/css/ui/buttons.css">
    <link rel="stylesheet" type="text/css" href="asset/backend/css/ui/cards.css">
    <link rel="stylesheet" type="text/css" href="asset/backend/css/ui/dropdowns.css">
    <link rel="stylesheet" type="text/css" href="asset/backend/css/ui/grid.css">
    <link rel="stylesheet" type="text/css" href="asset/backend/css/ui/images.css">
    <link rel="stylesheet" type="text/css" href="asset/backend/css/ui/lists.css">
    <link rel="stylesheet" type="text/css" href="asset/backend/css/ui/modals.css">
    <link rel="stylesheet" type="text/css" href="asset/backend/css/ui/overlays.css">
    <link rel="stylesheet" type="text/css" href="asset/backend/css/ui/pagination.css">
    <link rel="stylesheet" type="text/css" href="asset/backend/css/ui/popovers.css">
    <link rel="stylesheet" type="text/css" href="asset/backend/css/ui/progress-bars.css">
    <link rel="stylesheet" type="text/css" href="asset/backend/css/ui/social-media-buttons.css">
    <link rel="stylesheet" type="text/css" href="asset/backend/css/ui/sweet-alert.css">
    <link rel="stylesheet" type="text/css" href="asset/backend/css/ui/tabs.css">
    <link rel="stylesheet" type="text/css" href="asset/backend/css/ui/tags.css">
    <link rel="stylesheet" type="text/css" href="asset/backend/css/ui/tooltips.css">
    <link rel="stylesheet" type="text/css" href="asset/backend/css/ui/typography.css">
    <link rel="stylesheet" type="text/css" href="asset/backend/css/user-widgets/user-widget-1.css">
    <link rel="stylesheet" type="text/css" href="asset/backend/css/user-widgets/user-widget-10.css">
    <link rel="stylesheet" type="text/css" href="asset/backend/css/user-widgets/user-widget-11.css">
    <link rel="stylesheet" type="text/css" href="asset/backend/css/user-widgets/user-widget-2.css">
    <link rel="stylesheet" type="text/css" href="asset/backend/css/user-widgets/user-widget-6.css">
    <link rel="stylesheet" type="text/css" href="asset/backend/css/user-widgets/user-widget-7.css">
    <link rel="stylesheet" type="text/css" href="asset/backend/css/user-widgets/user-widget-8.css">
    <link rel="stylesheet" type="text/css" href="asset/backend/css/user-widgets/user-widget-9.css">
    <link rel="stylesheet" type="text/css" href="asset/backend/css/maps/google-maps.css">
    <link rel="stylesheet" type="text/css" href="asset/backend/css/maps/vector-maps.css">
    <link rel="stylesheet" type="text/css" href="asset/backend/css/email/inbox.css">
    <link rel="stylesheet" type="text/css" href="asset/backend/css/text-widgets/text-widget-1.css">
    <link rel="stylesheet" type="text/css" href="asset/backend/css/text-widgets/text-widget-2.css">
    <link rel="stylesheet" type="text/css" href="asset/backend/css/text-widgets/text-widget-7.css">
    <link rel="stylesheet" type="text/css" href="asset/backend/css/activity-widgets/activity-widget-1.css">
    <link rel="stylesheet" type="text/css" href="asset/backend/css/activity-widgets/activity-widget-3.css">
    <link rel="stylesheet" type="text/css" href="asset/backend/css/activity-widgets/activity-widget-4.css">
    <link rel="stylesheet" type="text/css" href="asset/backend/css/activity-widgets/activity-widget-5.css">
    <link rel="stylesheet" type="text/css" href="asset/backend/css/activity-widgets/activity-widget-6.css">
    <link rel="stylesheet" type="text/css" href="asset/backend/css/documentation/customization.css">
    <link rel="stylesheet" type="text/css" href="asset/backend/css/documentation/code-structure.css">
    <link rel="stylesheet" type="text/css" href="asset/backend/css/documentation/credits.css">
    <link rel="stylesheet" type="text/css" href="asset/backend/css/documentation/layout.css">
    <link rel="stylesheet" type="text/css" href="asset/backend/css/documentation/styles.css">
    <!-- endbuild -->
</head>

<body id="pages-sign-in" data-layout="empty-view-1" data-controller="pages" data-view="sign-in">
    @include('sweetalert::alert')
    <!-- pages/sign-in -->
    <form action="{{ route('verifyLogin') }}" method="post">
        @csrf
        <div class="form-container" style="margin-top: 10%;">
            <div style="background-color: white;padding: 50px;border-radius: 6px;">

                <h3>Sign in</h3>
                <p>
                    Please enter your email address and password to login
                </p>
                <div class="form-group">
                    <label for="sign-in-2-email" class="bmd-label-floating">Email address</label>
                    <input type="email" name="email" id="sign-in-2-email" class="form-control" value="{{old('email')}}" required>
                    <span class="bmd-help">Please enter your email</span>
                    @error('email')
                        <span style="font-size: 12px;color: red;">{{ $message }}</span>
                    @enderror

                </div>
                <div class="form-group">
                    <label for="sign-in-1-password" class="bmd-label-floating">Password</label>
                    <input type="password" name="password" id="sign-in-1-password" class="form-control" required>
                    <span class="bmd-help">Please enter your password</span>
                    @error('password')
                        <span style="font-size: 12px;color: red;">{{ $message }}</span>
                    @enderror
                </div>
                {{-- <div class="checkbox checkbox-secondary">
                <label>
				<input type="checkbox" value="remember-me">Remember me
			</label>
            </div> --}}
            @error('Error')
                <div style="margin-top: 15px;color: red;font-size: 12px;"></div>
            @enderror
                <div style="height: 20px;"></div>
                <button class="btn btn-raised btn-lg btn-secondary btn-block" type="submit">Sign in</button>
                {{-- <p class="sign-up-link">Don't have an account? <a href="">Sign up here</a></p> --}}
                {{-- <p class="copyright">&copy; Copyright 2016</p> --}}

            </div>

        </div>
    </form>
    <!-- pages/sign-in -->
    <!-- build:js js/vendor.js -->
    <script src="asset/backend/bower_components/jquery/dist/jquery.min.js"></script>
    <script src="asset/backend/bower_components/lodash/dist/lodash.min.js"></script>
    <script src="asset/backend/components/scripts/modernizr.js"></script>
    <script src="asset/backend/bower_components/tether/dist/js/tether.js"></script>
    <script src="asset/backend/bower_components/jquery-storage-api/jquery.storageapi.min.js"></script>
    <script src="asset/backend/bower_components/moment/moment.js"></script>
    <script src="asset/backend/bower_components/chart.js/dist/Chart.min.js"></script>
    <script src="asset/backend/bower_components/d3/d3.js"></script>
    <script src="asset/backend/bower_components/peity/jquery.peity.min.js"></script>
    <script src="asset/backend/bower_components/mousetrap/mousetrap.js"></script>
    <script src="asset/backend/bower_components/bootstrap-material-design/dist/bootstrap-material-design.iife.js"></script>
    <script src="asset/backend/bower_components/chartist/dist/chartist.min.js"></script>
    <script src="asset/backend/bower_components/raphael/raphael.min.js"></script>
    <script src="asset/backend/bower_components/morris.js/morris.min.js"></script>
    <script src="asset/backend/bower_components/nvd3/build/nv.d3.js"></script>
    <script src="asset/backend/bower_components/echarts/dist/echarts.min.js"></script>
    <script src="asset/backend/bower_components/topojson/topojson.min.js"></script>
    <script src="asset/backend/bower_components/datamaps/dist/datamaps.all.js"></script>
    <script src="asset/backend/bower_components/jquery.countdown/dist/jquery.countdown.js"></script>
    <script src="asset/backend/bower_components/jquery.easy-pie-chart/dist/jquery.easypiechart.min.js"></script>
    <script src="asset/backend/components/scripts/highlight.min.js"></script>
    <script src="asset/backend/bower_components/table-export/tableExport.js"></script>
    <script src="asset/backend/bower_components/table-export/jquery.base64.js"></script>
    <script src="asset/backend/bower_components/table-export/jspdf/libs/sprintf.js"></script>
    <script src="asset/backend/bower_components/table-export/jspdf/jspdf.js"></script>
    <script src="asset/backend/bower_components/table-export/jspdf/libs/base64.js"></script>
    <script src="asset/backend/bower_components/datatables/media/js/jquery.dataTables.min.js"></script>
    <script src="asset/backend/bower_components/toastr/toastr.min.js"></script>
    <script src="asset/backend/bower_components/sweetalert2/dist/sweetalert2.min.js"></script>
    <script src="asset/backend/bower_components/jquery-fullscreen/jquery.fullscreen-min.js"></script>
    <script src="asset/backend/bower_components/dropzone/dist/min/dropzone.min.js"></script>
    <script src="asset/backend/bower_components/markdown/lib/markdown.js"></script>
    <script src="asset/backend/bower_components/to-markdown/dist/to-markdown.js"></script>
    <script src="asset/backend/bower_components/summernote/dist/summernote.js"></script>
    <script src="asset/backend/bower_components/waypoints/lib/jquery.waypoints.min.js"></script>
    <script src="asset/backend/bower_components/counter-up/jquery.counterup.min.js"></script>
    <script src="asset/backend/bower_components/velocity/velocity.js"></script>
    <script src="asset/backend/bower_components/velocity/velocity.ui.js"></script>
    <script src="asset/backend/bower_components/elevatezoom/jquery.elevatezoom.js"></script>
    <script src="asset/backend/components/scripts/enhance.js"></script>
    <script src="asset/backend/bower_components/approvejs/dist/approve.min.js"></script>
    <script src="asset/backend/bower_components/fakeLoader/fakeLoader.min.js"></script>
    <script src="asset/backend/bower_components/nouislider/distribute/nouislider.js"></script>
    <script src="asset/backend/bower_components/bootstrap-material-datetimepicker/js/bootstrap-material-datetimepicker.js">
    </script>
    <script src="asset/backend/bower_components/sortable/js/sortable.min.js"></script>
    <script src="asset/backend/bower_components/bLazy/blazy.min.js"></script>
    <!-- endbuild -->
    <script
        src="https://maps.googleapis.com/maps/api/js?v=3.exp&amp;libraries=weather,visualization,panoramio&amp;key=AIzaSyDRuAzjz4dLpeQnvW4D8qZ7mX-G0pAZEcI">
    </script>
    <!-- build:js js/main.js -->
    <script src="asset/backend/scripts/functions.js"></script>
    <script src="asset/backend/scripts/colors.js"></script>
    <script src="asset/backend/scripts/app.js"></script>
    <script src="asset/backend/scripts/elements/left-sidebar.js"></script>
    <script src="asset/backend/scripts/elements/navbar-1.js"></script>
    <script src="asset/backend/scripts/elements/navbar-2.js"></script>
    <script src="asset/backend/scripts/elements/navbar-3.js"></script>
    <script src="asset/backend/scripts/charts/peity.js"></script>
    <script src="asset/backend/scripts/charts/chart-js.js"></script>
    <script src="asset/backend/scripts/charts/chartist.js"></script>
    <script src="asset/backend/scripts/charts/morris.js"></script>
    <script src="asset/backend/scripts/charts/nvd3.js"></script>
    <script src="asset/backend/scripts/charts/echarts.js"></script>
    <script src="asset/backend/scripts/charts/easy-pie-chart.js"></script>
    <script src="asset/backend/scripts/maps/vector-maps.js"></script>
    <script src="asset/backend/scripts/maps/google-maps.js"></script>
    <script src="asset/backend/scripts/icons/material-design-icons.js"></script>
    <script src="asset/backend/scripts/icons/font-awesome.js"></script>
    <script src="asset/backend/scripts/icons/flags.js"></script>
    <script src="asset/backend/scripts/icons/ionicons.js"></script>
    <script src="asset/backend/scripts/icons/weather-icons.js"></script>
    <script src="asset/backend/scripts/tables/table-export.js"></script>
    <script src="asset/backend/scripts/tables/datatable.js"></script>
    <script src="asset/backend/scripts/tables/sortable.js"></script>
    <script src="asset/backend/scripts/dashboards/geographic.js"></script>
    <script src="asset/backend/scripts/dashboards/analytics.js"></script>
    <script src="asset/backend/scripts/pages/empty.js"></script>
    <script src="asset/backend/scripts/pages/coming-soon.js"></script>
    <script src="asset/backend/scripts/ui/notify.js"></script>
    <script src="asset/backend/scripts/ui/tooltips.js"></script>
    <script src="asset/backend/scripts/ui/popovers.js"></script>
    <script src="asset/backend/scripts/ui/sweet-alert.js"></script>
    <script src="asset/backend/scripts/ui/toastr.js"></script>
    <script src="asset/backend/scripts/ui/counters.js"></script>
    <script src="asset/backend/scripts/editors/summernote.js"></script>
    <script src="asset/backend/scripts/extras/elevate-zoom.js"></script>
    <script src="asset/backend/scripts/extras/syntax-highlighting.js"></script>
    <script src="asset/backend/scripts/extras/markdown.js"></script>
    <script src="asset/backend/scripts/extras/code.js"></script>
    <script src="asset/backend/scripts/forms/file-uploads.js"></script>
    <script src="asset/backend/scripts/forms/date-picker.js"></script>
    <script src="asset/backend/scripts/elements/steps-1.js"></script>
    <script src="asset/backend/scripts/forms/validation.js"></script>
    <script src="asset/backend/scripts/forms/sliders.js"></script>
    <script src="asset/backend/scripts/pages/index.js"></script>
    <!-- endbuild -->
</body>

<!-- Mirrored from peak.batchthemes.com/empty-view-1/pages/sign-in.html by HTTrack Website Copier/3.x [XR&CO'2014], Sun, 23 Sep 2018 15:31:43 GMT -->

</html>
