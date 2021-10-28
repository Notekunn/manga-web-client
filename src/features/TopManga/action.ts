import { gql } from '@apollo/client'

export const FETCH_TOP_MANGA = gql`
  query TopManga($type: TopMangaType) {
    topManga(type: $type) {
      view
      manga {
        chapters(limit: 1) {
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
    manga: Pick<Manga, 'coverURL' | 'name' | 'lastUpdated'> & {
      chapters: Array<{
        chapterName: string
      }>
    }
  }>
}
export interface TopMangaVariable {
  type: 'DATE' | 'WEEK' | 'ALL'
}
