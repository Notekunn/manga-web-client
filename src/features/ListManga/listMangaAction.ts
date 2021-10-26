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
      chapters(limit: 1) {
        chapterName
      }
    }
  }
`

export interface ApolloMangaList {
  mangas: Array<
    Manga & {
      chapters: Chapter[]
      slug: string
    }
  >
}
