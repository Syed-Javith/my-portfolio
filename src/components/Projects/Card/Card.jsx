import React from 'react'
import "./Card.css"
import { Tilt } from 'react-tilt'

const Card = ({ title, description, link, tech }) => {
  const defaultOptions = {
    reverse: false,
    max: 25,
    perspective: 1000,
    scale: 1.01,
    speed: 1000,
    transition: true,
    axis: null,
    reset: true,
    easing: "cubic-bezier(.03,.98,.52,.99)",
  }

  let projectImg;
  try {
    projectImg = require(`../../../assets/images/projects/${title.toLowerCase()}.png`);
  } catch (e) {
    projectImg = null;
  }

  return (
    <div className="col-lg-4 p-4 md:p-6" data-aos="fade-up">
      <Tilt options={defaultOptions}>
        <div className="project shadow-xl">
          {projectImg && (
            <img className="object-fit-contain w-full h-full" src={projectImg} alt={title} />
          )}

          <div className="card-content">
            <h2 className="text-violet-600 font-extrabold text-xl">
              {title}
            </h2>
            {tech && (
              <p className="text-xs text-violet-300 font-semibold mb-2">
                {tech}
              </p>
            )}
            <p className="text-sm">
              {description}
            </p>
            <a href={link} target="_blank" rel="noopener noreferrer" className="button refer">
              Find out more <span className="material-symbols-outlined">&#10140;</span>
            </a>
          </div>
        </div>
      </Tilt>
    </div>
  )
}

export default Card;
