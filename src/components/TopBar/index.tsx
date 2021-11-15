import React, { useEffect, useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import { CheckLoginData, CHECK_LOGIN, logout } from '@features/Auth/action'
import { useNavigate } from 'react-router-dom'
import { useLiveSearch } from '../../hook/useLiveSearch'
import BGHeader from '../../assets/bg_header.png'

interface SearchItemProps {
  name: string
  otherName?: string
  chapterName: string
  categories: string
}
const SearchItem: React.FC<SearchItemProps> = ({ name, otherName, chapterName, categories }) => {
  return (
    <div className="w-full flex p-1 border-t border-b cursor-pointer ">
      <img
        src="http://st.imageinstant.net/data/comics/189/aharen-san-wa-hakarenai.jpg"
        alt=""
        className="w-[50px] h-[50px] flex-shrink-0"
      />
      <div className="flex-grow-0">
        <div className="font-bold line-clamp-1 break-all">{name}</div>
        {otherName && <div className="italic text-xs break-all line-clamp-1">{otherName}</div>}
        <div className="italic text-xs">Chapter {chapterName}</div>
        <div className="italic text-xs break-all line-clamp-1">{categories}</div>
      </div>
    </div>
  )
}
export function TopBar() {
  const [setKeyword, { mangas }] = useLiveSearch()
  const [txt, setTxt] = useState<string>('')
  const navigate = useNavigate()
  const [showLiveSearch, setShowLiveSearch] = useState(false)
  const { data, loading, refetch } = useQuery<CheckLoginData>(CHECK_LOGIN)
  useEffect(() => {
    setKeyword(txt)
    return () => {}
  }, [txt, setKeyword])

  if (loading || !data) return null
  const { isLoggedIn } = data
  return (
    <div
      className="flex w-full justify-between align-center text-white font-tahoma text-sm"
      style={{
        background: `url(${BGHeader})`,
        backgroundPosition: 'center',
      }}
    >
      <ul className="flex justify-between px-2 items-center list-none">
        <li className="px-2 flex items-baseline">Trang chủ</li>
        <li className="px-2 flex items-baseline">Theo dõi</li>
      </ul>
      <div
        className="flex items-center justify-center relative"
        onBlur={() => setShowLiveSearch(false)}
      >
        <div className="rounded-full my-1 bg-white text-sm flex w-full">
          <input
            type="text"
            placeholder="Tìm kiếm truyện..."
            className="w-40 md:w-80 px-4 py-1 rounded-l-full border-0 focus:ring-0 text-black text-sm"
            onFocus={() => setShowLiveSearch(true)}
            value={txt}
            onChange={(event) => setTxt(event.target.value)}
          />
          <button
            className="rounded-full border w-8 h-8 bg-red-600"
            onClick={() => navigate('/tim-truyen')}
          >
            <FaSearch size="1rem" color="white" className="mx-auto" />
          </button>
        </div>
        <div
          className="absolute top-10 z-50 max-h-[20rem] overflow-y-scroll w-40 md:w-[25rem] text-custom-gray bg-white border"
          style={{
            display: showLiveSearch ? 'block' : 'none',
          }}
        >
          {mangas.map((e) => (
            <SearchItem
              name={e.name}
              otherName={e.otherName}
              chapterName={e.lastChapter?.chapterName || ''}
              categories={e.categories.map((e) => e.title).join(',')}
              key={`search-item-${e.id}`}
            />
          ))}
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
