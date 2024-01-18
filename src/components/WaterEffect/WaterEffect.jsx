import React from 'react'
import "./WaterEffect.css"
const WaterEffect = (props) => {
  return (
    <div>
      <section>
                <div class="content">
                    <h2 className={props?.className || 'gallery'}>{props.heading}</h2>
                    <h2 className={props?.className || 'gallery'}>{props.heading}</h2>
                </div>
        </section>
    </div>
  )
}

export default WaterEffect
