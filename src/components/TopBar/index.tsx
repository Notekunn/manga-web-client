import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import { CheckLoginData, CHECK_LOGIN, logout } from '@features/Auth/action'
import BGHeader from '../../assets/bg_header.png'
export default function TopBar() {
  const { data, loading, refetch } = useQuery<CheckLoginData>(CHECK_LOGIN)
  if (loading || !data) return null
  const { isLoggedIn } = data
  return (
    <div
      className="flex w-full justify-between align-center text-white text-sm"
      style={{
        background: `url(${BGHeader})`,
        backgroundPosition: 'center',
      }}
    >
      <ul className="flex justify-between px-2 items-center list-none">
        <li className="px-2 flex items-baseline">Trang chủ</li>
        <li className="px-2 flex items-baseline">Theo dõi</li>
      </ul>
      <div className="flex items-center justify-center relative">
        <div className="rounded-full my-1 bg-white text-sm flex w-full">
          <input
            type="text"
            placeholder="Tìm kiếm truyện..."
            className="w-40 md:w-80 px-4 py-1 rounded-l-full border-0 focus:ring-0 text-black text-sm"
          />
          <button className="rounded-full border w-8 h-8 bg-red-600">
            <FaSearch size="1rem" color="white" className="mx-auto" />
          </button>
        </div>
        <div className="absolute hidden top-10 z-50 text-red-400 w-40 md:w-[25rem] bg-white border border-black">
          <div>ALO 1234</div>
          <div>ALO 1234</div>
          <div>ALO 1234</div>
          <div>ALO 1234</div>
          <div>ALO 1234</div>
          <div>ALO 1234</div>
          <div>ALO 1234</div>
          <div>ALO 1234</div>
          <div>ALO 1234</div>
          <div>ALO 1234</div>
          <div>ALO 1234</div>
          <div>ALO 1234</div>
          <div>ALO 1234</div>
        </div>
      </div>
      <ul className="flex justify-between px-2 mx-2 align-baseline list-none">
        {isLoggedIn && (
          <li
            className="p-2 flex items-center cursor-pointer"
            onClick={() => {
              logout()
              refetch()
            }}
          >
            Đăng xuất
          </li>
        )}
        {!isLoggedIn && (
          <li className="p-2 flex items-center">
            <Link to={'/auth/login'}>Đăng nhập</Link>
          </li>
        )}
        <li className="p-2 flex items-center">OK</li>
      </ul>
    </div>
  )
}
