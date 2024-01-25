import React from "react";

const Icon = ({ SVG }) => {
  return (
    <div className="icon" title={SVG}>
      <img src={require(`../../assets/images/icons/${SVG}.png`)} width={40} />
    </div>
  );
};

export default Icon;
