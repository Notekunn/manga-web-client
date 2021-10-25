export const formatTimeDiff = (start: Date, end: Date): string => {
  const second = Math.abs(Math.floor((end.getTime() - start.getTime()) / 1000))
  if (second < 60) return 'vừa đây'
  const minutes = Math.floor(second / 60)
  if (minutes < 10) return 'vài phút trước'
  if (minutes < 60) return `${minutes} phút trước`
  const hour = Math.floor(minutes / 60)
  if (hour < 24) return `${hour} giờ trước`
  const day = Math.floor(hour / 24)
  if (day < 7) return `${day} ngày trước`
  const week = Math.floor(day / 7)
  if (week < 4) return `${week} tuần trước`
  if (day < 30) return `${day} ngày trước`
  const month = Math.floor(day / 30)
  if (month < 12) return `${month} tháng trước`
  const year = Math.floor(month / 12)
  return `${year} năm trước`
}

export const formatNumber = (input: number): string => {
  return new Intl.NumberFormat('vn-VN').format(input)
}