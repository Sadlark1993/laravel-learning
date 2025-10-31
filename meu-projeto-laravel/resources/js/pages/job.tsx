import Layout from '@/components/Layout';

interface HomeProps {
  job: { id: string; title: string; salary: string };
}

export default function Jobs(props: HomeProps) {
  return (
    <Layout name="Jobs List">
      <p>
        <strong>{props.job.title}</strong>: Pays {props.job.salary} per year.
      </p>
    </Layout>
  );
}
