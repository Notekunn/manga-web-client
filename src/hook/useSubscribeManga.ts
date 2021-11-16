import { useEffect, useLayoutEffect, useState } from 'react'
import { useMutation, useQuery } from '@apollo/client'
import {
  SUBSCRIBE_MANGA,
  SubscribeData,
  SubscribeVariable,
  GET_MANGA_SUBSCRIBE_INFO,
  SubscibeInfoData,
  SubscibeInfoVariables,
} from '@features/Manga/action'

export const useSubscribeManga = (slug: string) => {
  const { data } = useQuery<SubscibeInfoData, SubscibeInfoVariables>(GET_MANGA_SUBSCRIBE_INFO, {
    variables: {
      slug,
    },
    fetchPolicy: 'no-cache', // vì follow thay đổi thường xuyên
  })

  const [isSubscribe, setSubscribe] = useState(false)
  const [doSubscribe, { data: updateData, error }] = useMutation<SubscribeData, SubscribeVariable>(
    SUBSCRIBE_MANGA
  )
  //
  useLayoutEffect(() => {
    setSubscribe(!!data?.manga?.subscribed)
  }, [data])
  useEffect(() => {
    setSubscribe(!!updateData?.subscribeManga)
    return () => {}
  }, [updateData])
  const subscribeManga = (unsubscribe?: boolean) => {
    if (!data?.manga?.id) return

    doSubscribe({
      variables: {
        mangaId: +data?.manga?.id,
        unsubscribe: !!unsubscribe,
      },
    })
  }
  return [isSubscribe, subscribeManga, error] as const
}
