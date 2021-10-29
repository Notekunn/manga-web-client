import React from 'react'
export interface AppContext {
  isLogin: boolean
}
export const appVar: AppContext = {
  isLogin: !!localStorage.getItem('token'),
}
const context = React.createContext<AppContext>(appVar)
export default context

export const { Consumer: AppConsumer, Provider: AppProvider } = context
