import { useEffect, useMemo, useRef, useState } from 'react'
import { SearchMangaData, SearchMangaVariable, SEARCH_LIST_MANGA } from '@features/MangaFeed/action'
import { useLazyQuery } from '@apollo/client'
export const useLiveSearch = () => {
  const [fetchManga, { loading, error, data }] = useLazyQuery<SearchMangaData, SearchMangaVariable>(
    SEARCH_LIST_MANGA
  )
  const [keyword, setKeyword] = useState<string | null>(null)
  const ref = useRef<NodeJS.Timeout | null>(null)
  const prevKeyword = useRef<string | null>(null)
  useEffect(() => {
    if (!!keyword && prevKeyword.current !== keyword) {
      prevKeyword.current = keyword
      if (ref.current !== null) {
        clearTimeout(ref.current)
      }
      ref.current = setTimeout(() => {
        console.log('Search with keyword: ', keyword)
        fetchManga({
          variables: {
            filter: {
              keyword: keyword,
              sort: 'NAME',
            },
            pagination: {
              page: 1,
              itemPerPage: 10,
            },
          },
        })
      }, 1000)
    }
    return () => {
      if (ref.current !== null) {
        clearTimeout(ref.current)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keyword])
  // return [setKeyword, { loading, error, mangas: data?.mangas || [] }] as const

  const result = useMemo(() => {
    return [setKeyword, { loading, error, mangas: data?.mangas || [] }] as const
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data])
  return result
}
