import { useQuery } from '@apollo/client'
import React, { useState, memo } from 'react'
import { FETCH_TOP_MANGA, TopMangaData, TopMangaVariable } from '../action'
import { TopMangaHeader } from './Header'
import { MangaItem } from './MangaItem'
export interface TopMangaProps {}

export const TopManga: React.FC<TopMangaProps> = memo(() => {
  const [activeTab, setActiveTab] = useState<number>(1)
  const { data } = useQuery<TopMangaData, TopMangaVariable>(FETCH_TOP_MANGA, {
    variables: {
      type: activeTab === 1 ? 'DATE' : activeTab === 2 ? 'WEEK' : 'ALL',
    },
  })
  return (
    <div className="p-2 flex flex-col flex-shrink-0">
      <TopMangaHeader activeId={activeTab} changeActiveTab={setActiveTab} />
      <div className="flex flex-col">
        {data?.topManga.map((e, i) => (
          <MangaItem
            lastChapter={e.manga.lastChapter?.chapterName}
            coverURL={e.manga.coverURL}
            name={e.manga.name}
            viewCount={e.view}
            order={i + 1}
            key={i}
          />
        ))}
      </div>
    </div>
  )
})
