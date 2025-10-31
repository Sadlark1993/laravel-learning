<?php

namespace App\Models;

use Arr;

class Job
{
    public static function all(): array
    {
        return [
            [
                'id' => '1',
                'title' => 'Director',
                'salary' => '$50,000',
            ],
            [
                'id' => '2',
                'title' => 'Programmer',
                'salary' => '$100,000',
            ],
            [
                'id' => '3',
                'title' => 'Teacher',
                'salary' => '$40,000',
            ],
        ];
    }

    public static function find(string $id)
    {
        $job = Arr::first(self::all(), fn ($job) => $job['id'] === $id);
        if (! $job) {
            abort(404);
        }

        return $job;
    }
}
