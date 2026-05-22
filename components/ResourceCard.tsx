type Resource = {
  title: string;
  summary: string;
  link: string;
};

export default function ResourceCard({ resource }: { resource: Resource }) {
  return (
    <a
      href={resource.link}
      target="_blank"
      rel="noreferrer"
      className="card-glass p-6 transition hover:-translate-y-1 hover:border-violet-400/40"
    >
      <h3 className="text-xl font-semibold text-white">{resource.title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-300">{resource.summary}</p>
      <p className="mt-5 text-sm font-medium text-cyan-300">Open resource →</p>
    </a>
  );
}
