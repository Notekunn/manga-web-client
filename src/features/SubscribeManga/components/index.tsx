import React from 'react'
import { SubscribeMangaItem, SubscribeMangaItemProps } from './SubscribeMangaItem'
export interface SubscribeMangaProps {}
const DATA_SUBSCRIBE: SubscribeMangaItemProps[] = Array.from(Array(5).keys()).map((e) => {
  return {
    coverURL: 'http://st.imageinstant.net/data/comics/32/vo-luyen-dinh-phong.jpg',
    name: 'Võ luyện đỉnh phong',
    lastChapter: 'Chapter ' + (e + 123),
    lastReadChapter: 'Chapter 122',
    lastUpdated: new Date(2021, 9, 22, 23),
  }
})
export const SubscribeManga: React.FC<SubscribeMangaProps> = () => {
  return (
    <div className="p-2 flex flex-col mb-4">
      <span className="pt-3 pl-3 text-lg text-lightBlue-600 text-left border-b-2 border-b-gray-500">
        Truyện mới cập nhật
      </span>
      {DATA_SUBSCRIBE.map((item) => (
        <SubscribeMangaItem {...item} />
      ))}
    </div>
  )
}
