import React from 'react';

export default function Language({ lang, flag }) {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900/70 border border-white/10 text-slate-300 text-xs font-medium hover:border-violet-500/40 hover:text-white transition-all">
      <img
        src={require(`../../assets/images/language/${flag}.png`)}
        alt={lang}
        className="w-4 h-4 rounded-full object-cover"
      />
      <span>{lang}</span>
    </div>
  );
}
