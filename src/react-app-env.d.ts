/// <reference types="react-scripts" />

type RemoveProps<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>

declare interface Manga {
  coverURL: string
  name: string
  lastChapter: string
  totalViews: number
  lastReadChapter?: string
  lastUpdated: Date
}
