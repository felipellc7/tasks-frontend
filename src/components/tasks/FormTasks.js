import React, {useState, useEffect, useContext} from 'react'
import projectContext from './../../context/projects/ProjectContext'
import TaskContext from './../../context/tasks/TaskContext'

const FormTasks = () => {
  const projectsContext = useContext(projectContext)
  const tasksContext = useContext(TaskContext)
  const {project} = projectsContext
  const {errorTask, currentTask, addTask, validateTask, getTasks, updateTask} = tasksContext

  useEffect(() => {
    if (currentTask !== null) {
      setTask(currentTask)
    } else {
      setTask({name: ''})
    }
  }, [currentTask])

  const [task, setTask] = useState({
    name: ''
  })
  const {name} = task

  if(!project) return null
  const [currentProject] = project

  const handleChange = e => {
    setTask({
      ...task,
      [e.target.name]: e.target.value
    })
  }

  const hadleSubmit = e => {
    e.preventDefault()

    if (name.trim() === '' ) {
      validateTask()
      return
    }

    if (currentTask === null) {
      task.projectId = currentProject.id
      task.status = false
      addTask(task)
    } else {
      updateTask(task)
    }
    getTasks(currentProject.id)
    setTask({name: ''})
  }

  return (
    <div className="formulario">
      <form onSubmit={e => hadleSubmit(e)}>
        <div className="contenedor-input">
          <input
            type="text"
            className="input-text"
            placeholder="Task Name..."
            name="name"
            value={name}
            onChange={e => handleChange(e)}
          />
        </div>
        <div className="contenedor-input">
          <input
            type="submit"
            className="btn btn-primario btn-submit btn-block"
            value={currentTask ? "Edit Task" : "Add Task"}
          />
        </div>
      </form>
      {errorTask ? (
        <p className="mensaje error">Task name is required!</p>
      ) : null }
    </div>
  )
}

export default FormTasks