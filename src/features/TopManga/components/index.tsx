import React, { useState } from 'react'
import { TOP_ONE, TOP_THREE, TOP_TWO } from '../../../constants/TopManga'
import { TopMangaHeader } from './Header'
import type { MangaItemProps } from './MangaItem'
import { MangaList } from './MangaList'
export interface TopMangaProps {}

export const TopManga: React.FC<TopMangaProps> = (props) => {
  const [activeTab, setActiveTab] = useState<number>(1)
  return (
    <div className="p-2 flex flex-col">
      <TopMangaHeader activeId={activeTab} changeActiveTab={setActiveTab} />
      <MangaList items={TOP_ONE} isActive={activeTab === 1} />
      <MangaList items={TOP_TWO} isActive={activeTab === 2} />
      <MangaList items={TOP_THREE} isActive={activeTab === 3} />
    </div>
  )
}
