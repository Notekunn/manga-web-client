import { gql } from '@apollo/client'

export const FETCH_TOP_MANGA = gql`
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

export interface TopMangaData {
  topManga: Array<{
    view: number
    manga: Pick<Entity.Manga, 'coverURL' | 'name' | 'lastUpdated' | 'lastChapter' | 'slug'>
  }>
}
export interface TopMangaVariable {
  type: 'DATE' | 'WEEK' | 'ALL'
}
