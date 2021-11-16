import React from 'react'
import MangaItem from './MangaItem'
import { useQuery } from '@apollo/client'
import { MangaListData, FETCH_LIST_MANGA, MangaListVariable } from '../action'

export interface MangaFeedProps extends MangaListVariable {
  className?: string
}
export const MangaFeed: React.FC<MangaFeedProps> = (props) => {
  const { data, loading } = useQuery<MangaListData, MangaListVariable>(FETCH_LIST_MANGA, {
    variables: {
      ...props,
    },
  })
  const mangas = data?.mangas || []
  return (
    <>
      <div className={`grid grid-cols-4 mx-auto ${props.className}`}>
        {loading && <p>Loading...</p>}
        {mangas.map((item, i) => (
          <MangaItem
            chapterName={item.chapters[0]?.chapterName}
            key={`manga-feed-${i}`}
            name={item.name}
            coverURL={item.coverURL}
            lastUpdated={item.lastUpdated}
            chapters={item.chapters}
            slug={item.slug}
            className="w-1/4"
          />
        ))}
      </div>
    </>
  )
}
