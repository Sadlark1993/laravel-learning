<?php

use App\Models\Job;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('home');
})->name('home');

Route::get('/jobs/', function () {
    return Inertia::render('jobs', [
        'jobs' => Job::with('employer')->paginate(3),
    ]);
})->name('jobs');

Route::get('/jobs/{id}', function ($id) {
    $job = Job::with('employer')->find($id);

    return Inertia::render('job', [
        'job' => $job,
    ]);
})->name('job');

Route::get('/contact', function () {
    return Inertia::render('contact');
})->name('contact');

// Route Parameters - Dynamic URLs
Route::get('/user/{id}', function ($id) {
    return Inertia::render('user/profile', [
        'userId' => $id,
        'message' => "Viewing user profile for ID: {$id}",
    ]);
})->name('user.profile');

// Optional Parameters
Route::get('/posts/{category?}', function ($category = 'all') {
    return Inertia::render('posts/index',
        [
            'category' => $category,
            'posts' => [
                ['title' => 'Laravel Basics', 'category' => 'tutorial'],
                ['title' => 'React Tips', 'category' => 'frontend'],
                ['title' => 'PHP 8 Features', 'category' => 'php'],
            ],
        ]);
})->name('posts.index');

// Multiple Parameters
Route::get('/blog/{year}/{month}', function ($year, $month) {
    return Inertia::render('blog/archive', [
        'year' => $year,
        'month' => $month,
        'title' => "Blog Archive for {$month}/{$year}",
    ]);
})->name('blog.archive');
