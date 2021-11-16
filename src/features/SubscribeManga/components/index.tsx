import React from 'react'
import { SubscribeMangaItem } from './SubscribeMangaItem'
import { FETCH_SUBSCRIBE_MANGA, FollowedMangaData } from '../action'
import { useQuery } from '@apollo/client'
export interface SubscribeMangaProps {}
export const SubscribeManga: React.FC<SubscribeMangaProps> = React.memo(() => {
  const { loading, data } = useQuery<FollowedMangaData>(FETCH_SUBSCRIBE_MANGA)
  if (loading || data?.followedManga.length === 0) return null
  return (
    <div className="p-2 mb-4 flex-shrink-0 text-[#333333]">
      <div className="flex flex-col border border-[#ecf0f1]">
        <div className="py-1 mx-2 flex justify-between items-center border-b border-[#ecf0f1]">
          <span className="text-lg text-[#2980b9]">Truyện đang theo dõi</span>
          <span className="italic text-sm hover:underline cursor-pointer">Xem tất cả</span>
        </div>
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
    </div>
  )
})
