import { gql } from '@apollo/client'

export const GET_MANGA_INFO = gql`
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
export const GET_MANGA_SUBSCRIBE_INFO = gql`
  query MangaSubscibeInfo($slug: String!) {
    manga(slug: $slug) {
      id
      subscribed
    }
  }
`
export const SUBSCRIBE_MANGA = gql`
  mutation SubscribeManga($mangaId: Int!, $unsubscribe: Boolean) {
    subscribeManga(mangaId: $mangaId, unsubscribe: $unsubscribe)
  }
`
export const GET_TOP_MANGA = gql`
  query TopManga($type: TopMangaType) {
    topManga(type: $type) {
      view
      manga {
        slug
        lastChapter {
          id
          chapterName
        }
        name
        coverURL
        lastUpdated
      }
    }
  }
`

export const GET_SUBSCRIBED_MANGA = gql`
  query GetFollowedManga {
    subscribedManga {
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

/*******************************/
export interface MangaInfoData {
  manga: Entity.Manga
}

export interface MangaInfoVariables {
  slug: string
}

/*******************************/
export interface SubscibeInfoData {
  manga: Pick<Entity.Manga, 'subscribed' | 'id'>
}

export interface SubscibeInfoVariables extends MangaInfoVariables {}

/*******************************/
export interface SubscribeData {
  subscribeManga: boolean
}

export interface SubscribeVariable {
  mangaId: number
  unsubscribe?: boolean
}
/*******************************/
export interface TopMangaData {
  topManga: Array<{
    view: number
    manga: Pick<Entity.Manga, 'coverURL' | 'name' | 'lastUpdated' | 'lastChapter' | 'slug'>
  }>
}
export interface TopMangaVariable {
  type: 'DATE' | 'WEEK' | 'ALL'
}
/*******************************/
export interface FollowedMangaData {
  subscribedManga: Pick<
    Entity.Manga,
    'name' | 'coverURL' | 'slug' | 'lastUpdated' | 'lastChapter' | 'lastReadChapter'
  >[]
}
