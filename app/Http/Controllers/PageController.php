<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class PageController extends Controller
{
    public function index()
    {
        return view('home');
    }

    public function users()
    {
        $users = User::all();
        return response()->json($users);
    }
    public function create(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'email' => 'required|unique:users',
            'password' => 'required',
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);
        return response()->json('success');
    }
    public function show($id)
    {
        $user = User::findOrFail($id);
        return response()->json($user);
    }
}
