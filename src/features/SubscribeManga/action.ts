import { gql } from '@apollo/client'

export const FETCH_SUBSCRIBE_MANGA = gql`
  query GetFollowedManga {
    followedManga {
      name
      coverURL
      slug
      lastUpdated
      lastChapter {
        chapterName
      }
      lastReadChapter @client
    }
  }
`
export interface FollowedMangaData {
  followedManga: Array<{
    name: string
    coverURL: string
    slug: string
    lastUpdated: Date
    lastChapter?: {
      chapterName: string
    }
  }>
}
