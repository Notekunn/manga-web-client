import React from 'react'
import { SuggestManga } from '../../components/MangaCard/SuggestManga'
import './index.css'
export default function Suggest() {
  return (
    <div className="flex flex-col">
      <h1 className="flex-1 flex items-start">
        <span className="p-3 text-lg text-lightBlue-600">Truyện đề cử</span>
      </h1>
      <div className="flex justify-center">
        {Array(6)
          .fill(1)
          .map((e, i) => (
            <SuggestManga
              name={
                'Cậu vàng ' +
                ['ngốc nghếch', 'đáng yêu', 'ham ăn', 'ham chơi'][Math.floor(Math.random() * 4)]
              }
              chapterName={`Chapter ${100 + i}`}
              lastUpdated={new Date(2021, 9, 2)}
              coverURL="http://st.imageinstant.net/data/comics/174/toi-la-tho-san-co-ki-nang-tu-sat-cap-sss-288.jpg"
              key={i}
            ></SuggestManga>
          ))}
      </div>
      <div className="flex justify-between items-center mx-auto">
        <button className="bg-purple-200 rounded-full w-2 p-1 mx-1"></button>
        <button className="bg-purple-400 rounded-full w-2 p-1 mr-1"></button>
        <button className="bg-purple-200 rounded-full w-2 p-1 mr-1"></button>
        <button className="bg-purple-200 rounded-full w-2 p-1 mr-1"></button>
        <button className="bg-purple-200 rounded-full w-2 p-1 mr-1"></button>
      </div>
    </div>
  )
}
