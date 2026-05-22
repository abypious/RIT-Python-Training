type Project = {
  title: string;
  description: string;
  difficulty: string;
  tech: string;
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="card-glass p-6 overflow-hidden transition hover:-translate-y-1 hover:shadow-2xl">
      <div className="flex items-center justify-between">
        <span className="rounded-full bg-cyan-500/15 px-3 py-1 text-sm font-semibold text-cyan-200">{project.difficulty}</span>
        <span className="text-sm text-slate-400">{project.tech}</span>
      </div>
      <h3 className="mt-5 text-2xl font-semibold text-white">{project.title}</h3>
      <p className="mt-4 text-sm leading-6 text-slate-300">{project.description}</p>
      <div className="mt-6 flex items-center gap-3">
        <button className="btn-primary">GitHub sample</button>
        <span className="text-xs uppercase tracking-[0.3em] text-slate-500">coming soon</span>
      </div>
    </div>
  );
}
