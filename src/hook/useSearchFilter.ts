import { SortType } from '@constants/manga'
import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

const searchField = ['keyword', 'categories', 'sort', 'status', 'page'] as const
type SearchField = typeof searchField[number]
type ParamType = {
  [key in SearchField]?: string
}
type FilterType = {
  keyword?: string
  categories?: string[]
  status?: Entity.Manga['status']
  sort?: SortType
  page?: number
}
// Dùng json để bỏ field undefined
export const useSearchFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams({})

  const [filter, setFilter] = useState<FilterType>(() =>
    JSON.parse(
      JSON.stringify({
        categories: searchParams.get('categories')?.split(','),
        keyword: searchParams.get('keyword') || undefined,
        status: searchParams.get('status') || undefined,
        sort: searchParams.get('sort') || undefined,
        page: Math.max(parseInt(searchParams.get('page') || '1', 10), 1),
      })
    )
  )
  useEffect(() => {
    setFilter(() =>
      JSON.parse(
        JSON.stringify({
          categories: searchParams.get('categories')?.split(','),
          keyword: searchParams.get('keyword') || undefined,
          status: searchParams.get('status') || undefined,
          sort: searchParams.get('sort') || undefined,
          page: Math.max(parseInt(searchParams.get('page') || '1', 10), 1),
        })
      )
    )

    return () => {}
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [window.location.href])
  const updateField = <T extends SearchField>(field: T, value: Required<FilterType>[T]) => {
    const { categories, keyword, status, sort } = filter
    const params: ParamType = {
      categories: categories?.join(','),
      keyword,
      status,
      sort,
    }
    if (field === 'page') params.page = value + ''
    else if (field === 'categories') {
      const categories = (value as string[]).join(',')
      params.categories = categories.length > 0 ? categories : undefined
    } else params[field] = !!value ? value + '' : undefined

    setSearchParams(JSON.parse(JSON.stringify(params)))
  }
  return [filter, updateField] as const
}
