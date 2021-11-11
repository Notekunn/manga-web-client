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
        name
        isFollowing
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

export interface ChapterInfoData {
  chapter?: Entity.Chapter & {
    manga: Pick<Entity.Manga, 'slug' | 'isFollowing' | 'name' | 'chapters'>
    prevChapter?: Entity.ChapterLink
    nextChapter?: Entity.ChapterLink
  }
}

export interface ChapterInfoVariable {
  chapterId: number
}
