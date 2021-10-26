import React from 'react'

export const LabelTag: React.FC<{
  onClick?: () => any
}> = (props) => {
  return (
    <span
      onClick={props.onClick || (() => {})}
      className="text-xs font-semibold inline-block py-1 px-2 rounded-lg text-teal-600 bg-teal-200 uppercase mb-1 last:mr-0 mr-1"
    >
      {props.children}
    </span>
  )
}
