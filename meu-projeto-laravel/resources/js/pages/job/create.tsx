import Layout from '@/components/Layout';
import { Employer } from '@/types';
import { router } from '@inertiajs/react';
import { FormEvent, useState } from 'react';

interface CreateJobProps {
  employers: Employer[];
}

const Create = ({ employers }: CreateJobProps) => {
  const [formData, setFormData] = useState({
    title: '',
    salary: '',
    employer_id: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [processing, setProcessing] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setProcessing(true);
    setErrors({});

    router.post('/jobs', formData, {
      onError: (errors) => {
        setErrors(errors);
        setProcessing(false);
      },
      onSuccess: () => {
        setProcessing(false);
      },
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  return (
    <Layout name="New Job">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Create a New Job</h1>
          <a href="/jobs" className="text-sm font-medium text-blue-600 hover:text-blue-800">
            ← Back to Jobs
          </a>
        </div>

        <div className="max-w-md">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Job Title Field */}
            <div>
              <label htmlFor="title" className="mb-1 block text-sm font-medium text-gray-700">
                Job Title *
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                className={`w-full rounded-md border px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none ${
                  errors.title ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Enter job title"
              />
              {errors.title && <p className="mt-1 text-sm text-red-600">{errors.title}</p>}
            </div>

            {/* Salary Field */}
            <div>
              <label htmlFor="salary" className="mb-1 block text-sm font-medium text-gray-700">
                Salary *
              </label>
              <input
                type="text"
                id="salary"
                name="salary"
                value={formData.salary}
                onChange={handleInputChange}
                className={`w-full rounded-md border px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none ${
                  errors.salary ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="e.g., $50,000"
              />
              {errors.salary && <p className="mt-1 text-sm text-red-600">{errors.salary}</p>}
            </div>

            {/* Employer Field */}
            <div>
              <label htmlFor="employer_id" className="mb-1 block text-sm font-medium text-gray-700">
                Employer *
              </label>
              <select
                id="employer_id"
                name="employer_id"
                value={formData.employer_id}
                onChange={handleInputChange}
                className={`w-full rounded-md border px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none ${
                  errors.employer_id ? 'border-red-500' : 'border-gray-300'
                }`}
              >
                <option value="">Select an employer</option>
                {employers?.map((employer) => (
                  <option key={employer.id} value={employer.id}>
                    {employer.name}
                  </option>
                ))}
              </select>
              {errors.employer_id && <p className="mt-1 text-sm text-red-600">{errors.employer_id}</p>}
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={processing}
                className={`w-full rounded-md px-4 py-2 font-medium text-white focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none ${
                  processing ? 'cursor-not-allowed bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'
                }`}
              >
                {processing ? 'Creating...' : 'Create Job'}
              </button>
            </div>
          </form>
        </div>

        {/* Help Text */}
        <div className="max-w-md text-sm text-gray-600">
          <p>* Required fields</p>
          <p className="mt-2">
            Fill out all the required information to create a new job listing. Make sure to provide a clear job title and competitive salary
            information.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Create;
