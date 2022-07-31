<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Languages;

class LanguagesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $languages = [
            [
                'language' => 'javascript',
                'language_code'=> 'js'
            ],
            [
                'language'=> 'php',
                'language_code'=> 'php'
            ],
            [
                'language'=> 'liquid',
                'language_code'=> 'liquid'
            ],
            [
                'language'=> 'html',
                'language_code'=> 'html'
            ],
            [
                'language'=> 'css',
                'language_code'=> 'css'
            ]
        ];

        foreach ($languages as $key => $value) {
            Languages::create($value);
        }

    }
}
