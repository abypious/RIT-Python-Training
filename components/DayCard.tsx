'use client';

import AssignmentCard from '@/components/AssignmentCard';
import { motion } from 'framer-motion';

type Day = {
  day: number;
  title: string;
  highlight: string;
  overview: string;
  objectives: string[];
  assignment: {
    title: string;
    difficulty: string;
    estimate: string;
    instructions: string;
  };
  resources: string[];
  codeExample: string;
};

export default function DayCard({ day }: { day: Day }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="card-glass overflow-hidden border border-white/10"
    >
      <div className="bg-slate-900/90 px-6 py-5">
        <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Day {day.day}</p>
        <h3 className="mt-3 text-2xl font-semibold text-white">{day.title}</h3>
        <p className="mt-3 text-sm leading-6 text-slate-400">{day.highlight}</p>
      </div>
      <div className="space-y-6 p-6">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Overview</p>
          <p className="mt-3 text-sm leading-6 text-slate-300">{day.overview}</p>
        </div>
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Learning objectives</p>
          <ul className="mt-3 grid gap-2 text-sm text-slate-300">
            {day.objectives.map((item) => (
              <li key={item} className="inline-flex items-center gap-3">
                <span className="h-2.5 w-2.5 rounded-full bg-cyan-300" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-3xl border border-slate-700/70 bg-slate-950/80 p-5 text-sm text-slate-100">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Code example</p>
          <pre className="mt-4 overflow-x-auto text-sm leading-6">{day.codeExample}</pre>
        </div>
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Resources</p>
          <div className="mt-3 flex flex-wrap gap-2 text-sm text-slate-300">
            {day.resources.map((resource) => (
              <span key={resource} className="rounded-full bg-slate-900/80 px-3 py-1">{resource}</span>
            ))}
          </div>
        </div>
        <AssignmentCard assignment={day.assignment} />
      </div>
    </motion.div>
  );
}
