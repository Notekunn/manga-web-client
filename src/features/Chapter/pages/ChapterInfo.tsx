import React, { useLayoutEffect, useRef, useState } from 'react'
import { FaInfoCircle } from 'react-icons/fa'
import { /* useHistory, */ useParams } from 'react-router'
import { Link } from 'react-router-dom'
import ChapterNavBar from '../components/ChapterNavBar'
interface RouteParameter {
  slug: string
  chapterName: string
}

const ChapterInfo: React.FC<{}> = () => {
  // const history = useHistory()
  const { /* slug, */ chapterName } = useParams<RouteParameter>()
  const [navShowing, setNavShowing] = useState(false)
  const ref = useRef<HTMLHeadingElement>(null)
  // const onClick = () => {
  //   history.push('./')
  // }
  useLayoutEffect(() => {
    const onScroll = () => {
      const navPosition = ref.current?.getBoundingClientRect().top || Number.NEGATIVE_INFINITY
      if (navPosition <= 0) {
        console.log('Show nav')
        setNavShowing(true)
      } else {
        console.log('Hide nav')
        setNavShowing(false)
      }
    }

    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <>
      <ChapterNavBar state={navShowing ? 'FIXED' : 'HIDE'} />
      <div className="bg-white w-4/5 mx-auto min-h-screen h-[1000vh]">
        <nav className="bg-grey-light rounded font-sans w-full p-3">
          <ol className="flex text-lightBlue-500">
            <li>
              <Link to={'/'}>Trang chủ</Link>
            </li>
            <li>
              <span className="mx-2">/</span>
            </li>
            <li>
              <Link to={'/the-loai'}>Thể loại</Link>
            </li>
            <li>
              <span className="mx-2">/</span>
            </li>
            <li>
              <Link to={'#'}>Bảy viên ngọc rồng</Link>
            </li>{' '}
            <li>
              <span className="mx-2">/</span>
            </li>
            <li>
              <Link to={'#'}>Chapter {chapterName}</Link>
            </li>
          </ol>
        </nav>
        <div className="bg-gray-100">
          <div className="text-center">
            <div>Nếu không xem được truyện vui lòng đổi "SERVER ẢNH" bên dưới</div>
            <button className="bg-orange-400 rounded-md px-1 py-[5px] mx-1 text-gray-100">
              Server 1
            </button>
            <button className="bg-cyan-600 rounded-md px-1 py-[5px] mx-1 text-gray-100">
              Server 2
            </button>
            <button className="bg-cyan-600 rounded-md px-1 py-[5px] mx-1 text-gray-100">
              Server 3
            </button>
          </div>
          <div className="flex p-4 mt-3 items-center justify-center bg-blue-100 border-lightBlue-200 border border-solid">
            <div className="mx-1">
              <FaInfoCircle color="#31708f" />
            </div>
            <span className="italic text-cyan-700 leading-4" style={{ fontFamily: 'Tahoma' }}>
              Sử dụng mũi tên trái (←) hoặc phải (→) để chuyển chapter
            </span>
          </div>
        </div>
        <ChapterNavBar state="STATIC" ref={ref} />
      </div>
    </>
  )
}
export default ChapterInfo
