import React from 'react'
import { HiOutlineSearch } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import { CheckLoginData, CHECK_LOGIN, logout } from '@features/Auth/action'
export default function TopBar() {
  const { data, loading, refetch } = useQuery<CheckLoginData>(CHECK_LOGIN)
  if (loading || !data) return null
  const { isLoggedIn } = data
  return (
    <div className="flex w-full bg-rose-500 justify-between align-center">
      <ul className="flex justify-between p-2 align-baseline list-none">
        <li className="p-2 flex items-baseline">Trang chủ</li>
        <li className="p-2 flex items-baseline">Theo dõi</li>
      </ul>
      <div className="flex items-center justify-center">
        <div className="border-1 my-2 border-red-500 rounded-md bg-white flex w-full">
          <input
            type="text"
            placeholder="Tìm kiếm truyện"
            className="w-full px-4 rounded-l-md border-0"
          />
          <button className="rounded-r-lg px-4">
            <HiOutlineSearch />
          </button>
        </div>
      </div>
      <ul className="flex justify-between p-2 mx-2 align-baseline list-none">
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
