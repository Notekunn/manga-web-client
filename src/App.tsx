/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Suspense } from 'react'
import TopBar from './components/TopBar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
const HomePage = React.lazy(() => import('./pages/HomePage'))
//https://i.imgur.com/BY4mD0j.png
function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Router>
        <div>
          <TopBar />
          <Switch>
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
