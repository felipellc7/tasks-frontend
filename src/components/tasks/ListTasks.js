import React, {useContext} from 'react'
import Task from './Task'
import projectContext from './../../context/projects/ProjectContext'

const ListTasks = () => {
  const projectsContext = useContext(projectContext)
  const {project, deleteProject} = projectsContext
  
  if(!project) return <h2>Select a project!</h2>
  const [currentProject] = project
  
  const projectTasks = [
    {name: 'Choose Platform', status: true},
    {name: 'Choose Colors', status: false},
    {name: 'Choose Payment Method', status: false},
    {name: 'Choose Hosting', status: true}
  ]
  return (
    <>
      <h2>Project: {currentProject ? currentProject.name : null}</h2>
      <ul className="listado-tareas">
        {projectTasks.length === 0 ? (<li className="tarea"><p>There aren't tasks</p></li>)
        : projectTasks.map((task,i) => {
          return <Task task={task} key={i} />
        })}
      </ul>
      <button
          type="button"
          className="btn btn-elimiar"
          onClick={() => deleteProject(currentProject.id)}
        >Delete Project &times;</button>
    </>
  )
}

export default ListTasks