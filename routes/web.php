<?php

use App\Http\Controllers\PageController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;


// Route::get('/', [PageController::class, 'index']);

// Route::get('/api/users', [PageController::class, 'users']);

// Route::post('/api/user/create', [PageController::class, 'create']);

// Route::get('/api/user/{id}', [PageController::class, 'show']);


Route::middleware('auth:sanctum')->get('/api/user', function (Request $request) {
    return $request->user();
});

Route::get('/{any?}', function () {
    return view('vue');
})->where('any', '(.*)');

// Auth::routes();