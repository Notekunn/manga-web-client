import { useQuery } from '@apollo/client'
import { Breadcrumb, BreadcrumbItemData } from '@components/Breadcrumb'
import { StickyNavBar } from '@components/StickyNavBar'
import { CategoryFeed } from '@features/Category/components/CategoryFeed'
import { CategoryFeedData, FETCH_ALL_CATEGORIES } from '@features/Category/action'
import Select, { StylesConfig } from 'react-select'
// import {} from 'react-router-dom'
const breadcrumbItems: BreadcrumbItemData[] = [
  {
    name: 'Trang chủ',
    url: '/',
  },
  {
    name: 'Tìm kiếm',
    url: '/tim-kiem',
  },
]
interface CategoryOption {
  value: string
  label: string
}

const colourStyles: StylesConfig<CategoryOption, true> = {
  input: (styles) => ({
    ...styles,
    '&:hover > input': {
      boxShadow: 'none',
      border: 0,
    },
    '&:not(:hover) > input': {
      boxShadow: 'none',
      border: 0,
    },
  }),
}
function SearchMangaPage() {
  const { data } = useQuery<CategoryFeedData>(FETCH_ALL_CATEGORIES)
  //   const nav = useSearchParams()
  return (
    <>
      <StickyNavBar />
      <div className="bg-white max-w-[80%] mx-auto">
        <Breadcrumb items={breadcrumbItems} />
        <div className="flex min-h-screen">
          <div className="w-auto flex-1">
            <div className="text-center font-bold text-2xl">Tìm kiếm truyện tranh</div>
            <div className="grid grid-cols-4 gap-6 px-4 pt-2">
              <div className="col-span-4 sm:col-span-2">
                <label htmlFor="keyword" className="block text-sm font-medium text-gray-700">
                  Từ khóa
                </label>
                <div className="mt-1 flex rounded-md shadow-sm">
                  <input
                    type="text"
                    name="keyword"
                    id="keyword"
                    className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-md sm:text-sm border-gray-300"
                    placeholder="Từ khóa tìm kiếm"
                  />
                </div>
                <div className="flex items-center mt-1">
                  <input
                    id="find-exact"
                    name="find-exact"
                    type="checkbox"
                    className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-0"
                  />
                  <label
                    htmlFor="find-exact"
                    className="ml-3 block text-sm font-medium text-gray-700"
                  >
                    Tìm kiếm chính xác
                  </label>
                </div>
              </div>
              <div className="col-span-4 sm:col-span-2">
                <label htmlFor="artist" className="block text-sm font-medium text-gray-700">
                  Tác giả
                </label>
                <div className="mt-1 flex rounded-md shadow-sm">
                  <input
                    type="text"
                    name="artist"
                    id="artist"
                    className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-md sm:text-sm border-gray-300"
                    placeholder="Tên tác giả"
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-6 px-4 pt-2">
              <div className="col-span-4 sm:col-span-2">
                <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                  Thể loại
                </label>

                <Select
                  options={(data?.categories || [])?.map((e) => {
                    return {
                      value: e.slug,
                      label: e.title,
                    }
                  })}
                  isMulti
                  name="category"
                  onChange={(e) => console.log('A', e)}
                  styles={colourStyles}
                />
              </div>

              <div className="col-span-4 sm:col-span-1">
                <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-1">
                  Trạng thái
                </label>
                <select
                  name="status"
                  value="DONE"
                  className="rounded-md border-gray-300 shadow-sm block w-full sm:text-sm "
                >
                  <option value="ALL">Tất cả</option>
                  <option value="DONE">Đã hoàn thành</option>
                  <option value="ONGOING">Đang tiến hành</option>
                </select>
              </div>
              <div className="col-span-4 sm:col-span-1">
                <label htmlFor="sort" className="block text-sm font-medium text-gray-700 mb-1">
                  Sắp xếp theo
                </label>
                <select
                  name="sort"
                  className="rounded-md border-gray-300 shadow-sm block w-full sm:text-sm "
                >
                  <option value="">Đã hoàn thành</option>
                  <option value="">Đã hoàn thành</option>
                  <option value="">Đã hoàn thành</option>
                </select>
              </div>
            </div>
          </div>
          <CategoryFeed items={data?.categories || []} />
        </div>
      </div>
    </>
  )
}
export default SearchMangaPage
