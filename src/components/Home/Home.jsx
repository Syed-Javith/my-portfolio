import React from 'react';
import './Home.css';
import IntroPara from './IntroPara';
import { lang } from '../../assets/data/lang';
import Language from './Language';
import { Layers, Server, Cpu, Database } from 'lucide-react';

const stats = [
  { icon: Layers, label: 'At Zoho Corporation', value: '1.5+ Yrs' },
  { icon: Server, label: 'Primary Stack', value: 'Java & Spring' },
  { icon: Cpu, label: 'Distributed Systems', value: 'Microservices' },
  { icon: Database, label: 'Relational & Cache', value: 'SQL & Redis' },
];

export default function Home() {
  return (
    <section id="home" className="relative pt-28 pb-16 px-4 md:px-8 max-w-6xl mx-auto overflow-hidden">
      {/* Ambient background glow elements */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-violet-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -right-48 w-96 h-96 bg-indigo-600/15 rounded-full blur-3xl pointer-events-none" />

      {/* Main Grid: Info + Avatar */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
        <div className="lg:col-span-7" data-aos="fade-right">
          <IntroPara />
        </div>

        <div className="lg:col-span-5 flex justify-center" data-aos="fade-left">
          <div className="relative group">
            {/* Glowing gradient backdrops */}
            <div className="absolute -inset-1 bg-gradient-to-tr from-violet-600 to-indigo-500 rounded-3xl blur-xl opacity-40 group-hover:opacity-70 transition duration-500" />
            <div className="relative w-64 h-72 sm:w-72 sm:h-80 md:w-80 md:h-96 rounded-3xl overflow-hidden border-2 border-white/10 shadow-2xl bg-slate-900/90">
              <img
                src={require('../../assets/images/rsj.jpg')}
                alt="Syed Javith R"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-slate-900/80 backdrop-blur-md border border-white/10 text-left">
                <p className="text-xs text-violet-400 font-mono font-medium">Backend Developer</p>
                <p className="text-sm font-bold text-white">Zoho Corporation</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Metrics / Highlights Ticker */}
      <div
        className="grid grid-cols-2 md:grid-cols-4 gap-4 p-5 rounded-2xl glass-panel border border-white/10 mb-12 shadow-xl"
        data-aos="fade-up"
      >
        {stats.map((s, idx) => {
          const IconComponent = s.icon;
          return (
            <div key={idx} className="flex flex-col items-center justify-center text-center p-3">
              <div className="p-2 rounded-xl bg-violet-600/15 text-violet-400 mb-2">
                <IconComponent size={20} />
              </div>
              <span className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">{s.value}</span>
              <span className="text-xs sm:text-sm text-slate-400 font-medium mt-0.5">{s.label}</span>
            </div>
          );
        })}
      </div>

      {/* Known Languages */}
      <div className="flex flex-wrap items-center gap-3 pt-2" data-aos="fade-up">
        <span className="text-xs font-mono uppercase tracking-wider text-slate-400 mr-2">Languages:</span>
        <div className="flex flex-wrap gap-2">
          {lang.map((l, i) => (
            <Language key={i} lang={l.lang} flag={l.flag} />
          ))}
        </div>
      </div>
    </section>
  );
}
