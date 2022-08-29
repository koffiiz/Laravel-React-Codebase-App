<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;
use App\Models\MySnippets;
use Inertia\Inertia;

class HomeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Inertia::render('Welcome', [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'laravelVersion' => Application::VERSION,
            'phpVersion' => PHP_VERSION,
        ]);
    }

    public function dashboard()
    {
        $snippetList = MySnippets::with(['user'])->get();

        return Inertia::render('Dashboard', [
            'snippet_list' => $snippetList
        ]);

    }

     /**
     * Display the specified resource.
     *
     * @param  \App\Models\MySnippets  $mySnippets
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request) {
        $showSnippet=  MySnippets::with(['user'])->where('slug', $request->slug)->first();

        return Inertia::render('Dashboard/Show', ['my_snippet' => $showSnippet]);
    }

}
