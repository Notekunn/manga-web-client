/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import ListManga from './components/ListManga'
import SuggestManga from './components/SuggestManga'
import TopBar from './components/TopBar'
//https://i.imgur.com/BY4mD0j.png
function App() {
  return (
    <div>
      <TopBar />
      <SuggestManga />
      <div className="flex justify-center min-h-screen">
        <div className="flex w-2/3 flex-col">
          <ListManga />
        </div>
        <div className="flex flex-col w-1/3">
          <div className="p-2 flex flex-col">
            <span className="pt-3 pl-3 text-lg text-lightBlue-600 text-left">
              Truyện mới cập nhật
            </span>
            <div className="flex border-b-2 p-2 border-solid border-gray-400">
              <img
                className="h-[4.5rem] w-[4.5rem]"
                src="http://st.imageinstant.net/data/comics/32/vo-luyen-dinh-phong.jpg"
                alt=""
              />
              <div className="flex flex-col ml-4 flex-1">
                <span className="text-black font-bold">Cậu vàng vip pro</span>
                <div className="flex justify-between">
                  <span className="text-gray-700">Chapter 456</span>
                  <span className="text-sm italic">5 giờ trước</span>
                </div>
                <p className="text-sm italic">Đọc tiếp chương 2</p>
              </div>
            </div>
            <div className="flex border-b-2 p-2 border-solid border-gray-400">
              <img
                className="h-[4.5rem] w-[4.5rem]"
                src="http://st.imageinstant.net/data/comics/32/vo-luyen-dinh-phong.jpg"
                alt=""
              />
              <div className="flex flex-col ml-4 flex-1">
                <span className="text-black font-bold">Cậu vàng vip pro</span>
                <div className="flex justify-between">
                  <span className="text-gray-700">Chapter 456</span>
                  <span className="text-sm italic">5 giờ trước</span>
                </div>
                <p className="text-sm italic">Đọc tiếp chương 2</p>
              </div>
            </div>
            <div className="flex border-b-2 p-2 border-solid border-gray-400">
              <img
                className="h-[4.5rem] w-[4.5rem]"
                src="http://st.imageinstant.net/data/comics/32/vo-luyen-dinh-phong.jpg"
                alt=""
              />
              <div className="flex flex-col ml-4 flex-1">
                <span className="text-black font-bold">Cậu vàng vip pro</span>
                <div className="flex justify-between">
                  <span className="text-gray-700">Chapter 456</span>
                  <span className="text-sm italic">5 giờ trước</span>
                </div>
                <p className="text-sm italic">Đọc tiếp chương 2</p>
              </div>
            </div>
            <div className="flex border-b-2 p-2 border-solid border-gray-400">
              <img
                className="h-[4.5rem] w-[4.5rem]"
                src="http://st.imageinstant.net/data/comics/32/vo-luyen-dinh-phong.jpg"
                alt=""
              />
              <div className="flex flex-col ml-4 flex-1">
                <span className="text-black font-bold">Cậu vàng vip pro</span>
                <div className="flex justify-between">
                  <span className="text-gray-700">Chapter 456</span>
                  <span className="text-sm italic">5 giờ trước</span>
                </div>
                <p className="text-sm italic">Đọc tiếp chương 2</p>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <ul className="flex cursor-pointer">
              <li className="py-2 px-6 bg-white border-[1px] border-solid border-t-2 border-t-teal-800">
                Top Ngày
              </li>
              <li className="py-2 px-6 bg-gray-300 border-[1px] border-none">Top Tuần</li>
              <li className="py-2 px-6 bg-gray-300 border-[1px] border-none">Top Tháng</li>
            </ul>
            <div className="hidden-tab">
              <div className="flex border-b-2 p-2 border-solid border-gray-400">
                <img
                  className="h-[4.5rem] w-[4.5rem]"
                  src="http://st.imageinstant.net/data/comics/32/vo-luyen-dinh-phong.jpg"
                  alt=""
                />
                <div className="flex flex-col ml-4 flex-1">
                  <span className="text-black font-bold">Cậu vàng vip pro 1</span>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Chapter 456</span>
                    <span className="text-sm italic">5 giờ trước</span>
                  </div>
                  <p className="text-sm italic">Đọc tiếp chương 2</p>
                </div>
              </div>
              <div className="flex border-b-2 p-2 border-solid border-gray-400">
                <img
                  className="h-[4.5rem] w-[4.5rem]"
                  src="http://st.imageinstant.net/data/comics/32/vo-luyen-dinh-phong.jpg"
                  alt=""
                />
                <div className="flex flex-col ml-4 flex-1">
                  <span className="text-black font-bold">Cậu vàng vip pro 2</span>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Chapter 456</span>
                    <span className="text-sm italic">5 giờ trước</span>
                  </div>
                  <p className="text-sm italic">Đọc tiếp chương 2</p>
                </div>
              </div>
            </div>
            <div className="hidden-tab">
              <div className="flex border-b-2 p-2 border-solid border-gray-400">
                <img
                  className="h-[4.5rem] w-[4.5rem]"
                  src="http://st.imageinstant.net/data/comics/32/vo-luyen-dinh-phong.jpg"
                  alt=""
                />
                <div className="flex flex-col ml-4 flex-1">
                  <span className="text-black font-bold">Cậu vàng vip pro 3</span>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Chapter 456</span>
                    <span className="text-sm italic">5 giờ trước</span>
                  </div>
                  <p className="text-sm italic">Đọc tiếp chương 2</p>
                </div>
              </div>
              <div className="flex border-b-2 p-2 border-solid border-gray-400">
                <img
                  className="h-[4.5rem] w-[4.5rem]"
                  src="http://st.imageinstant.net/data/comics/32/vo-luyen-dinh-phong.jpg"
                  alt=""
                />
                <div className="flex flex-col ml-4 flex-1">
                  <span className="text-black font-bold">Cậu vàng vip pro 4</span>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Chapter 456</span>
                    <span className="text-sm italic">5 giờ trước</span>
                  </div>
                  <p className="text-sm italic">Đọc tiếp chương 2</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex border-b-2 p-2 border-solid border-gray-400">
                <img
                  className="h-[4.5rem] w-[4.5rem]"
                  src="http://st.imageinstant.net/data/comics/32/vo-luyen-dinh-phong.jpg"
                  alt=""
                />
                <div className="flex flex-col ml-4 flex-1">
                  <span className="text-black font-bold">Cậu vàng vip pro 6</span>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Chapter 456</span>
                    <span className="text-sm italic">5 giờ trước</span>
                  </div>
                  <p className="text-sm italic">Đọc tiếp chương 2</p>
                </div>
              </div>
              <div className="flex border-b-2 p-2 border-solid border-gray-400">
                <img
                  className="h-[4.5rem] w-[4.5rem]"
                  src="http://st.imageinstant.net/data/comics/32/vo-luyen-dinh-phong.jpg"
                  alt=""
                />
                <div className="flex flex-col ml-4 flex-1">
                  <span className="text-black font-bold">Cậu vàng vip pro 5</span>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Chapter 456</span>
                    <span className="text-sm italic">5 giờ trước</span>
                  </div>
                  <p className="text-sm italic">Đọc tiếp chương 2</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
