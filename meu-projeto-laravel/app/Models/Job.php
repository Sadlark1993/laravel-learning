<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class Job extends Model
{
    use HasFactory, Notifiable;

    // setting the name of the table that this model represents
    protected $table = 'job_listings';

    // setting the mass fillable attributes
    protected $fillable = ['title', 'salary'];

    // to get the relationship, call it as a property, not a method
    public function employer()
    {
        return $this->belongsTo(Employer::class);
    }

    public function tags()
    {
        return $this->belongsToMany(Tag::class, foreignPivotKey: 'job_listing_id');
    }
}
