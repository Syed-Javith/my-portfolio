import React from 'react';
import { ArrowRight, FileText, Sparkles } from 'lucide-react';

export default function IntroPara() {
  return (
    <div className="space-y-6">
      {/* Status Pill */}
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-950/60 border border-violet-700/40 text-violet-300 text-xs font-medium backdrop-blur-sm">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        <span>Software Engineer @ Zoho Corporation</span>
      </div>

      {/* Main Headline */}
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15]">
        Engineering resilient <br />
        <span className="violet-gradient-text">distributed systems</span> & <br />
        AI-powered solutions.
      </h1>

      {/* Bio Paragraph */}
      <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl">
        I am <strong className="text-white font-semibold">Syed Javith R</strong>, a backend engineer delivering production features, high-throughput microservices, and AI developer workflows. Focused on performance optimization, clean code, and cloud-native reliability.
      </p>

      {/* Action CTA Buttons */}
      <div className="flex flex-wrap items-center gap-3 pt-2">
        <a
          href="#projects"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-semibold text-sm shadow-lg shadow-violet-600/30 transition-all hover:scale-105 active:scale-95"
        >
          <span>Explore Projects</span>
          <ArrowRight size={16} />
        </a>

        <a
          href="https://docs.google.com/document/d/1pn74xW_SWBOkZHUfbo4gGWzBJ5wiozoFUzfiZpgP4tI/edit?usp=drivesdk"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-white font-semibold text-sm border border-white/10 hover:border-violet-500/40 transition-all hover:scale-105 active:scale-95"
        >
          <FileText size={16} />
          <span>Resume (Google Docs)</span>
        </a>

        <a
          href="#contact"
          className="inline-flex items-center gap-2 px-4 py-3 rounded-xl text-slate-400 hover:text-violet-300 font-medium text-sm transition-colors"
        >
          <Sparkles size={16} />
          <span>Get in Touch</span>
        </a>
      </div>
    </div>
  );
}
