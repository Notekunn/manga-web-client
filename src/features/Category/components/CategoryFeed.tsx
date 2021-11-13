import React from 'react'
import { useQuery } from '@apollo/client'
import { CategoryFeedData, FETCH_ALL_CATEGORIES } from '../action'

export const CategoryFeed = () => {
  const { data } = useQuery<CategoryFeedData>(FETCH_ALL_CATEGORIES)
  return (
    <div className="flex flex-col flex-shrink-0 border-gray-300 border-1 mx-4 mt-2 mb-6 px-2">
      <div className="font-tahoma text-[#2980b9] font-bold px-[5px] py-[10px]">Thể loại</div>
      <div className="border-trueGray-200 border-t-1 text-custom-purple px-[5px] py-[10px]">
        Tất cả thể loại
      </div>
      <div className="grid grid-cols-2">
        {data?.categories?.map((e) => (
          <div className="border-trueGray-200 border-t-1 px-[5px] py-[10px]">{e.title}</div>
        ))}
      </div>
    </div>
  )
}
