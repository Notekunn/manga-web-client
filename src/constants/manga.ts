export const SORT_TYPE = [
  {
    label: 'Tên truyện',
    value: 'NAME',
  },
  {
    label: 'Ngày cập nhật',
    value: 'LAST_UPDATE',
  },
  {
    label: 'Theo dõi',
    value: 'FOLLOW_COUNT',
  },
  {
    label: 'Bình luận',
    value: 'COMMENT',
  },
  {
    label: 'Số chapter',
    value: 'CHAPTER_COUNT',
  },
  {
    label: 'Top ngày',
    value: 'TOP_DAY',
  },
  {
    label: 'Top tuần',
    value: 'TOP_WEEK',
  },
  {
    label: 'Top tháng',
    value: 'TOP_MONTH',
  },
  {
    label: 'Top all',
    value: 'TOP_ALL',
  },
] as const

export type SortType = typeof SORT_TYPE[number]['value']
