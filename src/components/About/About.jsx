import React from "react";
import "./About.css";
import { GraduationCap, Award, BookOpen } from "lucide-react";

const educationList = [
  {
    institution: "Rajalakshmi Engineering College",
    degree: "B.E. Computer Science and Engineering",
    period: "2021 – 2025",
    location: "Chennai, India",
    grade: "CGPA: 8.82 / 10",
    description:
      "Core coursework in Distributed Systems, Data Structures & Algorithms, Object-Oriented Software Design, Operating Systems, Computer Networks, and Database Management Systems.",
    icon: GraduationCap,
  },
  {
    institution: "AKT Academy Matric Hr. Sec. School",
    degree: "Higher Secondary Certificate (Biology Stream)",
    period: "2020 – 2021",
    location: "Kallakurichi, Tamil Nadu",
    grade: "Score: 96.52%",
    description:
      "Graduated with top academic standing, strong foundation in analytical problem solving, mathematics, and computational sciences.",
    icon: BookOpen,
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 px-4 md:px-8 max-w-5xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-16" data-aos="fade-up">
        <span className="text-xs font-mono font-semibold uppercase tracking-widest text-violet-400 px-3 py-1 rounded-full bg-violet-950/60 border border-violet-800/40">
          Academics
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3 tracking-tight">
          Education & Qualifications
        </h2>
        <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl mx-auto">
          Academic foundation in Computer Science, software engineering principles, and systems design.
        </p>
      </div>

      {/* Education Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {educationList.map((item, idx) => {
          const IconComponent = item.icon;
          return (
            <div
              key={idx}
              className="glass-panel rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-violet-500/40 transition-all duration-300 relative group flex flex-col justify-between"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-violet-600/15 text-violet-400 border border-violet-500/20">
                    <IconComponent size={24} />
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-950/80 border border-violet-700/50 text-violet-300 font-mono text-xs font-semibold">
                    <Award size={13} />
                    {item.grade}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white tracking-tight">{item.institution}</h3>
                <h4 className="text-violet-400 font-medium text-sm mt-1">{item.degree}</h4>
                <p className="text-slate-400 text-xs font-mono mt-1 mb-4">
                  {item.period} • {item.location}
                </p>

                <p className="text-slate-300 text-sm leading-relaxed">{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
