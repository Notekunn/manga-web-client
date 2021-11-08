import { randomArray } from '@utils/common'
import React, { useEffect, useRef, useState } from 'react'
import { SuggestMangaCard } from './SuggestMangaCard'
const SAMPLE_SUGGEST_MANGA = Array(25)
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
const SuggestManga: React.FC<{}> = React.memo(() => {
  const [page, setPage] = useState(0)
  const ref = useRef()

  useEffect(() => {
    const idInterval = setInterval(() => setPage((page) => (page + 1) % 5), 5000)
    return () => {
      clearInterval(idInterval)
    }
  }, [])
  return (
    <div className="flex flex-col bg-white">
      <h1 className="flex-1 flex items-start">
        <span className="p-3 text-lg text-lightBlue-600">Truyện đề cử</span>
      </h1>
      <div className="flex justify-center flex-grow-0 overflow-hidden">
        {SAMPLE_SUGGEST_MANGA.slice(page, page + 5).map((e, i) => (
          <SuggestMangaCard
            name={e.name}
            chapterName={e.chapterName}
            lastUpdated={e.lastUpdated}
            coverURL={e.coverURL}
            key={`suggest-manga-${i}`}
          ></SuggestMangaCard>
        ))}
      </div>
      <div className="flex justify-between items-center mx-auto">
        {Array.from(Array(5).keys()).map((e) => (
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
export default SuggestManga
