import { useMutation } from '@apollo/client'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { SIGNUP_USER } from '../gql/mutations'

export default function Signup() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
  })
  // const [password, setPassword] = useState('')

  const [signupUser, { data, loading, error }] = useMutation(SIGNUP_USER)

  if (loading) return <h1>Loading...</h1>

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
    signupUser({
      variables: {
        userNew: formData,
      },
    })
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }
  return (
    <div className="container my-container">
      {error && <div className="red card-panel">{error.message}</div>}
      {data && data.user && (
        <div className="green card-panel">
          {data.user.firstName} is SignedUp. You can login now
        </div>
      )}
      <h5>Signup</h5>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          placeholder="Enter First Name"
          value={formData.firstName}
          name="firstName"
          onChange={(e) => handleChange(e)}
          required
        />
        <input
          type="text"
          placeholder="Enter Last Name"
          value={formData.lastName}
          name="lastName"
          onChange={(e) => handleChange(e)}
          required
        />
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
        <Link to="/login">
          <p>Already have an account</p>
        </Link>
        <button className="btn #673ab7 deep-purple" type="submit">
          Submit
        </button>
      </form>
    </div>
  )
}
