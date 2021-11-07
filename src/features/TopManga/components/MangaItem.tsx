import React from 'react'
import { formatNumber } from '@utils/common'
export interface MangaItemProps
  extends Pick<Manga, 'name' | 'coverURL' | 'lastChapter' | 'viewCount'> {
  order: number
}
const topColor = (order: number): string => {
  if (order === 1) return '#d35400'
  if (order === 2) return '#27ae60'
  if (order === 3) return '#3498db'
  return '#3b3b3b'
}
export const MangaItem: React.FC<MangaItemProps> = (props) => {
  const { name, coverURL, lastChapter, viewCount, order } = props
  return (
    <div
      className="flex border-b-[1px] p-2 border-solid border-gray-400 items-center"
      style={{
        borderBottomWidth: '1px',
      }}
    >
      <div
        className="text-xl p-2 font-bold"
        style={{
          color: topColor(order),
        }}
      >
        {`${order}`.padStart(2, '0')}
      </div>
      <img className="h-[4.5rem] w-[4.5rem]" src={coverURL} alt={name} />
      <div className="flex flex-col ml-4 flex-1 justify-center">
        <span className="text-black font-bold">{name}</span>
        <div className="flex justify-between">
          <span className="text-gray-700">Chapter {lastChapter}</span>
          <span className="text-sm italic">{formatNumber(viewCount)}</span>
        </div>
      </div>
    </div>
  )
}
