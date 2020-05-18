import React from 'react'
import Sidebar from './../layout/Sidebar'
import Header from './../layout/Header'
import FormTasks from './../tasks/FormTasks'
import ListTasks from '../tasks/ListTasks'

const Projects = () => {
  return (
    <div className="contenedor-app">
      <Sidebar/>
      <div className="seccion-principal">
        <Header/>
        <main>
          <FormTasks/>
          <div className="contenedor-tareas">
            <ListTasks/>
          </div>
        </main>

      </div>

    </div>
  )
}

export default Projects