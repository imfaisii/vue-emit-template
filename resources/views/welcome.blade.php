<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>{{ env('APP_NAME') }}</title>

    <!-- Styles -->
    <link href="{{ mix('css/app.css') }}" rel="stylesheet">
    <link href="{{ mix('css/styles.css') }}" rel="stylesheet">
</head>

<body data-bs-spy="scroll" data-bs-target="#navbar" data-bs-offset="71" style="overflow-x: hidden;">

    <div id="app">
        <router-view></router-view>
    </div>

    <script src="{{ mix('js/app.js') }}"></script>
    <script src="{{ mix('js/scripts.js') }}"></script>
</body>

</html>
