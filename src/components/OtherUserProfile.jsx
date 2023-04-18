import { useQuery } from '@apollo/client'
import React from 'react'
import { GET_USER_BY_ID } from '../gql/queries'
import { useParams } from 'react-router-dom'

export default function OtherUserProfile() {
  const { userid } = useParams()
  const { error, loading, data } = useQuery(GET_USER_BY_ID, {
    variables: { userid },
  })

  if (loading) return <h1>Loading...</h1>

  if (error) {
    console.log(error.message)
  }
  return (
    <div className="container my-container">
      <div className="center-align">
        <img
          className="circle"
          style={{ border: '2px solid', marginTop: '10px' }}
          src={`https://robohash.org/${data.user.firstName}.png?size=200x200`}
          alt="pic"
        />
        <h5>
          {data.user.firstName} {data.user.lastName}
        </h5>
        <h6>{data.user.email}</h6>
      </div>
      <h3>Your Quotes</h3>
      {data.user.quotes.map((quote) => {
        return (
          <blockquote key={quote._id}>
            <h6>{quote.name}</h6>
          </blockquote>
        )
      })}
    </div>
  )
}
