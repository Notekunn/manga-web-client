import React from 'react'
import { AiOutlineClockCircle } from 'react-icons/ai'
export interface MangaCardProps {
  name: string
  chapterName: string
  lastUpdated: Date
  coverURL: string
  className?: string
}
const formatTimeDiff = (start: Date, end: Date): string => {
  const second = Math.floor((end.getTime() - start.getTime()) / 1000)
  if (second < 60) return 'vừa đây'
  const minutes = Math.floor(second / 60)
  if (minutes < 10) return 'vài phút trước'
  if (minutes < 60) return `${minutes} phút trước`
  const hour = Math.floor(minutes / 60)
  if (hour < 24) return `${hour} giờ trước`
  const day = Math.floor(hour / 24)
  if (day < 7) return `${day} ngày trước`
  const week = Math.floor(day / 7)
  if (week < 4) return `${week} tuần trước`
  if (day < 30) return `${day} ngày trước`
  const month = Math.floor(day / 30)
  if (month < 12) return `${month} tháng trước`
  const year = Math.floor(month / 12)
  return `${year} năm trước`
}
export default function MangaCard(props: MangaCardProps) {
  const { name, chapterName, lastUpdated, coverURL, className = '' } = props
  return (
    <div className={`py-4 m-2 ${className}`}>
      <div
        className="bg-white h-16rem w-12rem flex  justify-center items-end mx-auto"
        style={{
          backgroundImage: `url(${coverURL})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
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
      </div>
    </div>
  )
}
