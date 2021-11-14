import { gql } from '@apollo/client'
import { SortType } from '@constants/manga'

export const FETCH_LIST_MANGA = gql`
  query GetMangas($filter: MangaFilter, $pagination: OffsetPagination) {
    mangas(filter: $filter, pagination: $pagination) {
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

export interface MangaListData {
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
export interface MangaFilter {
  sort?: SortType
  keyword?: string
  status?: Entity.Manga['status']
  categories?: string[]
}
export interface MangaListVariable {
  filter?: MangaFilter
  pagination?: {
    page: number
    itemPerPage: number
  }
}
