'use client';

import { motion } from 'framer-motion';

type Assignment = {
  title: string;
  difficulty: string;
  estimate: string;
  instructions: string;
};

export default function AssignmentCard({ assignment }: { assignment: Assignment }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="card-glass p-6 border-cyan-400/10 transition"
    >
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm font-semibold text-cyan-300">Assignment</p>
          <h3 className="mt-2 text-xl font-semibold text-white">{assignment.title}</h3>
        </div>
        <span className="rounded-full bg-slate-800/80 px-3 py-1 text-xs uppercase tracking-[0.3em] text-slate-200">{assignment.difficulty}</span>
      </div>
      <p className="mt-4 text-sm leading-6 text-slate-300">{assignment.instructions}</p>
      <div className="mt-5 flex flex-wrap gap-3 text-sm text-slate-400">
        <span className="rounded-2xl bg-slate-900/80 px-3 py-1">Est. {assignment.estimate}</span>
        <span className="rounded-2xl bg-slate-900/80 px-3 py-1">Submit via GitHub link</span>
      </div>
    </motion.div>
  );
}
