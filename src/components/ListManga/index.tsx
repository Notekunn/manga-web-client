import React from 'react'
import { MiniManga } from '../MangaCard/SmallMangaCard'
import { gql, useQuery } from '@apollo/client'

export const fetch = gql`
  query GetMangas {
    mangas {
      id
      name
      viewCount
      lastUpdated
      coverURL
      chapters(limit: 1) {
        chapterName
      }
    }
  }
`

export default function ListManga() {
  const { data, loading } = useQuery<{ mangas: any[] }>(fetch)
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
            chapterName={item[0]?.chapterName}
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
