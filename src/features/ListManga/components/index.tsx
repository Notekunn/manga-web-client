import React from 'react'
import MangaItem from './MangaItem'
import { useQuery } from '@apollo/client'
import { MangaListData, FETCH_LIST_MANGA, MangaListVariable } from '../action'
import { SortType } from '@constants/manga'

export default function ListManga() {
  const { data, loading } = useQuery<MangaListData>(FETCH_LIST_MANGA)
  if (loading) return <p>Loading...</p>
  return (
    <div className="flex flex-col">
      <div className="flex-1 flex items-start">
        <span className="pt-3 pl-3 text-lg text-lightBlue-600">Truyện mới cập nhật</span>
      </div>
      <div className="grid grid-cols-4">
        {data?.mangas.map((item, i) => (
          <MangaItem
            chapterName={item.chapters[0]?.chapterName}
            key={`list-manga-${i}`}
            name={item.name}
            coverURL={item.coverURL}
            lastUpdated={item.lastUpdated}
            chapters={item.chapters}
            slug={item.slug}
          />
        ))}
      </div>
    </div>
  )
}
export interface MangaFeedProps extends MangaListVariable {
  className?: string
}
export const MangaFeed: React.FC<MangaFeedProps> = (props) => {
  const { data, loading } = useQuery<MangaListData, MangaListVariable>(FETCH_LIST_MANGA, {
    variables: {
      ...props,
    },
  })
  return (
    <div className={`grid auto-cols-min grid-cols-5 px-auto ${props.className}`}>
      {loading && <p>Loading...</p>}
      {data?.mangas?.map((item, i) => (
        <MangaItem
          chapterName={item.chapters[0]?.chapterName}
          key={`list-manga-${i}`}
          name={item.name}
          coverURL={item.coverURL}
          lastUpdated={item.lastUpdated}
          chapters={item.chapters}
          slug={item.slug}
        />
      ))}
    </div>
  )
}
