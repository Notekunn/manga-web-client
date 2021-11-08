import React from 'react'
import MangaItem from './MangaItem'
import { useQuery } from '@apollo/client'
import { ApolloMangaList, fetchListManga } from '../action'
import { useHistory } from 'react-router'

export default function ListManga() {
  const history = useHistory()
  const { data, loading } = useQuery<ApolloMangaList>(fetchListManga)
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
            key={i + 100}
            name={item.name}
            coverURL={item.coverURL}
            lastUpdated={item.lastUpdated}
            onClick={() => history.push(`/truyen-tranh/${item.slug}`)}
          />
        ))}
      </div>
    </div>
  )
}
