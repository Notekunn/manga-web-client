import { gql } from '@apollo/client'

export const LOGIN_MUTATION = gql`
  mutation Mutation($userInput: AuthInput!) {
    login(userInput: $userInput) {
      token
      tokenExpiration
      userId
    }
  }
`
export const CHECK_LOGIN = gql`
  query CheckLogin {
    isLoggedIn @client
  }
`
export interface LoginData {
  login: {
    token: string
    tokenExpiration: string
    userId: number
  }
}

export interface LoginVariable {
  userInput: {
    username: string
    password: string
  }
}

export interface CheckLoginData {
  isLoggedIn: boolean
}
