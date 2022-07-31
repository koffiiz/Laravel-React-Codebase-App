<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use  App\Models\Languages;

class LanguageController extends Controller
{
    public function fetchLanguage() {
        return Languages::get();
    }
}
