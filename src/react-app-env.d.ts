/// <reference types="react-scripts" />

type RemoveProps<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>

type Nullable<T> = T | null

type RecordPartial<K extends string | number | symbol, T> = { [P in K]?: T }

declare namespace Entity {
  type ChapterLink = Pick<Entity.Chapter, 'id' | 'chapterName'>
  interface User {
    id: number
    username: string
    name?: string
    email: string
    password: string
    avatarURL?: string
    role: 'MEMBER' | 'MODERATOR' | 'ADMINISTRATOR'
  }

  interface Artist {
    id: number
    name: string
    slug: string
    about?: string
    avatarURL?: string
  }

  interface Category {
    id: number
    title: string
    slug: string
    description?: string
  }

  interface Group {
    id: number
    name: string
    description?: string
  }

  interface GroupMember {
    groupId: number
    memberId: number
    role: 'MEMBER' | 'MODERATOR'
    participantAt: Date
  }

  interface Manga {
    id: string
    name: string
    slug: string
    otherName?: string
    description?: string
    status: 'CANCELLED' | 'DROPPED' | 'ONGOING' | 'COMPLETED'
    coverURL: string
    releaseYear?: string
    lastUpdated: Date
    viewCount: number
    artist: Artist
    categories: Category[]
    groups: Group[]
    chapters: Chapter[]
    lastChapter?: Chapter
    lastReadChapter?: string
    subscribed: boolean
  }

  interface Chapter {
    id: number
    chapterName: string
    mangaId: number
    chapterFullName?: string
    viewCount: number
    lastUpdated: Date
    content?: string
  }
}
