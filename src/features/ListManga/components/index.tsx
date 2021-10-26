import React from 'react'
import { MiniManga } from '../../../components/MangaCard/SmallMangaCard'
import { useQuery } from '@apollo/client'
import { ApolloMangaList, fetchListManga } from '../listMangaAction'

export default function ListManga() {
  const { data, loading } = useQuery<ApolloMangaList>(fetchListManga)
  if (loading) return <p>Loading...</p>
  console.log(data)
  return (
    <div className="flex flex-col">
      <div className="flex-1 flex items-start">
        <span className="pt-3 pl-3 text-lg text-lightBlue-600">Truyện mới cập nhật</span>
      </div>
      <div className="flex flex-wrap justify-between px-3 items-start">
        {data?.mangas.map((item, i) => (
          <MiniManga
            chapterName={item.chapters[0]?.chapterName}
            key={i + 100}
            name={item.name}
            coverURL={item.coverURL}
            lastUpdated={item.lastUpdated}
            className={'flex-shrink'}
          ></MiniManga>
        ))}
      </div>
    </div>
  )
}
