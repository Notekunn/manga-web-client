import React from 'react'
import { SubscribeMangaItem } from './SubscribeMangaItem'
import { FETCH_SUBSCRIBE_MANGA, FollowedMangaData } from '../action'
import { useQuery } from '@apollo/client'
export interface SubscribeMangaProps {}
export const SubscribeManga: React.FC<SubscribeMangaProps> = React.memo(() => {
  const { loading, data } = useQuery<FollowedMangaData>(FETCH_SUBSCRIBE_MANGA)
  if (loading || data?.followedManga.length === 0) return null
  return (
    <div className="p-2 flex flex-col mb-4">
      <span className="pt-3 pl-3 text-lg text-lightBlue-600 text-left border-b-2 border-b-gray-500">
        Truyện mới cập nhật
      </span>
      {data?.followedManga.map((item, i) => (
        <SubscribeMangaItem
          coverURL={item.coverURL}
          lastChapter={item.lastChapter?.chapterName}
          lastUpdated={new Date(item.lastUpdated)}
          lastReadChapter={item.lastReadChapter}
          name={item.name}
          key={`follow-manga-${i}`}
        />
      ))}
    </div>
  )
})
