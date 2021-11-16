import type { MangaCardProps } from '@components/MangaCard'
import { SmallMangaCard } from '@components/MangaCard/SmallMangaCard'
import { formatTimeDiff, resolveMangaPath } from '@utils/common'
import React from 'react'
import { Link } from 'react-router-dom'
export type MangaItemProps = MangaCardProps & Pick<Entity.Manga, 'slug' | 'chapters'>
const MangaItem: React.FC<MangaItemProps> = (props) => {
  const { chapterName, lastUpdated, name, coverURL, chapters, /* redirect, */ slug } = props
  return (
    <div className="flex flex-col w-[11rem] mx-auto">
      <Link to={resolveMangaPath(slug)}>
        <SmallMangaCard
          chapterName={chapterName}
          lastUpdated={lastUpdated}
          name={name}
          coverURL={coverURL}
        />
        <div className="mx-2 py-1 font-bold break-words">{name}</div>
      </Link>
      {chapters.map((e) => (
        <div className="pr-2 py-1 mx-2 flex justify-between items-baseline" key={`chapter-${e.id}`}>
          <div className="text-sm leading-3 font-tahoma">
            <Link to={`/truyen-tranh/${slug}/chuong-${e.chapterName}/${e.id}`}>
              Chapter {e.chapterName}
            </Link>
          </div>
          <div className="italic text-xs font-tahoma text-warmGray-300">
            {formatTimeDiff(new Date(e.lastUpdated), new Date())}
          </div>
        </div>
      ))}
    </div>
  )
}

export default MangaItem
