import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { ApolloProvider } from '@apollo/client'
import { AppProvider, appVar } from './app/context'
import apolloClient from './app/apolloClient'

ReactDOM.render(
  <React.StrictMode>
    <AppProvider value={appVar}>
      <ApolloProvider client={apolloClient}>
        <App />
      </ApolloProvider>
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
