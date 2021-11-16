import { useSubscribeManga } from '@hook/useSubscribeManga'
import React from 'react'
import {
  FaHome,
  FaListUl,
  FaAngleLeft,
  FaAngleRight,
  FaUserPlus,
  FaUserMinus,
} from 'react-icons/fa'
import { Link } from 'react-router-dom'

export interface ChapterNavBarProps {
  slug: string
  listChapter: Entity.ChapterLink[]
  currentChapter: Entity.ChapterLink
  prevChapter?: Entity.ChapterLink
  nextChapter?: Entity.ChapterLink
}

const ChapterNavBar = React.memo<ChapterNavBarProps>((props, ref) => {
  const { currentChapter, listChapter, prevChapter, nextChapter } = props

  const [subscribed, subscribeManga] = useSubscribeManga(props.slug)
  return (
    <div className="bg-gray-100 w-auto flex justify-center items-center py-2 sticky top-0 left-0 z-50">
      <div className="mx-1">
        <Link to="/">
          <FaHome color="#AE4AD9" size="1.5em" />
        </Link>
      </div>
      <div className="mx-1">
        <Link to="../#list-chapter">
          <FaListUl color="#AE4AD9" size="1.5em" />
        </Link>
      </div>
      {prevChapter && (
        <div className="p-1 mx-1 rounded-md bg-[#61B736]">
          <Link to={`../chuong-${prevChapter.chapterName}/${prevChapter.id}`}>
            <FaAngleLeft size="1.5em" color="white" />
          </Link>
        </div>
      )}
      <select
        id="chapter"
        name="chapter"
        value={currentChapter.id}
        className="mx-1 py-[6px] md:w-1/4 sm:flex-shrink-0 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      >
        {listChapter.map((e) => (
          <option value={e.id}>Chapter {e.chapterName}</option>
        ))}
      </select>
      {nextChapter && (
        <div className="p-1 mx-1 rounded-md bg-[#61B736]">
          <Link to={`../chuong-${nextChapter.chapterName}/${nextChapter.id}`}>
            <FaAngleRight size="1.5em" color="white" />
          </Link>
        </div>
      )}
      <button
        className="py-1 px-2 mx-1 rounded-md text-white flex items-center"
        onClick={() => subscribeManga(subscribed)}
        style={{
          backgroundColor: !subscribed ? 'rgba(22, 163, 74)' : 'rgba(220, 38, 38)',
        }}
      >
        <div className="mr-1">
          {subscribed ? <FaUserMinus color="white" /> : <FaUserPlus color="white" />}
        </div>
        {subscribed ? 'Bỏ theo dõi' : 'Theo dõi'}
      </button>
    </div>
  )
}) /* ,
  (prev, next) => {
    return prev.currentChapter !== next.currentChapter || prev.state !== next.state
  } */

export default ChapterNavBar
