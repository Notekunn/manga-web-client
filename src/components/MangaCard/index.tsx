import React, { ReactChild } from 'react'
export interface MangaCardProps {
  name: string
  chapterName: string
  lastUpdated: Date
  coverURL: string
  className?: string
  children?: ReactChild
  size?: MangaCardSize
}
export type ChildMangaCardProps = RemoveProps<MangaCardProps, 'coverURL' | 'children' | 'size'>

export const formatTimeDiff = (start: Date, end: Date): string => {
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
function MangaCard(props: MangaCardProps) {
  const { coverURL, className = '', size } = props
  return (
    <div className={`py-4 m-2 ${className}`}>
      <div
        className={`bg-white flex justify-center items-end mx-auto h-${size?.height || '16rem'} w-${
          size?.width || '12rem'
        }`}
        style={{
          backgroundImage: `url(${coverURL})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {props.children}
      </div>
    </div>
  )
}
interface MangaCardSize {
  width?: string
  height?: string
}
export const widthMangaCard = (
  Component: React.ComponentType<ChildMangaCardProps>,
  size?: MangaCardSize
) => {
  class NewMangaCard extends React.Component<MangaCardProps> {
    render() {
      return (
        <MangaCard size={size} {...this.props}>
          <Component {...this.props} />
        </MangaCard>
      )
    }
  }
  return NewMangaCard
}
