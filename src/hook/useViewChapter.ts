import { useMutation } from '@apollo/client'
import { UPDATE_VIEW_CHAPTER, UpdateViewChapterVariable } from '@features/Chapter/action'

export const useViewChapter = (chapterId: number | string) => {
  const [mutation] = useMutation<{}, UpdateViewChapterVariable>(UPDATE_VIEW_CHAPTER)

  const updateView = () =>
    mutation({
      variables: {
        chapterId: +chapterId,
      },
    })
  return [updateView] as const
}
