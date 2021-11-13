import React from 'react'
export interface CategoryFeedProps {
  items: Entity.Category[]
}
export const CategoryFeed: React.FC<CategoryFeedProps> = (props) => {
  return (
    <div className="hidden sm:flex flex-col min-w-[320px] flex-shrink-0 border-gray-300 border-1 mx-4 mt-2 mb-6 px-2">
      <div className="font-tahoma text-[#2980b9] font-bold px-[5px] py-[10px]">Thể loại</div>
      <div className="border-trueGray-200 border-t-1 text-custom-purple px-[5px] py-[10px]">
        Tất cả thể loại
      </div>
      <div className="grid grid-cols-2">
        {props.items.map((e, i) => (
          <div
            className="border-trueGray-200 border-t-1 px-[5px] py-[10px] hover:text-red-600 cursor-pointer"
            key={`category-${i}`}
          >
            {e.title}
          </div>
        ))}
      </div>
    </div>
  )
}
