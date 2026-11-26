import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, FileText, Download } from 'lucide-react';
import './NavBar.css';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const resumeUrl = `${process.env.PUBLIC_URL}/Syed_Javith_R_Resume.pdf`;

  const navLinks = [
    { name: 'About', href: '#home' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 pb-2 transition-all duration-300">
      <nav
        className={`w-full max-w-5xl rounded-2xl px-5 py-3 flex items-center justify-between transition-all duration-300 ${
          scrolled
            ? 'bg-slate-900/80 backdrop-blur-xl border border-white/10 shadow-2xl shadow-violet-950/20'
            : 'bg-slate-900/50 backdrop-blur-md border border-white/5'
        }`}
      >
        {/* Brand Logo */}
        <a href="#home" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-violet-600 to-indigo-500 flex items-center justify-center font-bold text-white shadow-md shadow-violet-500/20 group-hover:scale-105 transition-transform">
            SJ
          </div>
          <span className="font-bold text-white text-base tracking-tight hidden sm:inline-block">
            Syed Javith <span className="text-violet-400 font-mono text-xs">.dev</span>
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1 bg-white/5 border border-white/5 rounded-full px-3 py-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-300 hover:text-white px-3 py-1.5 rounded-full hover:bg-white/10 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-2">
          <a
            href="https://github.com/Syed-Javith"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-xl transition-all"
          >
            <Github size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/syed-javith-r-93500a249/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-xl transition-all"
          >
            <Linkedin size={18} />
          </a>
          {/* Open Resume PDF in new tab */}
          <a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-semibold bg-violet-600/90 hover:bg-violet-600 text-white px-3.5 py-2 rounded-xl shadow-sm shadow-violet-600/30 transition-all hover:scale-105"
            title="Open Resume in new tab"
          >
            <FileText size={14} />
            <span>Resume</span>
          </a>
          {/* Download PDF button */}
          <a
            href={resumeUrl}
            download="Syed_Javith_R_Resume.pdf"
            className="p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-xl transition-all"
            title="Download Resume PDF"
          >
            <Download size={16} />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-slate-300 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden fixed inset-x-4 top-20 bg-slate-900/95 backdrop-blur-2xl border border-white/10 rounded-2xl p-5 shadow-2xl flex flex-col gap-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-slate-200 hover:text-violet-400 text-base font-medium py-2 px-3 rounded-lg hover:bg-white/5 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                <a
                  href="https://github.com/Syed-Javith"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-slate-300 hover:text-white bg-white/5 rounded-lg"
                >
                  <Github size={18} />
                </a>
                <a
                  href="https://www.linkedin.com/in/syed-javith-r-93500a249/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-slate-300 hover:text-white bg-white/5 rounded-lg"
                >
                  <Linkedin size={18} />
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 mt-1">
              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-center font-semibold bg-violet-600 text-white px-3 py-2.5 rounded-lg"
              >
                View Resume
              </a>
              <a
                href={resumeUrl}
                download="Syed_Javith_R_Resume.pdf"
                className="text-xs text-center font-semibold bg-white/10 hover:bg-white/15 text-slate-200 px-3 py-2.5 rounded-lg"
              >
                Download PDF
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
