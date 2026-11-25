import React from 'react';
import './Experience.css';

const experiences = [
  {
    role: "Member Technical Staff",
    company: "Zoho Corporation",
    period: "May 2025 – Present",
    location: "Chennai, India",
    type: "Full-time",
    highlights: [
      "Engineered and shipped 25+ production features, enhancements, and critical reliability fixes for enterprise backend services using Java and distributed SQL databases.",
      "Architected a Spring Boot microservices POC to transition monolithic workflows into distributed services with JWT authentication, mTLS for secure inter-service communication, and Apache Kafka for asynchronous event-driven messaging.",
      "Optimized complex distributed SQL queries using deep execution-plan analysis and indexing strategies, driving a 70% reduction in database query latency.",
      "Architected and implemented a centralized Status Dashboard aggregating 13+ operational signals across 56 data centers, reducing alert noise by 20%.",
      "Built low-latency remote database querying APIs spanning 1,000+ applications across global data centers with multi-level Redis caching and Resilience4j rate-limiting.",
      "Automated CI/CD deployments across 7 data centers, accelerating software delivery timelines from months to weeks.",
      "Integrated LLM-powered workflows into the SDLC (PRD generation, UI migration, code reviews), reducing token consumption by 10–15% using Qdrant vector retrieval.",
      "Engineered 50+ reusable Java data-access APIs to safeguard relational database transactions and eliminate 50+ SQL injection vulnerabilities."
    ],
    skills: ["Java", "Spring Boot", "SQL", "Apache Kafka", "Redis", "Microservices", "Docker", "mTLS", "JWT", "Resilience4j", "Qdrant", "LLMs"]
  },
  {
    role: "Technical Trainee",
    company: "Zoho Corporation",
    period: "Aug 2024 – May 2025",
    location: "Chennai, India",
    type: "Full-time",
    highlights: [
      "Automated inter-data-center network and subnet provisioning pipelines, reducing manual engineering overhead by 80%.",
      "Identified and mitigated critical SQL injection and brute-force security vulnerabilities across core backend components.",
      "Stress-tested and optimized distributed background job schedulers executing 1,000+ concurrent jobs, diagnosing concurrency bottlenecks.",
      "Authored 180+ functional and integration test cases in close collaboration with QA teams to maintain high software accuracy and test coverage.",
      "Modernized legacy UI components, improving usability, accessibility, and overall system maintainability."
    ],
    skills: ["Java", "Distributed Systems", "SQL", "Security Auditing", "Automated Testing", "Job Schedulers", "Linux"]
  }
];

export default function Experience() {
  return (
    <div id="experience" className="experience-section container py-12 mx-auto">
      <h2 className="text-center text-violet-500 font-bold text-3xl mb-8">Professional Experience</h2>
      <div className="experience-list flex flex-col gap-8 max-w-4xl mx-auto">
        {experiences.map((exp, idx) => (
          <div key={idx} className="experience-card bg-white p-6 rounded-2xl shadow-lg border-l-4 border-violet-500 hover:shadow-xl transition-shadow" data-aos="fade-up">
            <div className="flex flex-wrap justify-between items-start gap-2 mb-3">
              <div>
                <h3 className="text-2xl font-bold text-gray-800">{exp.role}</h3>
                <h4 className="text-lg font-semibold text-violet-600">{exp.company} <span className="text-sm font-normal text-gray-500">• {exp.type}</span></h4>
              </div>
              <div className="text-right">
                <span className="inline-block bg-violet-100 text-violet-700 px-3 py-1 rounded-full text-sm font-semibold">{exp.period}</span>
                <p className="text-sm text-gray-500 mt-1">{exp.location}</p>
              </div>
            </div>
            <ul className="list-disc list-outside pl-5 space-y-2 text-gray-700 text-base mb-4">
              {exp.highlights.map((item, hIdx) => (
                <li key={hIdx} className="leading-relaxed">{item}</li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2 pt-2 border-t border-gray-100">
              {exp.skills.map((skill, sIdx) => (
                <span key={sIdx} className="bg-gray-100 text-gray-700 text-xs font-medium px-2.5 py-1 rounded-md">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
