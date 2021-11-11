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
      isFollowing
    }
  }
`

export interface MangaInfoData {
  manga: Entity.Manga
}

export interface MangaInfoVariables {
  slug: string
}
