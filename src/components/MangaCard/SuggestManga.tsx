import React from 'react'
import { formatTimeDiff, widthMangaCard } from '.'
import { AiOutlineClockCircle } from 'react-icons/ai'

export const SuggestManga = widthMangaCard((props) => {
  const { chapterName, name, lastUpdated } = props
  return (
    <div className="w-full p-1 flex-1 bg-opacity-80 bg-gray-700">
      <h3 className="text-white text-md">{name}</h3>
      <div className="flex justify-between items-center">
        <div className="text-white text-sm">{chapterName}</div>
        <div className="text-white text-sm flex items-center justify-end">
          <div>
            <AiOutlineClockCircle color="white" className="min-w-full" />
          </div>
          <span>{formatTimeDiff(lastUpdated, new Date())}</span>
        </div>
      </div>
    </div>
  )
})
