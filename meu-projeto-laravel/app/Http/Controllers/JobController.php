<?php

namespace App\Http\Controllers;

use App\Models\Employer;
use App\Models\Job;
use Inertia\Inertia;

class JobController extends Controller
{
    // The convention method names must be followed

    public function index()
    {
        return Inertia::render('job/index', [
            'jobs' => Job::with('employer')->latest()->paginate(12),
        ]);
    }

    public function create()
    {
        return Inertia::render('job/create', [
            'employers' => Employer::all(),
        ]);
    }

    // using a convention to simplify the rouute :)
    public function show(Job $job)
    {
        // $job = Job::with('employer')->find($id);
        return Inertia::render('job/show', [
            'job' => $job,
        ]);
    }

    public function store()
    {
        // validation...
        request()->validate([
            'title' => ['required', 'min:3'],
            'salary' => ['required'],
            'employer_id' => ['required', 'numeric'],
        ]);

        Job::create([
            'title' => request('title'),
            'salary' => request('salary'),
            'employer_id' => (int) request('employer_id'),
        ]);

        return redirect('/jobs');
    }

    public function edit($id)
    {
        $job = Job::with('employer')->find($id);

        return Inertia::render('job/edit', [
            'job' => $job,
        ]);
    }

    public function update($id)
    {
        request()->validate([
            'title' => ['required', 'min:3'],
            'salary' => ['required'],
        ]);

        $job = Job::findOrFail($id);
        $job->title = request('title');
        $job->salary = request('salary');
        $job->save();

        return redirect("/jobs/$id");
    }

    public function destroy($id)
    {
        $job = Job::findOrFail($id);
        $job->delete();

        return redirect('/jobs');
    }
}
