import SectionHeading from '@/components/SectionHeading';
import ResourceCard from '@/components/ResourceCard';
import { workshopData } from '@/data/workshop';

export default function ResourcesPage() {
  return (
    <main>
      <section className="container mx-auto px-6 pt-10 sm:px-8 lg:px-10">
        <SectionHeading title="Resources" subtitle="A compact learning hub for students." />
        <p className="max-w-3xl text-sm leading-6 text-slate-300">
          Keep these references close while you learn. They’re curated for practical Python automation and project work.
        </p>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {workshopData.resources.map((resource) => (
            <ResourceCard key={resource.title} resource={resource} />
          ))}
        </div>
      </section>
    </main>
  );
}
