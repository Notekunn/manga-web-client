import React, { useState } from 'react'
import { Link } from 'react-router-dom'
export interface DropdownCategoryProps {
  categories: Entity.Category[]
}
export const DropdownCategory: React.FC<DropdownCategoryProps> = React.memo((props) => {
  const { categories } = props
  const [hoverID, setHoverID] = useState(0)
  return (
    <>
      <div className="grid w-[40rem] grid-cols-4" role="none">
        {categories.map((e, i) => (
          <Link to={`/tim-truyen?categories=${e.slug}`}>
            <div
              className="p-2 px-3 cursor-pointer hover:text-red-600"
              key={`category-${i}`}
              onMouseEnter={() => setHoverID(i)}
              onMouseLeave={() => setHoverID(-1)}
            >
              {e.title}
            </div>
          </Link>
        ))}
      </div>
      {hoverID !== -1 && (
        <div className="grid grid-cols-max p border-t-[1px] px-2 break-words line-clamp-3 border-[#E5E5E5]">
          {categories[hoverID]?.description}
        </div>
      )}
    </>
  )
})
