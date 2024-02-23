import React, { useState } from 'react'

const ProgressBar = () => {

  const [scroll , setScroll ] = useState(0);

  window.onscroll = () => {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  setScroll(scrolled);
  };

  return (
    <div className="progress-bar" style={{width : `${scroll}%` }}>
      <div className="progress" style={{  height : '4px' , backgroundColor : "#7d3aed" }}>

      </div>
    </div>
  )
}

export default ProgressBar
