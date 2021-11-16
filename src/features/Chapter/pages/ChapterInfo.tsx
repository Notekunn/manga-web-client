import React, { useEffect } from 'react'
import { FaInfoCircle } from 'react-icons/fa'
import { useNavigate, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import ChapterNavBar from '../components/ChapterNavBar'
import ScrollToTop from '../components/ScrollToTop'
import { Loading } from '@components/Loading'
import { GET_CHAPTER_INFO, ChapterInfoData, ChapterInfoVariable } from '../action'
import { useQuery } from '@apollo/client'
import { Breadcrumb } from '@components/Breadcrumb'
import { createBreadcrumbChapter } from '@utils/common'
import { useViewChapter } from '@hook/useViewChapter'

const ChapterInfo: React.FC<{}> = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const navigate = useNavigate()
  const {
    slug = '',
    chapterName,
    chapterId = 0,
  } = useParams<'slug' | 'chapterName' | 'chapterId'>()
  const [updateView] = useViewChapter(chapterId)

  const { data, loading, error } = useQuery<ChapterInfoData, ChapterInfoVariable>(
    GET_CHAPTER_INFO,
    {
      variables: {
        chapterId: parseInt(chapterId || '0'),
      },
    }
  )
  useEffect(() => {
    updateView()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (loading) return <Loading />
  if (error || !data) {
    // navigate('/')
    return null
  }
  const { chapter } = data
  if (!chapter || chapter.chapterName !== chapterName) return null

  const manga = chapter.manga
  if (manga.slug !== slug) return null
  const breadcrumbItems = createBreadcrumbChapter(manga.name, manga.slug, chapter.chapterName)

  return (
    <>
      <div className="bg-white w-4/5 mx-auto min-h-screen h-[1000vh]">
        <Breadcrumb items={breadcrumbItems} />
        <div className="flex items-baseline">
          <h1 className="p-2 pt-0 font-tahoma font-medium text-xl">
            <Link to={'#'} className=" text-[#288AD6]">
              {manga.name}
            </Link>
            <span> - Chương {chapterName}</span>
          </h1>
          <i className="text-trueGray-600 text-sm italic">[Cập nhật lúc: 18:48 08/11/2021]</i>
        </div>
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
            <span className="italic text-cyan-700 leading-4 font-tahoma">
              Sử dụng mũi tên trái (←) hoặc phải (→) để chuyển chapter
            </span>
          </div>
        </div>
        <ChapterNavBar
          slug={slug}
          currentChapter={{
            chapterName: chapter.chapterName,
            id: chapter.id,
          }}
          listChapter={chapter.manga.chapters}
          prevChapter={chapter.prevChapter}
          nextChapter={chapter.nextChapter}
        />
      </div>
      <ScrollToTop />
    </>
  )
}
export default ChapterInfo
