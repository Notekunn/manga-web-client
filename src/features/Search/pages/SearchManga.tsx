import ListManga from '@features/ListManga/components'
import SuggestManga from '@features/SuggestManga/components'
import { SubscribeManga } from '@features/SubscribeManga/components'
import { TopManga } from '@features/TopManga/components'
import { StickyNavBar } from '@components/StickyNavBar'
import { CategoryFeed } from '@features/Category/components/CategoryFeed'

function SearchMangaPage() {
  return (
    <>
      <StickyNavBar />
      <div className="bg-white max-w-[80%] mx-auto">
        <div className="flex min-h-screen">
          <div className="w-auto flex-1 bg-rose-300"></div>
          <CategoryFeed />
        </div>
      </div>
    </>
  )
}
export default SearchMangaPage
