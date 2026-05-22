import SectionHeading from '@/components/SectionHeading';
import AssignmentCard from '@/components/AssignmentCard';
import { workshopData } from '@/data/workshop';

export default function AssignmentsPage() {
  return (
    <main>
      <section className="container mx-auto px-6 pt-10 sm:px-8 lg:px-10">
        <SectionHeading title="Assignments" subtitle="Practice what you learn every day." />
        <p className="max-w-3xl text-sm leading-6 text-slate-300">
          Each lesson includes a beginner-friendly assignment and clear instructions for completion and submission.
        </p>

        <div className="mt-10 grid gap-6 xl:grid-cols-2">
          {workshopData.days.map((day) => (
            <AssignmentCard key={day.day} assignment={day.assignment} />
          ))}
        </div>
      </section>
    </main>
  );
}
