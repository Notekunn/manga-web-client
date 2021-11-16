import { gql } from '@apollo/client'

export const GET_CHAPTER_INFO = gql`
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
        name
        subscribed
        chapters {
          id
          chapterName
        }
      }
      prevChapter {
        id
        chapterName
      }
      nextChapter {
        id
        chapterName
      }
    }
  }
`

export const UPDATE_VIEW_CHAPTER = gql`
  mutation UpdateView($chapterId: Int!) {
    updateView(chapterId: $chapterId)
  }
`

export interface ChapterInfoData {
  chapter?: Entity.Chapter & {
    manga: Pick<Entity.Manga, 'slug' | 'subscribed' | 'name' | 'chapters'>
    prevChapter?: Entity.ChapterLink
    nextChapter?: Entity.ChapterLink
  }
}

export interface ChapterInfoVariable {
  chapterId: number
}

export interface UpdateViewChapterVariable {
  chapterId: number
}
