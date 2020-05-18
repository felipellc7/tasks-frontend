import React from 'react'
import Task from './Task'

const ListTasks = () => {
  const projectTasks = [
    {name: 'Choose Platform', status: true},
    {name: 'Choose Colors', status: false},
    {name: 'Choose Payment Method', status: false},
    {name: 'Choose Hosting', status: true}
  ]
  return (
    <>
      <h2>Project: Virtual Market</h2>
      <ul className="listado-tareas">
        {projectTasks.length === 0 ? (<li className="tarea"><p>There aren't tasks</p></li>)
        : projectTasks.map((task,i) => {
          return <Task task={task} key={i} />
        })}
      </ul>
      <button
          type="button"
          className="btn btn-elimiar"
        >Delete Project &times;</button>
    </>
  )
}

export default ListTasks