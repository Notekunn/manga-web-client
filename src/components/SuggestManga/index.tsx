import React from 'react'
import { SuggestMangaCard } from '../MangaCard/SuggestMangaCard'
import './index.css'
export default function SuggestManga() {
  return (
    <div className="flex flex-col bg-white">
      <h1 className="flex-1 flex items-start">
        <span className="p-3 text-lg text-lightBlue-600">Truyện đề cử</span>
      </h1>
      <div className="flex justify-center">
        {Array(5)
          .fill(1)
          .map((e, i) => (
            <SuggestMangaCard
              name={
                'Cậu vàng ' +
                ['ngốc nghếch', 'đáng yêu', 'ham ăn', 'ham chơi'][Math.floor(Math.random() * 4)]
              }
              chapterName={`${100 + i}`}
              lastUpdated={new Date(2021, 9, 2)}
              coverURL="http://st.imageinstant.net/data/comics/174/toi-la-tho-san-co-ki-nang-tu-sat-cap-sss-288.jpg"
              key={i}
            ></SuggestMangaCard>
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
