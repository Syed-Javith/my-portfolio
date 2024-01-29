import React from 'react'
import "./Card.css"
import { Tilt } from 'react-tilt'

const Card = ({title , description , link}) => {
  const defaultOptions = {
    reverse:        false, 
    max:            30,    
    perspective:    1000,   
    scale:          1.01,   
    speed:          1000,   
    transition:     true,   
    axis:           null,  
    reset:          true,   
    easing:         "cubic-bezier(.03,.98,.52,.99)",  
  }
  return (
    
      <div className="col-lg-4 p-8">
        <Tilt options={defaultOptions}>
    <div className = "project shadow-xl">
    <img className="object-fit-contain" src={require(`../../../assets/images/projects/${title.toLowerCase()}.png`)} alt=""/>
    
    <div className="card-content">
      <h2 className="text-violet-600 font-extrabold">
        {title}
      </h2>
      <p>
        {description}
      </p>
      <a href={link} target='blank' className="button refer">
        Find out more <span className="material-symbols-outlined">&#10140;</span>
      </a>
    </div>
  </div>
  </Tilt>
  </div>
  )
}

export default Card
