<?php

namespace Database\Seeders;

use App\Models\Employer;
use App\Models\Job;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Create a test user
        // User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        // Create employers with jobs
        Employer::factory(15)
            ->has(Job::factory()->count(rand(3, 8)))
            ->create();

        // Alternative approach: Create some standalone jobs with random employers
        // This will create additional jobs assigned to the existing employers
        Job::factory(200)->create();
    }
}
