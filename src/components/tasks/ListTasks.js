import React, {useContext} from 'react'
import Task from './Task'
import projectContext from './../../context/projects/ProjectContext'
import TaskContext from './../../context/tasks/TaskContext'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

const ListTasks = () => {
  const projectsContext = useContext(projectContext)
  const tasksContext = useContext(TaskContext)
  const {project, deleteProject} = projectsContext
  const {projectTasks} = tasksContext
  
  if(!project) return <h2>Select a project!</h2>
  const [currentProject] = project

  return (
    <>
      <h2>Project: {currentProject ? currentProject.name : null}</h2>
      <ul className="listado-tareas">
        {projectTasks.length === 0 ? (<li className="tarea"><p>There aren't tasks</p></li>)
        : <TransitionGroup>
          {projectTasks.map((task) => {
            return <CSSTransition key={task.id} timeout={200} classNames="tarea">
                <Task task={task}/>
              </CSSTransition>
          })}
        </TransitionGroup>}
      </ul>
      <button
          type="button"
          className="btn btn-eliminar"
          onClick={() => deleteProject(currentProject.id)}
        >Delete Project &times;</button>
    </>
  )
}

export default ListTasks