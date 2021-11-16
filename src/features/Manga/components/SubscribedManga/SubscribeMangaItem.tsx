import React from 'react'
import { formatTimeDiff } from '@utils/common'
export type SubscribedMangaItemProps = Pick<
  Entity.Manga,
  'name' | 'coverURL' | 'lastReadChapter' | 'lastUpdated'
> & {
  lastChapter?: string
}
export const SubscribedMangaItem: React.FC<SubscribedMangaItemProps> = (props) => {
  const { name, coverURL, lastChapter, lastReadChapter, lastUpdated } = props
  return (
    <div className="flex last:border-0 border-b py-2 mx-2 items-center">
      <img className="h-[4rem] w-[4rem]" src={coverURL} alt={name} />
      <div className="flex flex-col ml-4 flex-1 justify-center">
        <span className="text-[#333333] font-bold">{name}</span>
        <div className="flex justify-between">
          <span className="text-gray-700">Chapter {lastChapter}</span>
          <span className="text-sm italic">{formatTimeDiff(lastUpdated, new Date())}</span>
        </div>
        {lastReadChapter && (
          <p className="text-sm italic">Đọc tiếp chapter {lastReadChapter.toLowerCase()}</p>
        )}
      </div>
    </div>
  )
}
