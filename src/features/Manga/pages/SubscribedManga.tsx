import { MangaFeed } from '@features/MangaFeed/components'
import { TopManga } from '@features/Manga/components/TopManga'
import { StickyNavBar } from '@components/StickyNavBar'
import { Breadcrumb, BreadcrumbItemData } from '@components/Breadcrumb'
const breadcrumbItems: BreadcrumbItemData[] = [
  {
    name: 'Trang chủ',
    url: '/',
  },
  {
    name: 'Theo dõi',
    url: '#',
  },
]
function SubscribedMangaPage() {
  return (
    <>
      <StickyNavBar />
      <div className="bg-white max-w-[80%] mx-auto">
        <Breadcrumb items={breadcrumbItems} />
        <div className="flex justify-between min-h-screen">
          <div className="flex-shrink-0 pb-5 self-center flex-1">
            <MangaFeed pagination={{ itemPerPage: 20, page: 1 }} />
          </div>
          <div className="flex flex-shrink-0 flex-col">
            <TopManga />
          </div>
        </div>
      </div>
    </>
  )
}

export default SubscribedMangaPage
