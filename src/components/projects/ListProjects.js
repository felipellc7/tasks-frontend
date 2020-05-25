import React, {useEffect, useContext} from 'react'
import Project from './Project'
import projectContext from './../../context/projects/ProjectContext'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

const ListProjects = () => {
  const projectsContext = useContext(projectContext)
  const {projects, getProjects} = projectsContext
  
  useEffect(() => {
    getProjects()
  }, [])
  
  if(projects.length === 0) return <p>There aren't projects!</p>
  
  return (
    <ul className="listado-proyectos">
      <TransitionGroup>
        {projects.map(project => {
          return <CSSTransition key={project.id} timeout={200} classNames="proyecto">
            <Project project={project} />
          </CSSTransition>
        })}
      </TransitionGroup>
    </ul>
  )
}

export default ListProjects