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
        chapterName
        chapterFullName
        viewCount
        lastUpdated
      }
    }
  }
`

export interface MangaInfoData {
  manga: Nullable<
    Manga & {
      chapters: Chapter[]
      artist: {
        name: string
        slug: string
      }
      categories: Array<{
        slug: string
        title: string
      }>
      groups: Array<{
        name: string
      }>
      status: string
      description?: string
    }
  >
}

export interface MangaInfoVariables {
  slug: string
}
