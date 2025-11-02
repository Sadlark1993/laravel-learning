import Layout from '@/components/Layout';
import { Job } from '@/types';

interface JobsProps {
  jobs: {
    data: Job[];
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
    from: number;
    to: number;
    links: Array<{
      url: string | null;
      label: string;
      active: boolean;
    }>;
  };
}

export default function Jobs(props: JobsProps) {
  const { jobs } = props;

  return (
    <Layout name="Jobs List">
      <div className="space-y-6">
        {/* Jobs List */}
        <div className="space-y-4">
          {jobs.data.map((job: Job) => (
            <a href={'/jobs/' + job.id} key={job.id} className="block rounded-lg border border-gray-200 px-4 py-6">
              <div className="text-sn font-bold text-blue-500">{job.employer?.name}</div>
              <div>
                <strong>{job.title}</strong>: Pays {job.salary} per year.
              </div>
            </a>
          ))}
        </div>

        {/* Pagination Info */}
        <div className="text-sm text-gray-700">
          Showing {jobs.from} to {jobs.to} of {jobs.total} jobs
        </div>

        {/* Pagination Links */}
        {jobs.last_page > 1 && (
          <nav className="flex justify-center">
            <div className="flex space-x-1">
              {jobs.links.map((link, index) => {
                // Clean the label to avoid dangerouslySetInnerHTML
                const getCleanLabel = (label: string) => {
                  return label.replace('&laquo;', '‹').replace('&raquo;', '›').replace('&lt;', '<').replace('&gt;', '>').replace('&amp;', '&');
                };

                if (!link.url) {
                  return (
                    <span key={index} className="cursor-not-allowed px-3 py-2 text-gray-400">
                      {getCleanLabel(link.label)}
                    </span>
                  );
                }

                return (
                  <a
                    key={index}
                    href={link.url}
                    className={`rounded-md px-3 py-2 text-sm font-medium ${
                      link.active ? 'bg-blue-500 text-white' : 'border border-gray-300 bg-white text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {getCleanLabel(link.label)}
                  </a>
                );
              })}
            </div>
          </nav>
        )}
      </div>
    </Layout>
  );
}
