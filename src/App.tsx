/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import ListManga from './features/ListManga'
import Suggest from './features/Suggest'
import TopBar from './components/TopBar'
//https://i.imgur.com/BY4mD0j.png
function App() {
  return (
    <div>
      <TopBar />
      <Suggest />
      <div className="flex container justify-center min-h-screen">
        <div className="bg-rose-50 flex w-2/3 flex-col">
          <ListManga />
        </div>
        <div className="bg-violet-700 flex flex-col w-1/3">
          <div className="flex-1 bg-rose-100">A</div>
          <div className="flex-1 from-purple-800">B</div>
        </div>
      </div>
    </div>
  )
}

export default App
