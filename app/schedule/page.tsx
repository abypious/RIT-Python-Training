'use client';

import { useMemo, useState } from 'react';
import { workshopData } from '@/data/workshop';
import SectionHeading from '@/components/SectionHeading';
import DayCard from '@/components/DayCard';
import Playground from '@/components/Playground';

export default function SchedulePage() {
  const [filter, setFilter] = useState('');
  const filteredDays = useMemo(
    () =>
      workshopData.days.filter((day) => {
        const text = `${day.title} ${day.highlight} ${day.overview}`.toLowerCase();
        return text.includes(filter.toLowerCase());
      }),
    [filter]
  );

  return (
    <main>
      <section className="container mx-auto px-6 pt-10 sm:px-8 lg:px-10">
        <SectionHeading title="Schedule" subtitle="Five days of practical automation lessons." />
        <p className="max-w-3xl text-sm leading-6 text-slate-300">
          Explore each day’s topic, learning goals, and assignments. Use the search field to find lessons quickly.
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <input
            type="search"
            value={filter}
            onChange={(event) => setFilter(event.target.value)}
            placeholder="Search lessons, tools, or projects"
            className="w-full rounded-3xl border border-slate-700/80 bg-slate-900/85 px-5 py-3 text-sm text-slate-100 outline-none transition focus:border-cyan-400/80 sm:w-96"
          />
          <div className="rounded-3xl bg-slate-900/90 px-5 py-3 text-sm text-slate-300">Showing {filteredDays.length} of {workshopData.days.length} days</div>
        </div>

        <div className="mt-10 space-y-8">
          {filteredDays.map((day) => (
            <DayCard key={day.day} day={day} />
          ))}
        </div>
      </section>

      <section className="container mx-auto px-6 py-16 sm:px-8 lg:px-10">
        <SectionHeading title="Hands-on Lab" subtitle="Test your code in the interactive playground." />
        <Playground />
      </section>
    </main>
  );
}
