import { BrowserRouter } from 'react-router-dom'

import React from 'react'
import { GlobalCss } from './styles'
import Header from './components/Header'
import Router from './routes'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <div className="container">
        <Header />
      </div>
      <Router />
      <Footer />
    </BrowserRouter>
  )
}

export default App
