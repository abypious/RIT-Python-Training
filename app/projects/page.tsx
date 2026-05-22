import SectionHeading from '@/components/SectionHeading';
import ProjectCard from '@/components/ProjectCard';
import { workshopData } from '@/data/workshop';

export default function ProjectsPage() {
  return (
    <main>
      <section className="container mx-auto px-6 pt-10 sm:px-8 lg:px-10">
        <SectionHeading title="Projects" subtitle="Sample automation projects to build or extend." />
        <p className="max-w-3xl text-sm leading-6 text-slate-300">
          Use these ideas for your final project, GitHub showcase, or workshop portfolio.
        </p>

        <div className="mt-10 grid gap-6 xl:grid-cols-2">
          {workshopData.projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>
    </main>
  );
}
