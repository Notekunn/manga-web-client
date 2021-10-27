import ListManga from '../features/ListManga/components'
import SuggestManga from '../components/SuggestManga'
import { SubscribeManga } from '../features/SubscribeManga/components'
import { TopManga } from '../features/TopManga/components'

function HomePage() {
  return (
    <div className="bg-white w-4/5 mx-auto">
      <SuggestManga />
      <div className="flex justify-center min-h-screen">
        <div className="flex w-2/3 flex-col">
          <ListManga />
        </div>
        <div className="flex flex-col w-1/3">
          <SubscribeManga />
          <div className="hidden">
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
          <TopManga />
        </div>
      </div>
    </div>
  )
}

export default HomePage
