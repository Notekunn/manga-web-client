import { gql } from '@apollo/client'
import { lastReadTable, visitedChapters } from '@app/cache'

export const LOGIN_MUTATION = gql`
  mutation LoginMutation($userInput: AuthInput!) {
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

export const logout = () => {
  localStorage.removeItem('token')
  visitedChapters.drop()
  lastReadTable.drop()
}
