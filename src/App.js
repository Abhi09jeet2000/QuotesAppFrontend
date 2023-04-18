import './App.css'

import Navbar from './components/Navbar'

import React from 'react'
import { useRoutes } from 'react-router'
import { routes } from './routes'

function App() {
  const element = useRoutes(routes)
  return (
    <div className="App">
      <Navbar />
      {element}
    </div>
  )
}

export default App
