import { useState } from 'react'
import { Route, Routes, Outlet } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Navbar from './components/Navbar'
import Home from './pages/Home'

// Function for Page Layout

function Layout(){
  return (
  <div className="w-full min-h-screen flex flex-col">
    <div>
      <Navbar />
    </div>
    <div className="flex-1 overflow-auto">
      <Outlet />
    </div>
  </div>
  )

}


function App() {

  return (
    <main>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          {/* Add more routes as needed */}
          </Route>
      </Routes>
  </main>
  )
}

export default App
