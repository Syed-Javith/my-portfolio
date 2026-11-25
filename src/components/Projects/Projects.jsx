import React from 'react';
import Card from './Card/Card';
import { project } from '../../assets/data/project';

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-16" data-aos="fade-up">
        <span className="text-xs font-mono font-semibold uppercase tracking-widest text-violet-400 px-3 py-1 rounded-full bg-violet-950/60 border border-violet-800/40">
          Portfolio
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3 tracking-tight">
          Featured Projects
        </h2>
        <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl mx-auto">
          Enterprise architectures, multi-agent systems, full-stack applications, and developer tools.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {project.map((p, i) => (
          <Card
            key={i}
            title={p.title}
            description={p.description}
            link={p.link}
            tech={p.tech}
            isInternal={p.isInternal}
            index={i}
          />
        ))}
      </div>
    </section>
  );
}
