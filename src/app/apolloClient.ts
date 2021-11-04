import { ApolloClient, createHttpLink, NormalizedCacheObject } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import cache, { typeDefs } from './cache'
const httpLink = createHttpLink({
  uri: process.env.API_SERVER_URL || 'http://localhost:4000',
})
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('token')
  return {
    headers: {
      ...headers,
      Authorization: token ? `Bearer ${token}` : '',
    },
  }
})
const client = new ApolloClient<NormalizedCacheObject>({
  link: authLink.concat(httpLink),
  cache,
  defaultOptions: {
    mutate: {
      errorPolicy: 'all',
    },
  },
  typeDefs,
})

export default client
