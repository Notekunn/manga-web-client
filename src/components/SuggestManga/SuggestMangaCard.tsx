import React from 'react'
import { ChildMangaCardProps, withMangaCardForwardRef } from '../MangaCard'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { formatTimeDiff } from '@utils/common'

export const SuggestMangaCard = withMangaCardForwardRef((props: ChildMangaCardProps) => {
  const { chapterName, name, lastUpdated } = props
  return (
    <div className="w-full p-1 flex-1 bg-opacity-80 bg-gray-700">
      <h3 className="text-white">{name}</h3>
      <div className="flex justify-between items-center">
        <div className="text-white text-sm">Chapter {chapterName}</div>
        <div className="text-white text-sm flex items-center justify-end">
          <div>
            <AiOutlineClockCircle color="white" size="0.8rem" />
          </div>
          <div className="italic ">{formatTimeDiff(lastUpdated, new Date())}</div>
        </div>
      </div>
    </div>
  )
})
