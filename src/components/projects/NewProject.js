import React, {useState, useContext} from 'react'
import projectContext from './../../context/projects/ProjectContext'

const NewProject = () => {
  const projectsContext = useContext(projectContext)
  const {form, errorForm, showForm, addProject, showError} = projectsContext

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
    if (name === '') {
      showError()
      return
    }

    addProject(project)
    setProject({name: ''}) // Reset Form
  }

  return (
    <>
      <button type="button" className="btn btn-block btn-primario" onClick={() => showForm()}>
        New Project
      </button>
      {form ? (
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
      ) : null}
      {errorForm ? (
        <p className="mensaje error">Project name is required!</p>
      )
      : null}
    </>
  )
}

export default NewProject