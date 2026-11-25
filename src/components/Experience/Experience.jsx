import React from 'react';
import './Experience.css';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

const experiences = [
  {
    role: "Member Technical Staff",
    company: "Zoho Corporation",
    period: "May 2025 – Present",
    location: "Chennai, India",
    type: "Full-Time",
    highlights: [
      "Engineered and shipped 25+ production features, system enhancements, and critical reliability fixes for high-scale enterprise backend services using Java and distributed SQL databases.",
      "Architected a Spring Boot microservices POC to decompose monolithic workflows into distributed services, utilizing Apache Kafka for asynchronous messaging, mTLS for secure inter-service communication, and JWT authentication.",
      "Optimized complex distributed SQL queries using deep execution-plan analysis and indexing strategies, driving a 70% reduction in database query latency.",
      "Architected and implemented a centralized Status Dashboard aggregating 13+ operational signals across 56 data centers, reducing alert noise by 20%.",
      "Built low-latency remote database querying APIs spanning 1,000+ applications across global data centers, incorporating multi-level Redis caching and Resilience4j rate limiting.",
      "Automated CI/CD deployments across 7 data centers, accelerating software delivery timelines from months to weeks.",
      "Integrated LLM-powered workflows into the SDLC (PRD generation, UI migration, code reviews), reducing token consumption by 10–15% through Qdrant vector retrieval.",
      "Designed 50+ reusable Java data-access APIs to safeguard relational database transactions and eliminate 50+ SQL injection vulnerabilities."
    ],
    skills: ["Java", "Spring Boot", "SQL", "Apache Kafka", "Redis", "Microservices", "Docker", "mTLS", "JWT", "Resilience4j", "Qdrant", "LLMs"]
  },
  {
    role: "Technical Trainee",
    company: "Zoho Corporation",
    period: "Aug 2024 – May 2025",
    location: "Chennai, India",
    type: "Trainee / Internship",
    highlights: [
      "Automated inter-data-center network provisioning pipelines using Java scripts and tools, reducing manual engineering overhead by 80%.",
      "Identified and mitigated critical SQL Injection and brute-force vulnerabilities across backend components.",
      "Stress-tested and optimized distributed background job schedulers executing 1,000+ concurrent jobs, diagnosing concurrency bottlenecks.",
      "Authored 180+ functional and integration test cases in close collaboration with QA teams to maintain high software accuracy and test coverage.",
      "Modernized legacy UI components, improving usability, accessibility, and overall system maintainability."
    ],
    skills: ["Java", "Distributed Systems", "SQL", "Security Auditing", "Automated Testing", "Job Schedulers", "Linux"]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 md:px-8 max-w-5xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-16" data-aos="fade-up">
        <span className="text-xs font-mono font-semibold uppercase tracking-widest text-violet-400 px-3 py-1 rounded-full bg-violet-950/60 border border-violet-800/40">
          Career Journey
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3 tracking-tight">
          Professional Experience
        </h2>
        <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl mx-auto">
          Delivering production-grade backend features, distributed microservices, and automated developer tooling.
        </p>
      </div>

      {/* Experience Timeline Cards */}
      <div className="space-y-8">
        {experiences.map((exp, idx) => (
          <div
            key={idx}
            className="glass-panel rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-violet-500/40 transition-all duration-300 relative group"
            data-aos="fade-up"
          >
            {/* Ambient subtle card glow on hover */}
            <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-violet-600/20 to-indigo-600/0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

            <div className="relative">
              {/* Header row */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-white/5 mb-5">
                <div>
                  <div className="flex items-center gap-2">
                    <Briefcase size={18} className="text-violet-400" />
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">{exp.role}</h3>
                  </div>
                  <p className="text-violet-400 font-semibold text-base mt-0.5">
                    {exp.company} <span className="text-xs font-normal text-slate-400">• {exp.type}</span>
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-2 text-xs text-slate-300 font-mono">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-violet-950/80 border border-violet-700/50 text-violet-300">
                    <Calendar size={13} />
                    {exp.period}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/5 border border-white/5 text-slate-400">
                    <MapPin size={13} />
                    {exp.location}
                  </span>
                </div>
              </div>

              {/* Bullet highlights */}
              <ul className="space-y-3 mb-6">
                {exp.highlights.map((item, hIdx) => (
                  <li key={hIdx} className="flex items-start gap-2.5 text-slate-300 text-sm sm:text-base leading-relaxed">
                    <CheckCircle2 size={16} className="text-violet-400 shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Skill tags */}
              <div className="flex flex-wrap gap-2 pt-3 border-t border-white/5">
                {exp.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="text-xs font-medium px-2.5 py-1 rounded-lg bg-white/5 text-slate-300 border border-white/5 hover:border-violet-500/30 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
