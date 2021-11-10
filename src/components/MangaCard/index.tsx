import React from 'react'
import { cardSize } from '@constants/card'
export type MangaCardProps = Pick<Entity.Manga, 'name' | 'lastUpdated' | 'coverURL'> & {
  chapterName: string
  className?: string
  children?: React.ReactChild
  onClick?: () => void
}
export type ChildMangaCardProps = RemoveProps<MangaCardProps, 'coverURL'>

interface PropSize {
  size: MangaCardSize
}
const MangaCard = React.forwardRef<HTMLDivElement, MangaCardProps & PropSize>((props, ref) => {
  const { coverURL, className = '', size } = props
  return (
    <div className={`py-2 mx-1 ${className}`} onClick={props.onClick} ref={ref}>
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
export const withMangaCard = (
  Component: React.ComponentType<ChildMangaCardProps>,
  sizeCard: MangaCardSize = 'large'
) => {
  return React.memo<MangaCardProps>((props) => {
    return (
      <MangaCard {...props} size={sizeCard}>
        <Component {...props} />
      </MangaCard>
    )
  })
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
