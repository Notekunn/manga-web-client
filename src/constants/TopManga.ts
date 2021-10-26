export const TOP_ONE = Array.from(Array(10).keys()).map((e) => {
  return {
    coverURL: 'http://st.imageinstant.net/data/comics/46/cot-binh-tro-lai.jpg',
    lastChapter: 'Chapter ' + (e + 1),
    name: 'Cốt binh trở lại',
    viewCount: 1032321 + 124023 * e,
    order: e + 1,
  }
})
export const TOP_TWO = Array.from(Array(10).keys()).map((e) => {
  return {
    coverURL: 'http://st.imageinstant.net/data/comics/32/vo-luyen-dinh-phong.jpg',
    lastChapter: 'Chapter ' + (e + 1),
    name: 'Võ luyện đỉnh phong',
    viewCount: 1032321 + 124023 * e,
    order: e + 1,
  }
})
export const TOP_THREE = Array.from(Array(10).keys()).map((e) => {
  return {
    coverURL: 'http://st.imageinstant.net/data/comics/51/anh-hung-ban-phim-tu-tien.jpg',
    lastChapter: 'Chapter ' + (e + 1),
    name: 'Cậu bé rừng xanh',
    viewCount: 1032321 + 124023 * e,
    order: e + 1,
  }
})
