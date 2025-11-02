import Layout from '@/components/Layout';
import { Job } from '@/types';

interface JobsProps {
  jobs: Job[];
}

export default function Jobs(props: JobsProps) {
  return (
    <Layout name="Jobs List">
      <div className="space-y-4">
        {props.jobs.map((job: Job) => (
          <a href={'/jobs/' + job.id} key={job.id} className="block rounded-lg border border-gray-200 px-4 py-6">
            <div className="text-sn font-bold text-blue-500">{job.employer?.name}</div>
            <div>
              <strong>{job.title}</strong>: Pays {job.salary} per year.
            </div>
          </a>
        ))}
      </div>
    </Layout>
  );
}
