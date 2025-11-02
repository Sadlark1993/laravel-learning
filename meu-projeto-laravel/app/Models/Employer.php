<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Employer extends Model
{
    /** @use HasFactory<\Database\Factories\EmployerFactory> */
    use HasFactory;

    // $employer->jobs will return an array of Job
    public function jobs()
    {
        return $this->hasMany(Job::class);
    }
}
