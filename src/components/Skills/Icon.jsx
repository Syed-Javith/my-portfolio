import React from 'react'

const Icon = ({ SVG }) => {
  console.log(SVG);
  console.log(`../../assets/images/icons/${SVG}.png`);
  // console.log("../../assets/images/icons/github.png");
  return (
    <div className="icon" title={SVG}>
      <img src={require(`../../assets/images/icons/${SVG}.png`)} />
      {/* <img src={require("../../assets/images/icons/postman.png")} /> */}

    </div>
  )
}

export default Icon
