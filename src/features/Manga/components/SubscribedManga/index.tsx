import React from 'react'
import { useQuery } from '@apollo/client'
import { SubscribedMangaItem } from './SubscribeMangaItem'
import { GET_SUBSCRIBED_MANGA, FollowedMangaData } from '@features/Manga/action'
// export interface SubscribeMangaProps {}
export const SubscribedManga: React.FC = React.memo(() => {
  const { loading, data } = useQuery<FollowedMangaData>(GET_SUBSCRIBED_MANGA)
  if (loading || data?.subscribedManga.length === 0) return null
  return (
    <div className="mb-4 flex-shrink-0 text-[#967070]">
      <div className="flex flex-col border border-[#ecf0f1] w-[20rem]">
        <div className="py-1 mx-2 flex justify-between items-center border-b border-[#ecf0f1]">
          <span className="text-lg text-[#2980b9]">Truyện đang theo dõi</span>
          <span className="italic text-sm hover:underline cursor-pointer">Xem tất cả</span>
        </div>
        {data?.subscribedManga.map((item, i) => (
          <SubscribedMangaItem
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
