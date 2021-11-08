import { makeArray } from '@utils/common'
import React, { useState } from 'react'
import {
  FaHome,
  FaListUl,
  FaAngleLeft,
  FaAngleRight,
  FaUserPlus,
  FaUserMinus,
} from 'react-icons/fa'
export interface ChapterNavBarProps {
  state: 'FIXED' | 'HIDE' | 'STATIC'
}
interface ListStyle {
  [key: string]: React.CSSProperties
}
const styles: ListStyle = {
  STATIC: {
    position: 'static',
    top: 'auto',
  },
  FIXED: {
    position: 'fixed',
    top: '0px',
  },
  HIDE: {
    display: 'none',
  },
}

const ChapterNavBar = React.forwardRef<HTMLHeadingElement, ChapterNavBarProps>((props, ref) => {
  const [following, setFollowing] = useState(false)
  return (
    <div
      className="bg-gray-100 w-full flex justify-center items-center py-2"
      style={styles[props.state]}
      ref={ref}
    >
      <div className="mx-1">
        <FaHome color="#AE4AD9" size="1.5em" />
      </div>
      <div className="mx-1">
        <FaListUl color="#AE4AD9" size="1.5em" />
      </div>
      <div className="p-1 mx-1 rounded-md bg-[#61B736]">
        <FaAngleLeft size="1.5em" color="white" />
      </div>
      <select
        id="country"
        name="country"
        className="mx-1 py-[6px] md:w-1/4 sm:flex-shrink-0 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      >
        {makeArray(100).map((e) => (
          <option>Chapter {101 - e}</option>
        ))}
      </select>
      <div className="p-1 mx-1 rounded-md bg-[#61B736]">
        <FaAngleRight size="1.5em" color="white" />
      </div>{' '}
      <button
        className="py-1 px-2 mx-1 rounded-md text-white flex items-center"
        onClick={() => setFollowing(!following)}
        style={{
          backgroundColor: !following ? 'rgba(22, 163, 74)' : 'rgba(220, 38, 38)',
        }}
      >
        <div className="mr-1">
          {following ? <FaUserMinus color="white" /> : <FaUserPlus color="white" />}
        </div>
        {following ? 'Bỏ theo dõi' : 'Theo dõi'}
      </button>
    </div>
  )
})
export default ChapterNavBar
