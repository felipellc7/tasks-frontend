import React, {useEffect, useContext} from 'react'
import Project from './Project'
import projectContext from './../../context/projects/ProjectContext'

const ListProjects = () => {
  const projectsContext = useContext(projectContext)
  const {projects, getProjects} = projectsContext
  
  useEffect(() => {
    getProjects()
  }, [])
  
  if(projects.length === 0) return <p>There aren't projects!</p>
  
  return (
    <ul className="listado-proyectos">
      {projects.map(project => {
        return <Project project={project} key={project.id} />
      })}
    </ul>
  )
}

export default ListProjects