<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Job extends Model
{
    // setting the name of the table that this model represents
    protected $table = 'job_listings';

    // setting the mass fillable attributes
    protected $fillable = ['title', 'salary'];
}
