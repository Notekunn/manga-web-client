import React from 'react'
import './Header.css'
export interface TopMangaHeaderProps {
  activeId: number
  changeActiveTab: (id: number) => void
}
export const TopMangaHeader: React.FC<TopMangaHeaderProps> = (props) => {
  const { activeId, changeActiveTab } = props
  return (
    <ul className="flex">
      <li
        className={activeId === 1 ? 'py-2 px-6 active-tab' : 'py-2 px-6 disabled-tab'}
        onClick={() => changeActiveTab(1)}
      >
        Top Ngày
      </li>
      <li
        className={activeId === 2 ? 'py-2 px-6 active-tab' : 'py-2 px-6 disabled-tab'}
        onClick={() => changeActiveTab(2)}
      >
        Top Tuần
      </li>
      <li
        className={activeId === 3 ? 'py-2 px-6 active-tab' : 'py-2 px-6 disabled-tab'}
        onClick={() => changeActiveTab(3)}
      >
        Top Tháng
      </li>
    </ul>
  )
}
