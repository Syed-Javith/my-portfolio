import React from 'react';
import './Skills.css';
import { data } from '../../assets/data/icons';
import Icon from './Icon';
import { Code2, Server, Database, Network, Layout, Wrench, Bot } from 'lucide-react';

const domainIcons = {
  Languages: Code2,
  Backend: Server,
  Databases: Database,
  'Distributed Systems': Network,
  Frontend: Layout,
  'DevOps & Tools': Wrench,
  'AI & Data': Bot,
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-16" data-aos="fade-up">
        <span className="text-xs font-mono font-semibold uppercase tracking-widest text-violet-400 px-3 py-1 rounded-full bg-violet-950/60 border border-violet-800/40">
          Tech Stack
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3 tracking-tight">
          Skills & Competencies
        </h2>
        <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl mx-auto">
          Technologies, frameworks, databases, and architectural patterns I work with in production.
        </p>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((category, idx) => {
          const CategoryIcon = domainIcons[category.name] || Code2;
          return (
            <div
              key={category.name}
              className="glass-panel rounded-2xl p-6 border border-white/10 hover:border-violet-500/40 transition-all duration-300 relative group flex flex-col"
              data-aos="fade-up"
              data-aos-delay={idx * 60}
            >
              <div className="flex items-center gap-2.5 pb-3 border-b border-white/5 mb-4">
                <div className="p-2 rounded-lg bg-violet-600/15 text-violet-400">
                  <CategoryIcon size={18} />
                </div>
                <h3 className="text-base font-bold text-white tracking-tight">{category.name}</h3>
              </div>

              <div className="flex flex-wrap gap-2.5 items-center">
                {category.icons.map((iconName) => (
                  <Icon key={iconName} SVG={iconName} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
