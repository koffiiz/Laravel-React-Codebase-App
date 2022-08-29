<?php

namespace App\Http\Controllers;

use App\Models\MySnippets;
use App\Models\Languages;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;


class MySnippetsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {   
        $user = Auth::user();

        $mySnippetsList = $user->mySnippets()->latest()->get();
      
        return Inertia::render('MySnippets/Index', [
            'snippet_list' => $mySnippetsList
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $languages = Languages::get();
        return Inertia::render('MySnippets/Create', [
            'language_list' => $languages
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $user = Auth::user();

        $postData = $this->validate($request , [
            'code_snippet' => ['required'],
            'description' => ['required'],
            'language' => ['required'],
            'language_code' => ['required'],
            'title' => ['required']
        ]);

        $postData['user_id'] = $user->id;

        $storeSnippet = MySnippets::create($postData);

        return Redirect::route('my-snippets.create');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\MySnippets  $mySnippets
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request)
    {
        $user = Auth::user();
        $mySnippets= $user->mySnippets()->where('slug', $request->slug)->first();
        return Inertia::render('MySnippets/Show', ['my_snippet' => $mySnippets]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\MySnippets  $mySnippets
     * @return \Illuminate\Http\Response
     */
    public function edit(MySnippets $mySnippets)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\MySnippets  $mySnippets
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, MySnippets $mySnippets)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\MySnippets  $mySnippets
     * @return \Illuminate\Http\Response
     */
    public function destroy(MySnippets $mySnippets)
    {
        //
    }
}
