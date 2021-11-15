import { randomArray } from '@utils/common'
import React, { useEffect, useMemo, useState } from 'react'
import { SuggestMangaCard } from './SuggestMangaCard'
import { cardSize } from '@constants/card'
const MAX_PAGE = 3
const SAMPLE_SUGGEST_MANGA = Array(MAX_PAGE + 5)
  .fill(1)
  .map((e, i) => ({
    name: 'Cậu vàng ' + randomArray(['ngốc nghếch', 'đáng yêu', 'ham ăn', 'ham chơi']),

    chapterName: `${100 + i}`,
    lastUpdated: new Date(),
    coverURL: randomArray([
      'http://st.imageinstant.net/data/comics/174/toi-la-tho-san-co-ki-nang-tu-sat-cap-sss-288.jpg',
      'http://st.imageinstant.net/data/comics/140/the-dang-nhap-phong-an-sieu-cap.jpg',
      'http://st.imageinstant.net/data/comics/12/doc-co-tu-linh-su.jpg',
      'http://st.imageinstant.net/data/comics/135/saijaku-teima-wa-gomi-hiroi-no-tabi-o-ha-7381.jpg',
    ]),
  }))
export const SuggestManga: React.FC<{}> = React.memo(() => {
  const [page, setPage] = useState(0)
  // const ref = useRef<HTMLDivElement>(null)
  // const parrent = useRef<HTMLDivElement>(null)
  const transformX = useMemo(() => {
    return page * (cardSize['large'][0] + 1) // with + margin right 1
  }, [page])
  useEffect(() => {
    const idInterval = setInterval(() => {
      setPage((page) => (page + 1) % MAX_PAGE)
    }, 1000)
    return () => {
      clearInterval(idInterval)
    }
  }, [])
  // useEffect(() => {
  //   console.log(ref.current?.getBoundingClientRect().right)
  // }, [page])
  return (
    <div className="flex flex-col bg-white">
      <h1 className="flex-1 flex items-start">
        <span className="p-3 py-0 text-lg text-lightBlue-600">Truyện đề cử</span>
      </h1>
      <div className="px-3 mr-3 overflow-hidden w-full">
        <div
          className="flex mx-auto w-[4000px] transform-gpu
                    transform duration-500 overflow-visible"
          style={{
            transform: 'translate3d(-' + transformX + 'rem, 0px, 0px)',
          }}
          // ref={parrent}
        >
          {SAMPLE_SUGGEST_MANGA.map((e, i) => (
            <SuggestMangaCard
              name={e.name}
              chapterName={e.chapterName}
              lastUpdated={e.lastUpdated}
              coverURL={e.coverURL}
              className={'mr-4 last:mr-0'}
              key={`suggest-manga-${i}`}
            />
          ))}
        </div>
      </div>
      <div className="flex justify-between items-center mx-auto">
        {Array.from(Array(MAX_PAGE).keys()).map((e) => (
          <button
            className="rounded-full w-2 p-1 first:mx-1 mr-1"
            style={{
              backgroundColor: page === e ? 'rgba(192, 132, 252, 1)' : 'rgba(233, 213, 255, 1)',
            }}
            key={`ov-${e}`}
            onClick={() => setPage(e)}
          ></button>
        ))}
      </div>
    </div>
  )
})
