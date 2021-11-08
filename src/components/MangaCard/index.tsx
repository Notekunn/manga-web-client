import React, { ReactChild } from 'react'
import { cardSize } from '@constants/card'
export interface MangaCardProps {
  name: string
  chapterName: string
  lastUpdated: Date
  coverURL: string
  className?: string
  children?: ReactChild
  onClick?: () => void
}
export type ChildMangaCardProps = RemoveProps<MangaCardProps, 'coverURL' | 'children'>

interface PropSize {
  size: MangaCardSize
}
const MangaCard = React.forwardRef<HTMLDivElement, MangaCardProps & PropSize>((props, ref) => {
  const { coverURL, className = '', size } = props
  return (
    <div
      className={`py-4 mr-4 last:mr-0 flex-shrink-0 ${className}`}
      onClick={props.onClick}
      ref={ref}
    >
      <div
        className="bg-white flex justify-center items-end mx-auto"
        style={{
          backgroundImage: `url(${coverURL})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: cardSize[size][1] + 'rem',
          width: cardSize[size][0] + 'rem',
        }}
      >
        {props.children}
      </div>
    </div>
  )
})
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

export const withMangaCardForwardRef = (
  Component: React.FC<ChildMangaCardProps>,
  sizeCard: MangaCardSize = 'large'
) => {
  return React.forwardRef<HTMLDivElement, MangaCardProps>((props: MangaCardProps, ref) => {
    return (
      <MangaCard {...props} size={sizeCard} ref={ref}>
        <Component {...props} />
      </MangaCard>
    )
  })
}
