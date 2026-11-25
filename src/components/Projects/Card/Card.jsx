import React from 'react';
import './Card.css';
import { ExternalLink, Github } from 'lucide-react';

export default function Card({ title, description, link, tech, index }) {
  let projectImg;
  try {
    projectImg = require(`../../../assets/images/projects/${title.toLowerCase()}.png`);
  } catch (e) {
    projectImg = null;
  }

  const isGitHub = link && link.includes('github.com');

  return (
    <div
      className="glass-panel rounded-2xl overflow-hidden border border-white/10 hover:border-violet-500/50 transition-all duration-300 flex flex-col justify-between group"
      data-aos="fade-up"
      data-aos-delay={index ? (index % 3) * 100 : 0}
    >
      <div>
        {/* Banner Image / Header */}
        <div className="relative w-full h-44 overflow-hidden bg-slate-900 border-b border-white/5">
          {projectImg ? (
            <img
              src={projectImg}
              alt={title}
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-tr from-violet-900/60 to-slate-900 flex items-center justify-center p-4">
              <span className="text-xl font-bold text-violet-300 text-center">{title}</span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Card Content */}
        <div className="p-5">
          <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-violet-400 transition-colors">
            {title}
          </h3>

          {tech && (
            <p className="text-xs font-mono font-medium text-violet-300/90 mt-1.5 mb-3 line-clamp-1">
              {tech}
            </p>
          )}

          <p className="text-slate-300 text-sm leading-relaxed line-clamp-4">
            {description}
          </p>
        </div>
      </div>

      {/* Action Footer */}
      <div className="p-5 pt-0">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-xl bg-violet-600/20 text-violet-300 border border-violet-500/30 hover:bg-violet-600 hover:text-white transition-all w-full justify-center group-hover:border-violet-500"
        >
          {isGitHub ? <Github size={14} /> : <ExternalLink size={14} />}
          <span>{isGitHub ? 'View on GitHub' : 'Live Platform'}</span>
        </a>
      </div>
    </div>
  );
}
