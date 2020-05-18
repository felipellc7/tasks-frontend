import React, {useState} from 'react'
import Sidebar from '../layout/Sidebar'

const NewProject = () => {
  const [project, setProject] = useState({
    name: '',
  })
  const { name } = project

  const onChange = e => {
    setProject({
        ...project,
        [e.target.name]: e.target.value
      }
    )
  }

  const onSubmitProject = e => {
    e.preventDefault()
    console.log(project)
  }

  return (
    <>
      <button type="button" className="btn btn-block btn-primario">
        New Project
      </button>
      <form
        className="formulario-nuevo-proyecto"
        onSubmit={onSubmitProject}
      >
        <input
          type="text"
          className="input-text"
          placeholder="Project Name..."
          value={name}
          onChange={e => onChange(e)}
          name="name"
        />
        <input
          type="submit"
          className="btn btn-block btn-primario"
          value="Add Project"
        />
      </form>
    </>
  )
}

export default NewProject