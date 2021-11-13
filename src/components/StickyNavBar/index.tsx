import React from 'react'
import { useQuery } from '@apollo/client'
import { FaCheck, FaEye, FaHistory, FaHome, FaRedo, FaTags, FaThumbsUp } from 'react-icons/fa'
import { DropdownCategory } from './DropdownCategory'
import { NavDropDownItem } from './NavDropDownItem'
import { NavItem } from './NavItem'
import { CategoryFeedData, FETCH_ALL_CATEGORIES } from '@features/Category/action'
import { Link } from 'react-router-dom'
export const StickyNavBar = () => {
  const { data, error } = useQuery<CategoryFeedData>(FETCH_ALL_CATEGORIES)
  return (
    <div className="w-full bg-custom-nav sticky top-0 z-10">
      <div className="w-4/5 mx-auto flex items-stretch pl-4 justify-start align-middle">
        <div className="hover:bg-trueGray-50 h-10 w-10 flex items-center justify-center">
          <Link to="/">
            <FaHome size="1.2rem" color="#AE4AD9" />
          </Link>
        </div>
        <NavItem>Hot</NavItem>
        <NavItem>Theo dõi</NavItem>
        <NavItem AfterIcon={FaHistory}>Lịch sử</NavItem>
        <NavDropDownItem title="Thể loại" BeforeIcon={FaTags}>
          <DropdownCategory categories={error ? [] : data?.categories || []} />
        </NavDropDownItem>
        <NavDropDownItem title="Xếp hạng">
          <div className="grid w-[20rem] grid-cols-2 grid-rows-4 grid-flow-col" role="none">
            <div className="px-2 py-1 hover:bg-trueGray-50 text-custom-gray hover:text-custom-purple flex items-center">
              <FaEye size="1rem" className="mr-1" />
              <span className="inline-block">Top ngày</span>
            </div>
            <div className="px-2 py-1 hover:bg-trueGray-50 text-custom-gray hover:text-custom-purple flex items-center">
              <FaEye size="1rem" className="mr-1" />
              <span className="inline-block">Top tuần</span>
            </div>
            <div className="px-2 py-1 hover:bg-trueGray-50 text-custom-gray hover:text-custom-purple flex items-center">
              <FaEye size="1rem" className="mr-1" />
              <span className="inline-block">Top tháng</span>
            </div>
            <div className="px-2 py-1 hover:bg-trueGray-50 text-custom-gray hover:text-custom-purple flex items-center">
              <FaEye size="1rem" className="mr-1" />
              <span className="inline-block">Top all</span>
            </div>
            <div className="px-2 py-1 hover:bg-trueGray-50 text-custom-gray hover:text-custom-purple flex items-center">
              <FaRedo size="1rem" className="mr-1" />
              <span className="inline-block">Mới cập nhật</span>
            </div>
            <div className="px-2 py-1 hover:bg-trueGray-50 text-custom-gray hover:text-custom-purple flex items-center">
              <FaCheck size="1rem" className="mr-1" />
              <span className="inline-block">Đã hoàn thành</span>
            </div>
            <div className="px-2 py-1 hover:bg-trueGray-50 text-custom-gray hover:text-custom-purple flex items-center">
              <FaThumbsUp size="1rem" className="mr-1" />
              <span className="inline-block">Yêu thích</span>
            </div>
          </div>
        </NavDropDownItem>

        <NavItem>Yêu cầu truyện</NavItem>
      </div>
    </div>
  )
}
