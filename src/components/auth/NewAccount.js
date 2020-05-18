import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const NewAccount = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const {name, email, password, confirmPassword} = user

  const onChange = e => {
    setUser({
        ...user,
        [e.target.name]: e.target.value
      }
    )
  }

  const onSubmit = e => {
    e.preventDefault();
    console.log(user)
  }

  return (
    <div className="form-usuario">
      <div className="contenedor-form sombra-dark">
        <h1>Sign Up</h1>
        <form
          onSubmit={onSubmit}
        >
          <div className="campo-form">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name..."
              value={name}
              onChange={e => onChange(e)}
            />
          </div>
          <div className="campo-form">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your email..."
              value={email}
              onChange={e => onChange(e)}
            />
          </div>
          <div className="campo-form">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Your Password..."
              value={password}
              onChange={e => onChange(e)}
            />
          </div>
          <div className="campo-form">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm Password..."
              value={confirmPassword}
              onChange={e => onChange(e)}
            />
          </div>
          <div className="campo-form">
            <input
              type="submit"
              className="btn btn-primario btn-block"
              value="Sign Up"
            />
          </div>
        </form>
        <Link to={'/'} className="enlace-cuenta">Back to Log In</Link>
      </div>
    </div>
  )
}

export default NewAccount