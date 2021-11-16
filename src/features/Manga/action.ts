import { gql } from '@apollo/client'

export const fetchMangaInfo = gql`
  query MangaInfo($slug: String!) {
    manga(slug: $slug) {
      id
      name
      slug
      otherName
      description
      status
      coverURL
      releaseYear
      lastUpdated
      viewCount
      artist {
        name
        slug
      }
      categories {
        slug
        title
      }
      groups {
        name
      }
      chapters {
        id
        chapterName
        chapterFullName
        viewCount
        lastUpdated
      }
      subscribed
    }
  }
`
export interface MangaInfoData {
  manga: Entity.Manga
}

export interface MangaInfoVariables {
  slug: string
}

export const FETCH_MANGA_SUBSCRIBE_INFO = gql`
  query MangaSubscibeInfo($slug: String!) {
    manga(slug: $slug) {
      id
      subscribed
    }
  }
`

export interface SubscibeInfoData {
  manga: Pick<Entity.Manga, 'subscribed' | 'id'>
}

export interface SubscibeInfoVariables extends MangaInfoVariables {}

export const SUBSCRIBE_MANGA = gql`
  mutation SubscribeManga($mangaId: Int!, $unsubscribe: Boolean) {
    subscribeManga(mangaId: $mangaId, unsubscribe: $unsubscribe)
  }
`
export interface SubscribeData {
  subscribeManga: boolean
}

export interface SubscribeVariable {
  mangaId: number
  unsubscribe?: boolean
}
