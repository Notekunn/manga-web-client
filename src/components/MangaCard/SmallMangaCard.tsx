import React from 'react'
import { withMangaCard } from '.'
import { BsFillEyeFill } from 'react-icons/bs'
import { FaRegComment } from 'react-icons/fa'

export const SmallMangaCard = withMangaCard((props) => {
  // const { chapterName, name, lastUpdated } = props
  return (
    <div className="w-full p-1 flex-1 bg-opacity-80 bg-gradient-to-t from-gray-500 to-transparent flex justify-start overflow-hidden">
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
}, 'small')
