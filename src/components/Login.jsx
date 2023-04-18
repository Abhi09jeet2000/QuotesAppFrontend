import { useMutation } from '@apollo/client'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { LOGIN_USER } from '../gql/mutations'

export default function Login() {
  const [formData, setFormData] = useState({ email: '', password: '' })
  // const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const [signinUser, { data, loading, error }] = useMutation(LOGIN_USER, {
    onCompleted(data) {
      localStorage.setItem('token', data.user.token)
      navigate('/')
    },
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log(formData)
    signinUser({
      variables: {
        userSignin: formData,
      },
    })
    // if (data) {
    //   localStorage.setItem('token', data.user.token)
    //   navigate('/')
    // }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  if (loading) return <h1>Loading...</h1>

  return (
    <div className="container my-container">
      {error && <div className="red card-panel">{error.message}</div>}
      <h5>Login</h5>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="email"
          placeholder="Enter Email"
          value={formData.email}
          name="email"
          onChange={(e) => handleChange(e)}
          required
        />
        <input
          type="password"
          placeholder="Enter Password"
          value={formData.password}
          name="password"
          onChange={handleChange}
          required
        />
        <Link to="/signup">
          <p>Don't have account?</p>
        </Link>
        <button className="btn #673ab7 deep-purple" type="submit">
          Login
        </button>
      </form>
    </div>
  )
}
