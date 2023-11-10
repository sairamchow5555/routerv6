import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import DashBoard from './DashBoard'
import About from './About'
import PageNotFond from './PageNotFond'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dashboard' element={<DashBoard />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<PageNotFond />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
