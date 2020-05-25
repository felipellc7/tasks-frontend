import React, { useContext } from 'react'
import TaskContext from './../../context/tasks/TaskContext'
import projectContext from './../../context/projects/ProjectContext'

const Task = ({task}) => {
  const tasksContext = useContext(TaskContext)
  const {deleteTask, getTasks, changeStatus, saveCurrentTask} = tasksContext
  const projectsContext = useContext(projectContext)
  const {project} = projectsContext
  const [currentProject] = project

  const handleChangeStatus = task => {
    task.status = task.status ? false : true
    changeStatus(task)
  }

  return (
    <li className="tarea sombra">
      <p>{task.name}</p>
      <div className="estado">
        {task.status ?
          (<button
            type="button"
            className="completo"
            onClick={() => handleChangeStatus(task)}
          >Complete</button>)
        :
        (<button
          type="button"
          className="incompleto"
          onClick={() => handleChangeStatus(task)}
        >Incomplete</button>)}
      </div>
      <div className="acciones">
        <button
          type="button"
          className="btn btn-primario"
          onClick={() => saveCurrentTask(task)}
        >Edit</button>
        <button
          type="button"
          className="btn btn-secundario"
          onClick={() => {deleteTask(task.id); getTasks(currentProject.id)}}
        >Delete</button>

      </div>
    </li>
  )
}

export default Task