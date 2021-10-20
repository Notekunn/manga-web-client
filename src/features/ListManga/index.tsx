import React from 'react'
import { MiniManga } from '../../components/MangaCard/MiniManga'

export default function ListManga() {
  return (
    <div className="flex flex-col">
      <div className="flex-1 flex items-start">
        <span className="pt-3 pl-3 text-lg text-lightBlue-600">Truyện mới cập nhật</span>
      </div>
      <div className="flex flex-wrap justify-between px-3 items-start">
        {Array(6)
          .fill(1)
          .map((e, i) => (
            <MiniManga
              name={
                'Cậu vàng ' +
                ['ngốc nghếch', 'đáng yêu', 'ham ăn', 'ham chơi'][Math.floor(Math.random() * 4)]
              }
              chapterName={`Chapter ${100 + i}`}
              lastUpdated={new Date(2021, 9, 2)}
              coverURL="http://st.imageinstant.net/data/comics/174/toi-la-tho-san-co-ki-nang-tu-sat-cap-sss-288.jpg"
              key={i}
              className={'flex-shrink'}
            ></MiniManga>
          ))}
      </div>
    </div>
  )
}
