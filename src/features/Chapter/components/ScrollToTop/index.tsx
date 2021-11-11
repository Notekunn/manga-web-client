import React from 'react'
import { FaAngleUp } from 'react-icons/fa'

const index = () => {
  return (
    <div
      className="fixed w-10 h-10 bg-transparent border-gray-300 border-[1px] 
        rounded bottom-3 right-3 flex items-center justify-center"
    >
      <FaAngleUp color="white" size="2rem" />
    </div>
  )
}

export default index
