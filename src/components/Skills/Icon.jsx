import React from "react";
import {
  Database,
  Server,
  Network,
  ShieldCheck,
  Key,
  Layers,
  Sparkles,
  GitBranch,
  Terminal,
  Activity,
  Workflow,
  Cpu
} from "lucide-react";

// Inline custom SVGs for well-known technologies that don't have local png files
const customSVGs = {
  "spring boot": (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path
        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15.5v-7l6 3.5-6 3.5z"
        fill="#6db33f"
      />
    </svg>
  ),
  docker: (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="#2496ed">
      <path d="M13.98 11.08h2.12v2.12h-2.12zm-3.08 0h2.12v2.12h-2.12zm-3.08 0h2.12v2.12h-2.12zm9.24-3.08h2.12v2.12h-2.12zm-3.08 0h2.12v2.12h-2.12zm-3.08 0h2.12v2.12h-2.12zm-3.08 0h2.12v2.12H7.9zm6.16-3.08h2.12v2.12h-2.12zm-3.08 0h2.12v2.12H11zm11.7 8.3c-.34-.23-1.09-.32-1.7-.17-.11-.79-.53-1.5-1.25-1.95l-.65-.4-.42.63c-.45.68-.58 1.48-.38 2.22-.44.24-.96.38-1.5.38H2.76c-.4 0-.75.31-.79.71-.24 2.37.56 4.7 2.16 6.33 1.63 1.66 3.86 2.54 6.35 2.54 6.7 0 11.23-4.52 11.45-10.42.01-.26-.11-.53-.23-.87z" />
    </svg>
  ),
  redis: (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="#dc382d">
      <path d="M12 2L2 7l10 5 10-5-10-5zm0 8.5L4 7l8-4 8 4-8 3.5zM2 12l10 5 10-5-2.5-1.25L12 14.5l-7.5-3.75L2 12zm0 5l10 5 10-5-2.5-1.25L12 19.5l-7.5-3.75L2 17z" />
    </svg>
  ),
  "apache kafka": (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
      <circle cx="12" cy="12" r="3" fill="#ffffff" />
      <circle cx="5" cy="7" r="2.5" fill="#a78bfa" />
      <circle cx="19" cy="7" r="2.5" fill="#a78bfa" />
      <circle cx="5" cy="17" r="2.5" fill="#a78bfa" />
      <circle cx="19" cy="17" r="2.5" fill="#a78bfa" />
      <path d="M7 8l3 3M14 11l3-3M7 16l3-3M14 13l3 3" stroke="#a78bfa" strokeWidth="1.5" />
    </svg>
  ),
};

// Normalize names to match image file names
const imageMap = {
  java: "java",
  javascript: "javascript",
  typescript: "typescript",
  html: "html",
  css: "css",
  "node.js": "node",
  node: "node",
  "react.js": "react",
  react: "react",
  "tailwind css": "tailwind",
  tailwind: "tailwind",
  mysql: "mysql",
  postgresql: "postgres",
  postgres: "postgres",
  git: "git",
};

export default function Icon({ SVG, size = "md" }) {
  const normalized = SVG.toLowerCase().trim();
  const imgKey = imageMap[normalized];

  let imgSrc = null;
  if (imgKey) {
    try {
      imgSrc = require(`../../assets/images/icons/${imgKey}.png`);
    } catch (e) {
      imgSrc = null;
    }
  }

  // Pick Lucide icon fallback for concepts
  let ConceptIcon = null;
  if (normalized.includes("sql")) ConceptIcon = Database;
  else if (normalized.includes("rest")) ConceptIcon = Network;
  else if (normalized.includes("microservice")) ConceptIcon = Layers;
  else if (normalized.includes("hibernate")) ConceptIcon = Database;
  else if (normalized.includes("security") || normalized.includes("mtls")) ConceptIcon = ShieldCheck;
  else if (normalized.includes("jwt")) ConceptIcon = Key;
  else if (normalized.includes("resilience")) ConceptIcon = Activity;
  else if (normalized.includes("compose")) ConceptIcon = Layers;
  else if (normalized.includes("linux")) ConceptIcon = Terminal;
  else if (normalized.includes("langgraph")) ConceptIcon = Workflow;
  else if (normalized.includes("rag") || normalized.includes("vector")) ConceptIcon = GitBranch;
  else if (normalized.includes("llm")) ConceptIcon = Sparkles;
  else if (normalized.includes("event")) ConceptIcon = Cpu;
  else ConceptIcon = Server;

  const isSmall = size === "sm";

  return (
    <div
      className={`inline-flex items-center gap-1.5 rounded-xl border transition-all duration-200 cursor-default group/item ${
        isSmall
          ? "px-2 py-0.5 bg-slate-900/60 border-white/5 text-[11px] text-slate-300"
          : "px-3 py-1.5 bg-slate-900/80 border-white/10 text-xs font-medium text-slate-200 hover:border-violet-500/50 hover:bg-violet-950/30 hover:text-white"
      }`}
      title={SVG}
    >
      {/* 1. Image if available */}
      {imgSrc ? (
        <img
          src={imgSrc}
          width={isSmall ? 14 : 18}
          height={isSmall ? 14 : 18}
          alt={SVG}
          className="object-contain shrink-0 group-hover/item:scale-110 transition-transform"
        />
      ) : customSVGs[normalized] ? (
        /* 2. Custom SVG if defined */
        <span className="shrink-0">{customSVGs[normalized]}</span>
      ) : (
        /* 3. Concept Lucide Icon */
        <ConceptIcon size={isSmall ? 12 : 14} className="text-violet-400 shrink-0" />
      )}
      <span className="truncate">{SVG}</span>
    </div>
  );
}
