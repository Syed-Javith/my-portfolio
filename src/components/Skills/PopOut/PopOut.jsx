import React from 'react'
import "./PopOut.css"
const PopOut = ({ text  }) => {
  return (
    <div>
      <p className="popout">
          {text.split("").map((char) => {
            return <span>{char}</span>
          })}
          </p>
        </div>
        )
}

export default PopOut
