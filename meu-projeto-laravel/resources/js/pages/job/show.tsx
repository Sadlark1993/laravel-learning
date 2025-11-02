import Layout from '@/components/Layout';

interface HomeProps {
  job: { id: string; title: string; salary: string };
}

export default function Show(props: HomeProps) {
  return (
    <Layout name="Job Details">
      <p>
        <strong>{props.job.title}</strong>: Pays {props.job.salary} per year.
      </p>
    </Layout>
  );
}
