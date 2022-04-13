import Router from './router/index'
import React from 'react'

import Navbar from './components/navbar/Navbar.js'

import './styles/app.css'
import './styles/colors.css'
import './styles/elements.css'
import './styles/responsive.css'

const App = () => {

  return (
    <div className="app-content">
      <Navbar />
      <div className="router"><Router /></div>
    </div>
  )
}

export default App;