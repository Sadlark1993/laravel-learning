import { Employer } from '@/types';
import { router } from '@inertiajs/react';
import { FormEvent, useState } from 'react';
import FormButton from './FormButton';
import FormField from './FormField';
import FormSelect from './FormSelect';

interface JobFormData {
  title: string;
  salary: string;
  employer_id: string;
}

interface JobFormProps {
  employers: Employer[];
  onSuccess?: () => void;
  onError?: (errors: { [key: string]: string }) => void;
}

const JobForm = ({ employers, onSuccess, onError }: JobFormProps) => {
  const [formData, setFormData] = useState<JobFormData>({
    title: '',
    salary: '',
    employer_id: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [processing, setProcessing] = useState(false);

  const employerOptions =
    employers?.map((employer) => ({
      value: employer.id.toString(),
      label: employer.name,
    })) || [];

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setProcessing(true);
    setErrors({});

    router.post('/jobs', formData, {
      onError: (errors) => {
        setErrors(errors);
        setProcessing(false);
        onError?.(errors);
      },
      onSuccess: () => {
        setProcessing(false);
        onSuccess?.();
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
    <div className="max-w-md">
      <form onSubmit={handleSubmit} className="space-y-4">
        <FormField
          label="Job Title"
          name="title"
          type="text"
          value={formData.title}
          onChange={handleInputChange}
          error={errors.title}
          placeholder="Enter job title"
          required
        />

        <FormField
          label="Salary"
          name="salary"
          type="text"
          value={formData.salary}
          onChange={handleInputChange}
          error={errors.salary}
          placeholder="e.g., $50,000"
          required
        />

        <FormSelect
          label="Employer"
          name="employer_id"
          value={formData.employer_id}
          onChange={handleInputChange}
          options={employerOptions}
          error={errors.employer_id}
          placeholder="Select an employer"
          required
        />

        <div className="pt-4">
          <FormButton type="submit" loading={processing} loadingText="Creating..." fullWidth>
            Create Job
          </FormButton>
        </div>
      </form>

      {/* Help Text */}
      <div className="mt-6 text-sm text-gray-600">
        <p>* Required fields</p>
        <p className="mt-2">
          Fill out all the required information to create a new job listing. Make sure to provide a clear job title and competitive salary
          information.
        </p>
      </div>
    </div>
  );
};

export default JobForm;
