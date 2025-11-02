<?php

use App\Http\Controllers\JobController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('home');
})->name('home');

// ########################## JOBS ROUTE ##########################

// Route::get('/jobs/', [JobController::class, 'index'])->name('jobs');
// Route::get('/jobs/create', [JobController::class, 'create'])->name('NewJob');
// Route::get('/jobs/{job}', [JobController::class, 'show'])->name('job');
// Route::post('/jobs', [JobController::class, 'store']);
// Route::get('/jobs/{id}/edit', [JobController::class, 'edit']);
// Route::patch('/jobs/{id}', [JobController::class, 'update']);
// Route::delete('/jobs/{id}', [JobController::class, 'destroy']);

// grouping the controller
// Route::controller(JobController::class)->group(function () {
//     Route::get('/jobs/', 'index')->name('jobs');
//     Route::get('/jobs/create', 'create')->name('NewJob');
//     Route::get('/jobs/{job}', 'show')->name('job');
//     Route::post('/jobs', 'store');
//     Route::get('/jobs/{id}/edit', 'edit');
//     Route::patch('/jobs/{id}', 'update');
//     Route::delete('/jobs/{id}', 'destroy');
// });

// using the laravel resource
Route::resource('jobs', JobController::class);

// ####################################################

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

// getting an entity by a specific attribute
// route::get('/posts/{post:sLug}', function (Post $post) {
//     return Inertia::render('posts/index', [
//         'post' => $post,
//     ]);
// });
