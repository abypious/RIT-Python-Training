'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { workshopData } from '@/data/workshop';
import SectionHeading from '@/components/SectionHeading';
import FeatureCard from '@/components/FeatureCard';
import ProjectCard from '@/components/ProjectCard';
import ResourceCard from '@/components/ResourceCard';
import Playground from '@/components/Playground';

const stats = [
  { label: 'Duration', value: '5 Days' },
  { label: 'Mode', value: 'Online' },
  { label: 'Session', value: '1 Hour / Day' },
];

export default function Home() {
  return (
    <main>
      <section className="relative overflow-hidden px-6 pt-8 sm:px-8 lg:px-10">
        <div className="container mx-auto grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center py-16">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="max-w-2xl space-y-5">
              <span className="inline-flex rounded-full bg-cyan-500/15 px-4 py-2 text-sm font-semibold text-cyan-200 ring-1 ring-cyan-400/30">
                Beginner-friendly workshop for students
              </span>
              <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Python Automation Workshop
              </h1>
              <p className="max-w-xl text-lg leading-8 text-slate-300">
                Learn practical Python automation through hands-on projects, bite-sized lessons, and an interactive browser playground.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link href="/#schedule" className="btn-primary">
                Start Learning
              </Link>
              <Link href="/schedule" className="btn-secondary">
                View Schedule
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label} className="card-glass p-5">
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-400">{stat.label}</p>
                  <p className="mt-2 text-2xl font-semibold text-white">{stat.value}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative rounded-[2rem] border border-white/10 bg-slate-950/70 p-6 shadow-glow backdrop-blur-xl sm:p-8"
          >
            <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.14),_transparent_25%)]" />
            <div className="relative space-y-5">
              <div className="rounded-3xl border border-slate-700/80 bg-slate-950/90 p-5 text-slate-100/90 shadow-xl">
                <p className="text-sm uppercase tracking-[0.25em] text-cyan-300/80">Live demo</p>
                <p className="mt-3 text-2xl font-semibold">Build a project every day</p>
                <p className="mt-2 text-sm leading-6 text-slate-400">From file automation to email bots—each lesson includes a practical mini project.</p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {workshopData.days.slice(0, 2).map((day) => (
                  <div key={day.title} className="rounded-3xl border border-slate-700/70 bg-slate-900/85 p-5">
                    <p className="text-sm font-medium text-cyan-300">Day {day.day}</p>
                    <h3 className="mt-3 text-lg font-semibold text-white">{day.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-400">{day.highlight}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="schedule" className="container mx-auto px-6 sm:px-8 lg:px-10">
        <SectionHeading title="Workshop Snapshot" subtitle="What you will build and learn in five days." />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {workshopData.features.map((feature) => (
            <FeatureCard key={feature.title} feature={feature} />
          ))}
        </div>
      </section>

      <section className="container mx-auto px-6 sm:px-8 lg:px-10">
        <SectionHeading title="Interactive Playground" subtitle="Run Python code right inside your browser." />
        <Playground />
      </section>

      <section className="container mx-auto px-6 sm:px-8 lg:px-10">
        <SectionHeading title="Featured Projects" subtitle="Automation ideas to inspire your final build." />
        <div className="grid gap-6 xl:grid-cols-2">
          {workshopData.projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>

      <section className="container mx-auto px-6 sm:px-8 lg:px-10 pb-20">
        <SectionHeading title="Resources" subtitle="Helpful guides and tools for every step." />
        <div className="grid gap-6 md:grid-cols-2">
          {workshopData.resources.slice(0, 4).map((resource) => (
            <ResourceCard key={resource.title} resource={resource} />
          ))}
        </div>
      </section>
    </main>
  );
}
