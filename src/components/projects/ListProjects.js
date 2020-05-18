import React from 'react'
import Project from './Project'

const ListProjects = () => {
  const projects = [
    {name: 'Virtual Market'},
    {name: 'Fifa 20'},
    {name: 'Call of Dutty'}
  ]
  return (
    <ul className="listado-proyectos">
      {projects.map((project, i) => {
        return <Project project={project} key={i} />
      })}
    </ul>
  )
}

export default ListProjects