import { ApolloClient, gql, createHttpLink, NormalizedCacheObject } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import cache from './cache'
const httpLink = createHttpLink({
  uri: process.env.API_SERVER_URL || 'http://localhost:4000',
})
// const typeDefs = gql`
//   extend type Query {
//     isLoggedIn: Boolean!
//     cartItems: [ID!]!
//   }
// `
const authLink = setContext((_, { header }) => {
  const token = localStorage.getItem('token')
  return {
    ...header,
    Authorization: token ? `Bearer ${token}` : '',
  }
})
const client = new ApolloClient<NormalizedCacheObject>({
  link: authLink.concat(httpLink),
  cache,
  // typeDefs,
})

export default client
