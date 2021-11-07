import React from 'react'
import { formatTimeDiff } from '@utils/common'
export interface SubscribeMangaItemProps
  extends Pick<Manga, 'name' | 'coverURL' | 'lastChapter' | 'lastReadChapter' | 'lastUpdated'> {}
export const SubscribeMangaItem: React.FC<SubscribeMangaItemProps> = (props) => {
  const { name, coverURL, lastChapter, lastReadChapter, lastUpdated } = props
  return (
    <div
      className="flex border-b-[1px] p-2 border-solid border-gray-400 items-center"
      style={{
        borderBottomWidth: '1px',
      }}
    >
      <img className="h-[4.5rem] w-[4.5rem]" src={coverURL} alt={name} />
      <div className="flex flex-col ml-4 flex-1 justify-center">
        <span className="text-black font-bold">{name}</span>
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
