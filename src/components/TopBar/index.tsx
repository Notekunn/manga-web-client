import React, { useContext } from 'react'
import { HiOutlineSearch } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import appContext from '../../app/context'
export default function TopBar() {
  const context = useContext(appContext)
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
        {context.isLogin && <li className="p-2 flex items-center">Đăng xuất</li>}
        {!context.isLogin && (
          <li className="p-2 flex items-center">
            <Link to={'/auth/login'}>Đăng nhập</Link>
          </li>
        )}
        <li className="p-2 flex items-center">OK</li>
      </ul>
    </div>
  )
}
