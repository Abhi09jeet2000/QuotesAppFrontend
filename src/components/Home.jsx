import React from 'react'

import { useQuery } from '@apollo/client'
import { GET_ALL_QUOTES } from '../gql/queries'
import { Link } from 'react-router-dom'

export default function Home() {
  const { loading, error, data } = useQuery(GET_ALL_QUOTES)

  if (loading) return <h1>Loading...</h1>
  if (error) {
    console.log(error.message)
  }
  if (data.quotes.length === 0) {
    return <h4> No Quotes available </h4>
  }
  return (
    <div className="container">
      {data.quotes.map((quote) => {
        return (
          <blockquote key={quote._id}>
            <h6>{quote.name}</h6>
            <Link to={`/profile/${quote.by._id}`}>
              <p className="right-align">~{quote.by.firstName}</p>
            </Link>
          </blockquote>
        )
      })}
    </div>
  )
}
