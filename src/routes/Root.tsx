/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Suspense } from 'react'
import { TopBar } from '@components/TopBar'
import { Route, Routes, Outlet } from 'react-router-dom'
import { Loading } from '@components/Loading'
const HomePage = React.lazy(() => import('@pages/HomePage'))
const MangaInfo = React.lazy(() => import('@features/Manga/pages/MangaInfo'))
const ChapterInfo = React.lazy(() => import('@features/Chapter/pages/ChapterInfo'))
const SearchMangaPage = React.lazy(() => import('@features/Manga/pages/SearchManga'))
const LoginPage = React.lazy(() => import('@features/Auth/pages/LoginPage'))
const SubscribedMangaPage = React.lazy(() => import('@features/Manga/pages/SubscribedManga'))
export function RootRouter() {
  return (
    <Suspense fallback={<Loading />}>
      <div className="bg-black">
        <TopBar />
        <Routes>
          <Route
            path="/truyen-tranh/:slug/chuong-:chapterName/:chapterId"
            element={<ChapterInfo />}
          />
          <Route path="/truyen-tranh/:slug" element={<MangaInfo />} />
          <Route path="/theo-doi" element={<SubscribedMangaPage />} />
          <Route path="/tim-truyen" element={<SearchMangaPage />} />
          <Route path="/auth/login" element={<LoginPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
        <Outlet />
      </div>
    </Suspense>
  )
}
