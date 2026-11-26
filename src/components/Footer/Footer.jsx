import React from 'react';
import './Footer.css';
import { Mail, Phone, MapPin, Github, Linkedin, FileText, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const resumeUrl = `${process.env.PUBLIC_URL}/Syed_Javith_R_Resume.pdf`;

  return (
    <footer id="contact" className="relative pt-20 pb-12 border-t border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Col 1: Bio & Location */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-violet-600 to-indigo-500 flex items-center justify-center font-bold text-white text-sm">
                SJ
              </div>
              <span className="font-bold text-white text-lg tracking-tight">Syed Javith R</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Backend Developer at Zoho Corporation with experience in high-throughput enterprise services, microservices, and database optimization.
            </p>
            <div className="flex items-center gap-2 text-slate-400 text-xs font-mono">
              <MapPin size={15} className="text-violet-400 shrink-0" />
              <span>Guduvancheri, Chennai, Tamil Nadu - 603202</span>
            </div>
          </div>

          {/* Col 2: Direct Contact & Socials */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-sm font-mono uppercase tracking-wider text-slate-300 font-semibold">
              Get in Touch
            </h4>
            <div className="space-y-2.5">
              <a
                href="mailto:syedjavith14@gmail.com"
                className="flex items-center gap-2.5 text-sm text-slate-300 hover:text-violet-400 transition-colors"
              >
                <div className="p-2 rounded-lg bg-white/5 border border-white/5 text-violet-400">
                  <Mail size={15} />
                </div>
                <span>syedjavith14@gmail.com</span>
              </a>

              <a
                href="tel:+916380411427"
                className="flex items-center gap-2.5 text-sm text-slate-300 hover:text-violet-400 transition-colors"
              >
                <div className="p-2 rounded-lg bg-white/5 border border-white/5 text-violet-400">
                  <Phone size={15} />
                </div>
                <span>+91 6380411427</span>
              </a>
            </div>

            {/* Professional Profiles */}
            <div className="pt-2 flex items-center gap-2">
              <a
                href="https://www.linkedin.com/in/syed-javith-r-93500a249/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2.5 rounded-xl bg-white/5 border border-white/5 text-slate-300 hover:text-white hover:border-violet-500/50 hover:bg-violet-950/30 transition-all"
                title="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://github.com/Syed-Javith"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2.5 rounded-xl bg-white/5 border border-white/5 text-slate-300 hover:text-white hover:border-violet-500/50 hover:bg-violet-950/30 transition-all"
                title="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Resume"
                className="p-2.5 rounded-xl bg-white/5 border border-white/5 text-slate-300 hover:text-white hover:border-violet-500/50 hover:bg-violet-950/30 transition-all"
                title="Open Resume PDF in new tab"
              >
                <FileText size={18} />
              </a>
            </div>
          </div>

          {/* Col 3: Navigation */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-sm font-mono uppercase tracking-wider text-slate-300 font-semibold">
              Navigation
            </h4>
            <ul className="space-y-1.5 text-sm text-slate-400 p-0">
              <li><a href="#home" className="hover:text-violet-400 transition-colors">Home</a></li>
              <li><a href="#experience" className="hover:text-violet-400 transition-colors">Experience</a></li>
              <li><a href="#projects" className="hover:text-violet-400 transition-colors">Projects</a></li>
              <li><a href="#skills" className="hover:text-violet-400 transition-colors">Skills</a></li>
              <li><a href="#about" className="hover:text-violet-400 transition-colors">Education</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} Syed Javith R. All rights reserved.</p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
