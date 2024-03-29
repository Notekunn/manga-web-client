import { useEffect, useMemo, useRef, useState } from 'react'
import Select, { StylesConfig } from 'react-select'
import { useQuery } from '@apollo/client'
import { Breadcrumb, BreadcrumbItemData } from '@components/Breadcrumb'
import { StickyNavBar } from '@components/StickyNavBar'
import { CategoryFeed } from '@features/Category/components/CategoryFeed'
import { CategoryFeedData, FETCH_ALL_CATEGORIES } from '@features/Category/action'
import { SortType, SORT_TYPE } from '@constants/manga'
import { MangaFeed } from '@features/MangaFeed/components'
import { useSearchFilter } from '@hook/useSearchFilter'
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
// type ParamType = Partial<Record<'categories' | 'keyword' | 'sort' | 'status' | 'page', string>>
function SearchMangaPage() {
  const [{ page = 1, ...filter }, updateField] = useSearchFilter()
  const { categories, keyword, status, sort } = filter
  const [passFilter, setPassFilter] = useState(filter)

  const { data } = useQuery<CategoryFeedData>(FETCH_ALL_CATEGORIES)
  const ref = useRef<NodeJS.Timeout | null>(null)
  useEffect(() => {
    console.log('Change')
    if (ref.current != null) {
      clearTimeout(ref.current)
    }
    ref.current = setTimeout(() => {
      console.log('Submit form')
      setPassFilter(filter)
    }, 3000)
    return () => {
      if (ref.current != null) {
        clearTimeout(ref.current)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [window.location.href])

  const categoryOptions = useMemo(() => {
    const list = data?.categories || []
    return list.map((e) => {
      return {
        value: e.slug,
        label: e.title,
      }
    })
  }, [data])
  const selectedCategory = categories || []
  return (
    <>
      <StickyNavBar />
      <div className="bg-white max-w-[80%] mx-auto">
        <Breadcrumb items={breadcrumbItems} />
        <div className="flex min-h-screen flex-row-reverse">
          <CategoryFeed items={data?.categories || []} />
          <div className="w-auto flex-1">
            <div>
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
                      onChange={(event) => updateField('keyword', event.target.value)}
                      value={keyword}
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
                      className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-md sm:text-sm border-gray-300 disabled:bg-gray-300"
                      placeholder="Tên tác giả"
                      disabled
                    />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-4 gap-6 px-4 pt-2">
                <div className="col-span-4 sm:col-span-2">
                  <label
                    htmlFor="category"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Thể loại
                  </label>

                  <Select
                    options={categoryOptions}
                    isMulti
                    name="category"
                    onChange={(event) =>
                      updateField(
                        'categories',
                        event.map((e) => e.value)
                      )
                    }
                    value={categoryOptions.filter((e) => selectedCategory.includes(e.value))}
                    styles={colourStyles}
                  />
                </div>

                <div className="col-span-4 sm:col-span-1">
                  <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-1">
                    Trạng thái
                  </label>
                  <select
                    name="status"
                    value={status || ''}
                    onChange={(event) =>
                      updateField('status', event.target.value as Entity.Manga['status'])
                    }
                    className="rounded-md border-gray-300 shadow-sm block w-full sm:text-sm "
                  >
                    <option value="">Tất cả</option>
                    <option value="COMPLETED">Đã hoàn thành</option>
                    <option value="ONGOING">Đang tiến hành</option>
                  </select>
                </div>
                <div className="col-span-4 sm:col-span-1">
                  <label htmlFor="sort" className="block text-sm font-medium text-gray-700 mb-1">
                    Sắp xếp theo
                  </label>
                  <select
                    name="sort"
                    value={sort || 'LAST_UPDATE'}
                    className="rounded-md border-gray-300 shadow-sm block w-full sm:text-sm"
                    onChange={(event) => updateField('sort', event.target.value as SortType)}
                  >
                    {SORT_TYPE.map((e, i) => (
                      <option value={e.value} key={`sort-type-${i}`}>
                        {e.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <div className="mt-10 mb-5 mx-auto">
              <MangaFeed
                pagination={{
                  page: +page,
                  itemPerPage: 20,
                }}
                filter={passFilter}
              />
            </div>
            <div className="text-center mb-10">
              <div className="inline-block border   border-gray-300 rounded-md shadow-sm text-md">
                <button
                  className="px-2 py-1 border-r rounded-md rounded-r-none disabled:opacity-50 hover:bg-gray-50 focus:ring-indigo-500 focus:ring-1"
                  onClick={() => updateField('page', +page - 1)}
                  disabled={page <= 1}
                >
                  Trang trước
                </button>
                <button
                  className="px-2 py-1 rounded-l-none rounded-md disabled:opacity-50 hover:bg-gray-5 focus:ring-indigo-500 focus:ring-1"
                  onClick={() => updateField('page', +page + 1)}
                >
                  Trang sau
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default SearchMangaPage
