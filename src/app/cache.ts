import { InMemoryCache, gql, makeVar } from '@apollo/client'
import localDB from './localDB'
export const typeDefs = gql`
  extend type Query {
    isLoggedIn: Boolean!
    visitedChapters: [Int!]!
  }
`
// reactive variables
export const isLoggedInVar = makeVar<boolean>(!!localStorage.getItem('token'))
interface LastVisitedChapter {
  chapterId: number
}
export const visitedChapters = localDB.createDatabase<LastVisitedChapter>('visited_chapters')

interface LastVisitedChapterDB {
  mangaId: number
  lastReadChapter?: string
}
export const lastReadTable = localDB.createDatabase<LastVisitedChapterDB>('last_chapter')

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
            return visitedChapters.select()
          },
        },
        launches: {},
      },
    },
    Manga: {
      fields: {
        lastReadChapter: {
          read(_, { readField, cache }) {
            console.log(readField('id'))
            console.log(cache)
          },
        },
      },
    },
  },
})
export default cache
