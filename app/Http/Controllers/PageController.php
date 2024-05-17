<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class PageController extends Controller
{
    public function index(){
        return view('home');
    }
    
    public function users(){
        $users = User::all();
        // dd('hi');
        return response()->json($users);
    }
}
