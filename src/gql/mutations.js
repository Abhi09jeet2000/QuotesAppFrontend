import { gql } from '@apollo/client'

export const SIGNUP_USER = gql`
  mutation createUser($userNew: userInput!) {
    user: signupUser(userNew: $userNew) {
      firstName
    }
  }
`

export const LOGIN_USER = gql`
  mutation signinUser($userSignin: userSignInput!) {
    user: signinUser(userSignin: $userSignin) {
      token
    }
  }
`

export const CREATE_QUOTE = gql`
  mutation createQuote($name: String!) {
    quote: createQuote(name: $name)
  }
`
