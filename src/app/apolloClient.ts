import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
const httpLink = createHttpLink({
  uri: process.env.API_SERVER_URL || 'http://localhost:4000',
})
const authLink = setContext((_, { header }) => {
  const token = localStorage.getItem('token')
  return {
    ...header,
    Authorization: token ? `Bearer ${token}` : '',
  }
})
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
})

export default client
