<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\MySnippetsController;

Route::controller(HomeController::class)->group(function () { 
    Route::get('/', 'index')->name('welcome');

    Route::middleware(['auth', 'verified'])->group(function () {
        Route::get('/dashboard', 'dashboard')->name('dashboard');
    });
   
});

Route::controller(MySnippetsController::class)->middleware(['auth', 'verified'])->group(function () { 
    Route::get('/my-snippets', 'index')->name('my-snippets');
    Route::get('/my-snippets/create', 'create' )->name('my-snippets.create');
    Route::post('/my-snippets/store', 'store' )->name('my-snippets.store');
});

require __DIR__.'/auth.php';
