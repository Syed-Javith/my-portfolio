import React from 'react'
import "./Card.css"
const Card = ({title , description , link}) => {
  return (
    <div className="col-lg-4 p-8">
    <div className = "project shadow-xl">
    <img className="object-fit-contain" src={require(`../../../assets/images/projects/${title.toLowerCase()}.png`)} alt=""/>
    <div className="card-content">
      <h2>
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
  </div>
  )
}

export default Card
