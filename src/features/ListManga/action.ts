import { gql } from '@apollo/client'

export const fetchListManga = gql`
  query GetMangas {
    mangas {
      id
      name
      viewCount
      lastUpdated
      coverURL
      slug
      chapters(limit: 3) {
        chapterName
        lastUpdated
      }
    }
  }
`

export interface ApolloMangaList {
  mangas: Array<
    Manga & {
      chapters: Chapter[]
      slug: string
      name: string
      coverURL: string
    }
  >
}
