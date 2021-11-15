import { gql } from '@apollo/client'
import { SortType } from '@constants/manga'

export const MANGA_FIELD = gql`
  fragment MangaField on Manga {
    id
    name
    otherName
    viewCount
    lastUpdated
    coverURL
    slug
  }
`

export const FETCH_LIST_MANGA = gql`
  query GetMangas($filter: MangaFilter, $pagination: OffsetPagination) {
    mangas(filter: $filter, pagination: $pagination) {
      id
      name
      slug
      viewCount
      lastUpdated
      coverURL
      chapters(limit: 3) {
        id
        chapterName
        lastUpdated
      }
    }
  }
`

export const SEARCH_LIST_MANGA = gql`
  query SearchManga($filter: MangaFilter, $pagination: OffsetPagination) {
    mangas(filter: $filter, pagination: $pagination) {
      id
      name
      otherName
      slug
      coverURL
      categories {
        slug
        title
      }
      lastChapter {
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
      | 'id'
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

export interface SearchMangaData {
  mangas: Array<
    Pick<
      Entity.Manga,
      'id' | 'name' | 'slug' | 'otherName' | 'categories' | 'coverURL' | 'lastChapter'
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
    page?: number
    itemPerPage?: number
  }
}

export interface SearchMangaVariable extends MangaListVariable {}
