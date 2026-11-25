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
      <div className="icon flex flex-col items-center justify-center p-2 rounded-xl hover:scale-110 transition-transform cursor-pointer" title={SVG}>
        <img src={imgSrc} width={42} height={42} alt={SVG} className="object-contain" />
        <span className="text-xs text-gray-600 mt-1 capitalize font-medium">{SVG}</span>
      </div>
    );
  }

  return (
    <div className="icon flex items-center justify-center px-3 py-2 bg-violet-50 text-violet-700 border border-violet-200 rounded-xl hover:scale-105 transition-transform cursor-pointer shadow-sm" title={SVG}>
      <span className="text-sm font-semibold whitespace-nowrap">{SVG}</span>
    </div>
  );
};

export default Icon;
