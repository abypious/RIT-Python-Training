import SectionHeading from '@/components/SectionHeading';

export default function AboutPage() {
  return (
    <main>
      <section className="container mx-auto px-6 pt-10 sm:px-8 lg:px-10">
        <SectionHeading title="About" subtitle="A practical course experience for college students." />
        <div className="grid gap-8 lg:grid-cols-[0.9fr_0.8fr]">
          <div className="space-y-6 rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-glow">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Workshop mission</p>
            <h2 className="text-3xl font-semibold text-white">Make automation approachable, useful, and fun.</h2>
            <p className="text-sm leading-7 text-slate-300">
              This mini platform is designed to keep examples short, keep students engaged, and deliver the kind of automation skills you can use right away.
            </p>
            <ul className="grid gap-3 text-sm text-slate-300">
              <li className="rounded-3xl bg-slate-900/80 p-4">Project-first lessons with real Python tools.</li>
              <li className="rounded-3xl bg-slate-900/80 p-4">Interactive browser-based playground for fast experimentation.</li>
              <li className="rounded-3xl bg-slate-900/80 p-4">Student-focused assignments and resources without distractions.</li>
            </ul>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-glow">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">How this site helps</p>
            <div className="mt-6 space-y-4">
              <div className="rounded-3xl bg-slate-900/80 p-4">
                <p className="text-sm text-slate-300">Progress tracker shows how far students have come and what is left to study.</p>
              </div>
              <div className="rounded-3xl bg-slate-900/80 p-4">
                <p className="text-sm text-slate-300">Copy button for code examples keeps practice fast and clean.</p>
              </div>
              <div className="rounded-3xl bg-slate-900/80 p-4">
                <p className="text-sm text-slate-300">A polished UI with cards, gradients, and a responsive layout that feels modern but not overwhelming.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
