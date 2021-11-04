import { InMemoryCache, gql, makeVar } from '@apollo/client'
export const typeDefs = gql`
  extend type Query {
    isLoggedIn: Boolean!
    visitedChapters: [Int!]!
  }
`
// reactive variables
export const isLoggedInVar = makeVar<boolean>(!!localStorage.getItem('token'))
const storagedVisitedChapters = localStorage.getItem('visited-chapter') || '[]'
export const visitedChaptersVar = makeVar<number[]>(JSON.parse(storagedVisitedChapters))

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        isLoggedIn: {
          read() {
            return isLoggedInVar()
          },
        },
        visitedChapters: {
          read() {
            return visitedChaptersVar()
          },
        },
        launches: {},
      },
    },
  },
})
export default cache
