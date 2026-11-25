import React from 'react';
import './Card.css';
import { ExternalLink, Github, Lock } from 'lucide-react';
import Icon from '../../Skills/Icon';

export default function Card({ title, description, link, tech, isInternal, index }) {
  let projectImg;
  try {
    projectImg = require(`../../../assets/images/projects/${title.toLowerCase()}.png`);
  } catch (e) {
    projectImg = null;
  }

  const hasValidLink = link && link.trim().length > 0;
  const isGitHub = hasValidLink && link.includes('github.com');

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
          <div className="flex items-center justify-between gap-2 mb-2">
            <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-violet-400 transition-colors">
              {title}
            </h3>
            {isInternal && (
              <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded-md bg-violet-950/80 text-violet-300 border border-violet-800/40">
                <Lock size={10} />
                Internal
              </span>
            )}
          </div>

          {/* Tech Stack Icons */}
          {Array.isArray(tech) && (
            <div className="flex flex-wrap gap-1.5 my-3">
              {tech.map((t) => (
                <Icon key={t} SVG={t} size="sm" />
              ))}
            </div>
          )}

          <p className="text-slate-300 text-sm leading-relaxed line-clamp-4">
            {description}
          </p>
        </div>
      </div>

      {/* Action Footer: ONLY render link if a valid git or live link is available */}
      <div className="p-5 pt-0">
        {hasValidLink ? (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2.5 rounded-xl bg-violet-600/20 text-violet-300 border border-violet-500/30 hover:bg-violet-600 hover:text-white transition-all w-full justify-center group-hover:border-violet-500"
          >
            {isGitHub ? <Github size={14} /> : <ExternalLink size={14} />}
            <span>{isGitHub ? 'View on GitHub' : 'Live Platform'}</span>
          </a>
        ) : (
          <div className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-white/5 border border-white/5 text-slate-400 text-xs">
            <Lock size={12} className="text-violet-400" />
            <span>Proprietary / Enterprise Project</span>
          </div>
        )}
      </div>
    </div>
  );
}
