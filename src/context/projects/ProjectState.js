import React, { useReducer } from 'react'
import { v4 as uuidv4 } from 'uuid'
import ProjectContext from './ProjectContext'
import ProjectReducer from './ProjectReducer'
import {
  FORM_PROJECT, 
  GET_PROJECTS,
  ADD_PROJECT,
  VALIDATE_FORM,
  CURRENT_PROJECT,
  DELETE_PROJECT
} from './../../types'


const ProjectState = props => {
  const projects = [
    {id: 1, name: 'Virtual Market'},
    {id: 2, name: 'Fifa 20'},
    {id: 3, name: 'Call of Dutty'},
    {id: 4, name: 'MERN'}
  ]

  const initialState = {
    projects: [],
    form: false,
    errorForm: false,
    project: null
  }
  const [state, dispatch] = useReducer(ProjectReducer, initialState)

  const showForm = () => {
    dispatch({
      type: FORM_PROJECT
    })
  }

  const getProjects = () => {
    dispatch({
      type: GET_PROJECTS,
      payload: projects
    })
  }

  const addProject = project => {
    project.id = uuidv4()
    dispatch({
      type: ADD_PROJECT,
      payload: project
    })
  }

  const showError = () => {
    dispatch({
      type: VALIDATE_FORM
    })
  }

  const currentProject = projectId => {
    dispatch({
      type: CURRENT_PROJECT,
      payload: projectId
    })
  }

  const deleteProject = projectId => {
    dispatch({
      type: DELETE_PROJECT,
      payload: projectId
    })
  }

  return (
    <ProjectContext.Provider 
      value={{
        projects: state.projects,
        form: state.form,
        errorForm: state.errorForm,
        project: state.project,
        showForm,
        getProjects,
        addProject,
        showError,
        currentProject,
        deleteProject
      }}
    >
      {props.children}
    </ProjectContext.Provider>
  )
}

export default ProjectState