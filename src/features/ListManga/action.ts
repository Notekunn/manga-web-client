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
        id
        chapterName
        lastUpdated
      }
    }
  }
`

export interface ApolloMangaList {
  mangas: Array<
    Pick<
      Entity.Manga,
      | 'name'
      | 'slug'
      | 'coverURL'
      | 'chapters'
      | 'viewCount'
      | 'lastChapter'
      | 'lastReadChapter'
      | 'lastUpdated'
    >
  >
}
