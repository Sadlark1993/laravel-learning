import ButtonLink from '@/components/ButtonLink';
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
      <p className="mt-6">
        <ButtonLink href={`/jobs/${props.job.id}/edit`}>Edit Job</ButtonLink>
      </p>
    </Layout>
  );
}
