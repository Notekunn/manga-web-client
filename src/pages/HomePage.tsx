import { MangaFeed } from '@features/MangaFeed/components'
import { SuggestManga } from '@features/SuggestManga/components'
import { SubscribeManga } from '@features/SubscribeManga/components'
import { TopManga } from '@features/TopManga/components'
import { StickyNavBar } from '@components/StickyNavBar'

function HomePage() {
  return (
    <>
      <StickyNavBar />
      <div className="bg-white max-w-[80%] mx-auto">
        <SuggestManga />
        <div className="flex justify-center min-h-screen">
          <div className="flex-grow flex-shrink pb-5">
            <span className="pt-3 pl-3 text-lg text-lightBlue-600">Truyện mới cập nhật</span>
            <MangaFeed pagination={{ itemPerPage: 20, page: 1 }} />
          </div>
          <div className="flex flex-grow flex-shrink flex-col">
            <SubscribeManga />
            <TopManga />
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage
