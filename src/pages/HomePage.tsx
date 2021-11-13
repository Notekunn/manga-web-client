import ListManga from '@features/ListManga/components'
import SuggestManga from '@features/SuggestManga/components'
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
          <div className="flex flex-grow flex-shrink flex-col">
            <ListManga />
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
