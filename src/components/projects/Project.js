import React, {useContext} from 'react'
import projectContext from './../../context/projects/ProjectContext'
import TaskContext from './../../context/tasks/TaskContext'

const Project = ({project}) => {
  const projectsContext = useContext(projectContext)
  const tasksContext = useContext(TaskContext)
  const {currentProject} = projectsContext
  const {getTasks} = tasksContext

  const selectProject = id => {
    currentProject(id)
    getTasks(id)
  }

  return (
    <li>
      <button
        type="button"
        className="btn btn-blank"
        onClick={() => selectProject(project.id)}
      >{project.name}</button>
    </li>
  )
}

export default Project