import React from 'react'
import { widthMangaCard } from '../MangaCard'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { formatTimeDiff } from '@utils/common'
import './SuggestMangaCard.css'

export const SuggestMangaCard = widthMangaCard((props) => {
  const { chapterName, name, lastUpdated } = props
  return (
    <div className="card fade-in">
      <h3 className="text-white text-md">{name}</h3>
      <div className="flex justify-between items-center">
        <div className="text-white text-sm">Chapter {chapterName}</div>
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
