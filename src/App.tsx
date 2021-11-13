/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Suspense } from 'react'
import TopBar from '@components/TopBar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Loading } from '@components/Loading'
const HomePage = React.lazy(() => import('@pages/HomePage'))
const MangaInfo = React.lazy(() => import('@features/Manga/pages/MangaInfo'))
const ChapterInfo = React.lazy(() => import('@features/Chapter/pages/ChapterInfo'))
const SearchMangaPage = React.lazy(() => import('@features/Search/pages/SearchManga'))
const LoginPage = React.lazy(() => import('@features/Auth/pages/LoginPage'))
function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Router>
        <div className="bg-black">
          <TopBar />
          <Switch>
            <Route path="/truyen-tranh/:slug/chuong-:chapterName/:chapterId" exact>
              <ChapterInfo />
            </Route>
            <Route path="/truyen-tranh/:slug" exact>
              <MangaInfo />
            </Route>
            <Route path="/tim-truyen" exact>
              <SearchMangaPage />
            </Route>
            <Route path="/auth/login" exact>
              <LoginPage />
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </div>
      </Router>
    </Suspense>
  )
}

export default App
