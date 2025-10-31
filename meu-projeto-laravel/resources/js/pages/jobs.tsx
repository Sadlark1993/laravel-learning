import Layout from '@/components/Layout';

interface HomeProps {
  jobs: {
    id: string;
    title: string;
    salary: string;
  }[];
}

export default function Jobs(props: HomeProps) {
  return (
    <Layout name="Jobs List">
      <ul>
        {props.jobs.map((item) => (
          <a href={'/jobs/' + item.id} key={item.id}>
            <li className="list-disc">
              <strong>{item.title}</strong>: Pays {item.salary} per year.
            </li>
          </a>
        ))}
      </ul>
    </Layout>
  );
}
