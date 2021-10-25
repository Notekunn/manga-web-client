import React from 'react'
import { MangaItem, MangaItemProps } from './MangaItem'
export interface MangaListProps {
  items: MangaItemProps[]
  isActive: boolean
}
export const MangaList: React.FC<MangaListProps> = (props) => {
  const { isActive, items } = props
  return (
    <div className={isActive ? 'flex flex-col' : 'hidden'}>
      {items.map((item) => (
        <MangaItem {...item} />
      ))}
    </div>
  )
}
