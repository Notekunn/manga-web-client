import React from 'react'
import { formatNumber } from '@utils/common'
import { Link } from 'react-router-dom'
export type MangaItemProps = Pick<Entity.Manga, 'name' | 'coverURL' | 'viewCount' | 'slug'> & {
  order: number
  lastChapter?: string
}
const topColor = (order: number): string => {
  if (order === 1) return '#d35400'
  if (order === 2) return '#27ae60'
  if (order === 3) return '#3498db'
  return '#3b3b3b'
}
export const MangaItem: React.FC<MangaItemProps> = (props) => {
  const { name, coverURL, lastChapter, viewCount, order, slug } = props
  return (
    <div className="flex border-b last:border-none py-1 mx-2 border-solid border-gray-300 items-stretch cursor-pointer">
      <div
        className="text-xl p-1 font-bold self-center"
        style={{
          color: topColor(order),
        }}
      >
        {`${order}`.padStart(2, '0')}
      </div>
      <img className="h-16 w-16" src={coverURL} alt={name} />

      <div className="flex flex-col ml-1 flex-1 justify-start">
        <span className="text-black font-semibold break-word">
          <Link to={`/truyen-tranh/${slug}/`}>{name}</Link>
        </span>
        <div className="flex justify-between">
          <span className="text-gray-700">Chapter {lastChapter || '0'}</span>
          <span className="text-sm italic">{formatNumber(viewCount)}</span>
        </div>
      </div>
    </div>
  )
}
