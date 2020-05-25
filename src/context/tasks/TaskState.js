import React, { useReducer } from 'react'
import { v4 as uuidv4 } from 'uuid'
import TaskContext from './TaskContext'
import TaskReducer from './TaskReducer'
import {
  PROJECT_TASKS,
  ADD_TASK,
  VALIDATE_TASK,
  DELETE_TASK,
  STATUS_TASK,
  CURRENT_TASK,
  UPDATE_TASK
} from './../../types'

const TaskState = props => {
  const initialState = {
    tasks: [
      {id: 0, name: 'Google', status: true, projectId: 1},
      {id: 1, name: 'Amazon', status: false, projectId: 2},
      {id: 2, name: 'Youtube', status: false, projectId: 3},
      {id: 3, name: 'Spotify', status: true, projectId: 4},
      {id: 4, name: 'Whatsapp', status: true, projectId: 4},
      {id: 5, name: 'Facebook', status: false, projectId: 3},
      {id: 6, name: 'Twitter', status: false, projectId: 2},
      {id: 7, name: 'Uber', status: true, projectId: 1},
    ],
    projectTasks: null,
    errorTask: false,
    currentTask: null
  }

  const [state, dispatch] = useReducer(TaskReducer, initialState)

  const getTasks = projectId => {
    dispatch({
      type: PROJECT_TASKS,
      payload: projectId
    })
  }

  const addTask = task => {
    task.id = uuidv4()
    dispatch({
      type: ADD_TASK,
      payload: task
    })
  }

  const validateTask = () => {
    dispatch({
      type: VALIDATE_TASK
    })
  }

  const deleteTask = taskId => {
    dispatch({
      type: DELETE_TASK,
      payload: taskId
    })
  }

  const changeStatus = task => {
    dispatch({
      type: STATUS_TASK,
      payload: task
    })
  }

  const saveCurrentTask = task => {
    dispatch({
      type: CURRENT_TASK,
      payload: task
    })
  }

  const updateTask = task => {
    dispatch({
      type: UPDATE_TASK,
      payload: task
    })
  }

  return (
    <TaskContext.Provider
      value={{
        tasks: state.tasks,
        projectTasks: state.projectTasks,
        errorTask: state.errorTask,
        currentTask: state.currentTask,
        getTasks,
        addTask,
        validateTask,
        deleteTask,
        changeStatus,
        saveCurrentTask,
        updateTask
      }}
    >
      {props.children}
    </TaskContext.Provider>
  )
}

export default TaskState