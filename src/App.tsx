import React from 'react'
import './style.scss'
import Header from './components/layout/Header/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'

const App = () => {
  return (
    <div>
      <Header />
        <Routes>
          <Route path='/' element={<Home/>} />
        </Routes>
    </div>
  )
}

export default App