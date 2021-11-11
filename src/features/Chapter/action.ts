import { gql } from '@apollo/client'

export const FETCH_INFO_CHAPTER = gql`
  query Chapter($chapterId: Int!) {
    chapter(id: $chapterId) {
      id
      chapterName
      chapterFullName
      content
      lastUpdated
      viewCount
      manga {
        slug
      }
      prevChapter {
        id
        chapterName
      }
      nextChapter {
        id
        chapterName
      }
      isFollowing
    }
  }
`

export interface ChapterInfoData {
  chapter?: Entity.Chapter & {
    manga: Pick<Entity.Manga, 'slug'>
    prevChapter?: Entity.ChapterLink
    nextChapter?: Entity.ChapterLink
    isFollowing: boolean
  }
}

export interface ChapterInfoVariable {
  chapterId: number
}
