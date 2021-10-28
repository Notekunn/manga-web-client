import React from 'react'
import { useParams, useHistory } from 'react-router'
import { Link } from 'react-router-dom'
import { LabelTag } from '../../../components/LabelTag'
import { FaUser, FaRss, FaTags, FaEye, FaHeart, FaListUl } from 'react-icons/fa'
import { FiFileText } from 'react-icons/fi'
import { useQuery } from '@apollo/client'
import { MangaInfoData, MangaInfoVariables, fetchMangaInfo } from '../action'
import { Loading } from '../../../components/Loading'
import { TopManga } from '../../TopManga/components'
interface RouteParameter {
  slug: string
}
export default function MangaInfo() {
  const history = useHistory()
  const { slug } = useParams<RouteParameter>()
  const { data, loading } = useQuery<MangaInfoData, MangaInfoVariables>(fetchMangaInfo, {
    variables: {
      slug,
    },
  })

  if (loading) return <Loading />
  if (!data?.manga) {
    history.goBack()
    return null
  }
  const {
    manga: {
      artist,
      categories,
      chapters,
      coverURL,
      groups,
      lastUpdated,
      name,
      viewCount,
      description,
      status,
    },
  } = data
  return (
    <div className="w-4/5 mx-auto bg-white">
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
            <Link to={'#'}>{name}</Link>
          </li>
        </ol>
      </nav>
      <div className="flex">
        <div>
          <h1 className="text-center text-2xl">{name}</h1>
          <div className="italic text-center">[Cập nhật lúc: {lastUpdated}]</div>
          <div className="flex mx-2">
            <div className="p-5">
              <img src={coverURL} alt={name} />
            </div>
            <div className="p-5">
              <dl>
                <div className="grid mb-2 grid-cols-[1fr,3fr] gap-2">
                  <dt className="flex items-baseline">
                    <div className="mr-1">
                      <FaUser />
                    </div>
                    <div>Tác giả</div>
                  </dt>
                  <dd>{artist.name}</dd>
                </div>
                <div className="grid mb-2 grid-cols-[1fr,3fr] gap-2">
                  <dt className="flex items-baseline">
                    <div className="mr-1">
                      <FaRss />
                    </div>
                    <div>Tình trạng</div>
                  </dt>
                  <dd>{status}</dd>
                </div>
                <div className="grid mb-2 grid-cols-[1fr,3fr] gap-2">
                  <dt className="flex items-center">
                    <div className="mr-1">
                      <FaTags />
                    </div>
                    <div>Thể loại</div>
                  </dt>
                  <dd className="flex flex-wrap justify-start content-between">
                    {categories.map((e) => (
                      <LabelTag onClick={() => history.push(`/the-loai/${e.slug}`)}>
                        {e.title}
                      </LabelTag>
                    ))}
                  </dd>
                </div>
                <div className="grid mb-2 grid-cols-[1fr,3fr] gap-2">
                  <dt className="flex items-baseline">
                    <div className="mr-1">
                      <FaEye />
                    </div>
                    <div>Lượt xem</div>
                  </dt>
                  <dd>{viewCount}</dd>
                </div>
              </dl>
              <div className="py-2">Xếp hạng 3.6/5 - 19823 đánh giá</div>
              <div className="flex">
                <button className="p-2 bg-green-600 mr-2 rounded-md text-white flex items-center">
                  <div className="mr-1">
                    <FaHeart color="white" />
                  </div>
                  Theo dõi
                </button>
                <button className="p-2 bg-yellow-600 mr-1 rounded-md text-white">Đọc từ đầu</button>
                <button className="p-2 bg-yellow-600 mr-1 rounded-md text-white">
                  Đọc mới nhất
                </button>
              </div>
            </div>
          </div>
          <div className="p-5">
            <h3 className="flex items-center text-lightBlue-600 border-solid border-b-2 border-lightBlue-500">
              <div className="mr-1">
                <FiFileText />
              </div>
              NỘI DUNG
            </h3>
            <div>{description}</div>
          </div>
          <div className="p-5">
            <h3 className="flex items-center text-lightBlue-600 border-solid border-b-2 border-lightBlue-500">
              <div className="mr-1">
                <FaListUl />
              </div>
              DANH SÁCH CHƯƠNG
            </h3>
            <div className="grid grid-cols-[2fr,1fr,1fr] border-dashed border-b-[1px] border-gray-400 p-2">
              <div className="font-semibold">Số chương</div>
              <div className="font-semibold text-center">Cập nhật</div>
              <div className="font-semibold text-center">Lượt xem</div>
            </div>
            {chapters.map((e) => (
              <div className="grid grid-cols-[2fr,1fr,1fr] cursor-pointer border-dashed border-b-[1px] border-gray-400 px-2 py-1">
                <div>
                  <Link to={`/truyen-tranh/${slug}/chuong-${e.chapterName}`}>
                    Chapter {e.chapterName}
                    {e.chapterFullName && ' - '}
                    {e.chapterFullName}
                  </Link>
                </div>
                <div className="italic text-center text-gray-500">{e.lastUpdated}</div>
                <div className="italic text-center text-gray-500">{e.viewCount}</div>
              </div>
            ))}
          </div>
        </div>

        <TopManga />
      </div>
    </div>
  )
}
