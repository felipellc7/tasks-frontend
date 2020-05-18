import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  const [user, setUser] = useState({
    email: '',
    password: ''
  })
  const {email, password} = user

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
        <h1>Login</h1>
        <form
          onSubmit={onSubmit}
        >
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
            <input
              type="submit"
              className="btn btn-primario btn-block"
              value="Log In"
            />
          </div>
        </form>
        <Link to={'/sign-up'} className="enlace-cuenta">Sign up for Tasks</Link>
      </div>
    </div>
  )
}

export default Login