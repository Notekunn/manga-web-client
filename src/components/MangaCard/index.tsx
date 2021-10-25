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
