import React from "react";

const Icon = ({ SVG }) => {
  let imgSrc = null;
  try {
    imgSrc = require(`../../assets/images/icons/${SVG.toLowerCase()}.png`);
  } catch (e) {
    imgSrc = null;
  }

  if (imgSrc) {
    return (
      <div
        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900/80 border border-white/10 text-slate-200 text-xs font-medium hover:border-violet-500/50 hover:bg-violet-950/30 hover:text-white transition-all duration-200 group/item cursor-default"
        title={SVG}
      >
        <img
          src={imgSrc}
          width={18}
          height={18}
          alt={SVG}
          className="object-contain group-hover/item:scale-110 transition-transform"
        />
        <span className="capitalize">{SVG}</span>
      </div>
    );
  }

  return (
    <div
      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-violet-950/40 border border-violet-800/40 text-violet-300 text-xs font-semibold hover:border-violet-500 hover:bg-violet-900/40 hover:text-white transition-all duration-200 cursor-default"
      title={SVG}
    >
      <span>{SVG}</span>
    </div>
  );
};

export default Icon;
