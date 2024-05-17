<?php

use App\Http\Controllers\PageController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;


Route::get('/', [PageController::class, 'index']);

Route::get('/api/users', [PageController::class, 'users']);

Route::middleware('auth:sanctum')->get('/api/user', function (Request $request) {
    
    // $email = $request->user()->email;
    // $name = $request->user()->name;
    // $user = [$email, $name];
    
    // return $user;
    // dd($request->user());
    return $request->user();

});

Route::get('/{any?}', function () {
    return view('vue');
})->where('any', '(.*)');

Auth::routes();
