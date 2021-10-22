import React, { ReactChild } from 'react'
export interface MangaCardProps {
  name: string
  chapterName: string
  lastUpdated: Date
  coverURL: string
  className?: string
  children?: ReactChild
}
export type ChildMangaCardProps = RemoveProps<MangaCardProps, 'coverURL' | 'children'>

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
interface PropSize {
  size: MangaCardSize
}
function MangaCard(props: MangaCardProps & PropSize) {
  const { coverURL, className = '', size } = props
  return (
    <div className={`py-4 m-2 ${className}`}>
      <div
        className="bg-white flex justify-center items-end mx-auto"
        style={{
          backgroundImage: `url(${coverURL})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: size === 'large' ? '16rem' : '12.5rem',
          width: size === 'large' ? '12rem' : '10rem',
        }}
      >
        {props.children}
      </div>
    </div>
  )
}
type MangaCardSize = 'large' | 'small'
export const widthMangaCard = (
  Component: React.ComponentType<ChildMangaCardProps>,
  sizeCard: MangaCardSize = 'large'
) => {
  class NewMangaCard extends React.Component<MangaCardProps> {
    render() {
      return (
        <MangaCard {...this.props} size={sizeCard}>
          <Component {...this.props} />
        </MangaCard>
      )
    }
  }
  return NewMangaCard
}
