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

export const SUBSCRIBE_MANGA = gql`
  mutation FollowManga($mangaId: Int!, $unfollow: Boolean) {
    followManga(mangaId: $mangaId, unfollow: $unfollow)
  }
`
export interface FollowedMangaData {
  followedManga: Pick<
    Entity.Manga,
    'name' | 'coverURL' | 'slug' | 'lastUpdated' | 'lastChapter' | 'lastReadChapter'
  >[]
}

export interface FollowMangaData {
  followManga: boolean
}

export interface FollowMangaVariable {
  mangaId: number
  unfollow: boolean
}
