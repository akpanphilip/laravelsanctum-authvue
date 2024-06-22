<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>SPA Authentication using Laravel 9 Sanctum, Vue 3 and Vite - TechvBlogs</title>
    <!-- Fonts -->
    <link href="https://fonts.bunny.net/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/@mdi/font@5.x/css/materialdesignicons.min.css" rel="stylesheet">
    <link rel="stylesheet" href={{ asset('assets/css/style.css') }}>
    @vite(['resources/js/app.js'])



</head>

<body>
    <script>
        (function() {
            window.Laravel = {
                csrfToken: '{{ csrf_token() }}'
            };
        })();
    </script>
    <div id="app">
        <router-view></router-view>
    </div>
</body>

</html>
