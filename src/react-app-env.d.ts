/// <reference types="react-scripts" />

type RemoveProps<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>

declare interface Manga {
  coverURL: string
  name: string
  lastChapter: string
  viewCount: number
  lastReadChapter?: string
  lastUpdated: Date
}

declare interface Chapter {
  manga?: Manga
  chapterName: string
  chapterFullName?: string
  content?: string
  viewCount: number
  lastUpdated: Date
}

type Nullable<T> = T | null
