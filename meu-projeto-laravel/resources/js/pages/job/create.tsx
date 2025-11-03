import JobForm from '@/components/JobForm';
import Layout from '@/components/Layout';
import { Employer } from '@/types';

interface CreateJobProps {
  employers: Employer[];
}

const Create = ({ employers }: CreateJobProps) => {
  return (
    <Layout name="New Job">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Create a New Job</h1>
          <a href="/jobs" className="text-sm font-medium text-blue-600 hover:text-blue-800">
            ← Back to Jobs
          </a>
        </div>

        <JobForm employers={employers} />
      </div>
    </Layout>
  );
};

export default Create;
