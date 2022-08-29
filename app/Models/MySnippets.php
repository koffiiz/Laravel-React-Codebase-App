<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\Model;
use App\Models\User;

class MySnippets extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'title',
        'description',
        'code_snippet',
        'language',
        'language_code'
    ];


    /**
     * Get the user associated with the MySnippets
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function user(): HasOne
    {
        return $this->hasOne(User::class, "id", "user_id");
    }

    public static function boot()
    {
        parent::boot();

        static::saving(function ($model) {
            $model->slug = str_slug($model->title);
        });
    }

}
  

