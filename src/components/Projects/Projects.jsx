import React from 'react'
import Card from './Card/Card'

const Projects = () => {
  return (
    <div id="projects" className="container">
        <div className="row">
        <div className="col-lg-4 p-8">
            <Card />
        </div>
        <div className="col-lg-4 p-8">
            <Card />
        </div>
        <div className="col-lg-4 p-8">
            <Card />
        </div>
    </div>
    </div>
  )
}

export default Projects
