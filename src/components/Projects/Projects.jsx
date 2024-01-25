import React from 'react'
import Card from './Card/Card'
import { project } from '../../assets/data/project'

const Projects = () => {
  return (
    <div id="projects" className="container">
        <div className="row">
          {
            project.map((p,i) => {
              return <Card key={i} title={p.title} description={p.description} link={p.link} />
            })
          }   
        </div>
    </div>
  )
}

export default Projects
