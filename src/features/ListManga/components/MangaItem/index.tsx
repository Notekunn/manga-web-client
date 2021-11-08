import type { MangaCardProps } from '@components/MangaCard'
import { SmallMangaCard } from '@components/MangaCard/SmallMangaCard'
import React from 'react'
export interface MangaItemProps extends MangaCardProps {}
const MangaItem: React.FC<MangaItemProps> = (props) => {
  const { chapterName, lastUpdated, name, onClick, coverURL } = props
  return (
    <div
      className="flex flex-col"
      style={{
        width: '11rem',
      }}
    >
      <SmallMangaCard
        chapterName={chapterName}
        lastUpdated={lastUpdated}
        name={name}
        coverURL={coverURL}
      />
      <div className="mx-2 font-bold break-all">{name}</div>
      <div className="pr-2 py-1 mx-2 flex justify-between items-baseline">
        <div className="text-sm leading-3 font-tahoma">Chapter 123</div>
        <div className="italic text-xs font-tahoma text-warmGray-300">7 giờ trước</div>
      </div>
    </div>
  )
}

export default MangaItem
