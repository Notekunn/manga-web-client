/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Suspense } from 'react'
import TopBar from '@components/TopBar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
const HomePage = React.lazy(() => import('@pages/HomePage'))
const MangaInfo = React.lazy(() => import('@features/Manga/pages/MangaInfo'))
const ChapterInfo = React.lazy(() => import('@features/Chapter/pages/ChapterInfo'))
const LoginPage = React.lazy(() => import('@features/Auth/pages/LoginPage'))
function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Router>
        <div className="bg-black">
          <TopBar />
          <Switch>
            <Route path="/truyen-tranh/:slug/chuong-:chapterName" exact>
              <ChapterInfo />
            </Route>
            <Route path="/truyen-tranh/:slug" exact>
              <MangaInfo />
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
