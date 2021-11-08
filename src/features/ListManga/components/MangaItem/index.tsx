import type { MangaCardProps } from '@components/MangaCard'
import { SmallMangaCard } from '@components/MangaCard/SmallMangaCard'
import { formatTimeDiff, resolveChapterPath, resolveMangaPath } from '@utils/common'
import React from 'react'
import { Link } from 'react-router-dom'
export interface MangaItemProps extends MangaCardProps {
  chapters: Chapter[]
  // redirect: (path: string) => void
  slug: string
}
const MangaItem: React.FC<MangaItemProps> = (props) => {
  const { chapterName, lastUpdated, name, coverURL, chapters, /* redirect, */ slug } = props
  return (
    <div
      className="flex flex-col"
      style={{
        width: '11rem',
      }}
    >
      <Link to={resolveMangaPath(slug)}>
        <SmallMangaCard
          chapterName={chapterName}
          lastUpdated={lastUpdated}
          name={name}
          coverURL={coverURL}
          // onClick={() => redirect(resolveMangaPath(slug))}
        />
        <div className="mx-2 py-2 font-bold break-words">{name}</div>
      </Link>
      {chapters.map((e) => (
        <div className="pr-2 py-1 mx-2 flex justify-between items-baseline">
          <div
            className="text-sm leading-3 font-tahoma"
            // onClick={() => redirect(resolveChapterPath(slug, chapterName))}
          >
            <Link to={resolveChapterPath(slug, chapterName)}>Chapter {e.chapterName}</Link>
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
