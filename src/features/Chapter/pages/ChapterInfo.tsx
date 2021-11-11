import { makeArray } from '@utils/common'
import React, { useLayoutEffect, useRef, useState } from 'react'
import { FaInfoCircle } from 'react-icons/fa'
import { useHistory, useParams } from 'react-router'
import { Link } from 'react-router-dom'
import ChapterNavBar from '../components/ChapterNavBar'
import { FETCH_INFO_CHAPTER, ChapterInfoData, ChapterInfoVariable } from '../action'
import { useQuery } from '@apollo/client'
import { Loading } from '@components/Loading'
interface RouteParameter {
  slug: string
  chapterName: string
  chapterId: string
}

const ChapterInfo: React.FC<{}> = () => {
  const history = useHistory()
  const { slug, chapterName, chapterId } = useParams<RouteParameter>()

  const { data, loading, error } = useQuery<ChapterInfoData, ChapterInfoVariable>(
    FETCH_INFO_CHAPTER,
    {
      variables: {
        chapterId: parseInt(chapterId),
      },
    }
  )
  if (loading) return <Loading />
  if (error || !data) {
    history.replace('/')
    return null
  }
  const { chapter } = data
  if (!chapter || chapter.chapterName !== chapterName || chapter.manga.slug !== slug) {
    return null
  }
  return (
    <>
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
        <ChapterNavBar
          currentChapter={{
            chapterName: chapter.chapterName,
            id: chapter.id,
          }}
          listChapterName={makeArray(100).map((e) => `${e}`)}
          prevChapter={chapter.prevChapter}
          nextChapter={chapter.nextChapter}
        />
        AAAAAAAAAAAAAAAAAAAAAAAAAAA
      </div>
    </>
  )
}
export default ChapterInfo
