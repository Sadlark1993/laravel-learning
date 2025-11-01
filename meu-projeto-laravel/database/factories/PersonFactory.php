<?php

namespace Database\Factories;

use App\Models\Person;
use Illuminate\Database\Eloquent\Factories\Factory;

class PersonFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Person::class;

    /**
     * Define the model's default state.
     */
    public function definition(): array
    {
        return [
            'name' => $this->faker->name(),
            'federal_document' => $this->faker->unique()->numerify('###########'),
            'biography' => $this->faker->paragraph(),
            'age' => $this->faker->numberBetween(18, 90),
            'phone' => $this->faker->phoneNumber(),
        ];
    }
}
