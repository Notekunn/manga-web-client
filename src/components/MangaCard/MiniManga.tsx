import React from 'react'
import { formatTimeDiff, widthMangaCard } from '.'
import { BsFillEyeFill } from 'react-icons/bs'
import { FaRegComment } from 'react-icons/fa'

export const MiniManga = widthMangaCard(
  (props) => {
    const { chapterName, name, lastUpdated } = props
    return (
      <div className="w-full p-1 flex-1 bg-opacity-80 bg-gray-700 flex justify-start overflow-hidden">
        <div className="opacity-80">
          <BsFillEyeFill color="white" />
        </div>
        <span className="text-white text-xs opacity-80 mr-1">1.233.222</span>
        <div className="opacity-80">
          <FaRegComment color="white" />
        </div>
        <span className="text-white text-xs opacity-80 mr-1">1.233</span>
      </div>
    )
  },
  { width: '10rem', height: '12.5rem' }
)

// export const MiniManga = widthMangaCard(
//   (props) => {
//     return <div></div>
//   },
//   { width: '10em', height: '16em' }
// )
