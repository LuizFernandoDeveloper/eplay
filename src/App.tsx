import { BrowserRouter } from 'react-router-dom'
import React from 'react'

import Router from './routes'
import { Provider } from 'react-redux'

import { GlobalCss } from './styles'
import Header from './components/Header'
import Footer from './components/Footer'
import { store } from './store'
import Cart from './components/Cart'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalCss />
        <div className="container">
          <Header />
        </div>
        <Router />
        <Footer />
        <Cart />
      </BrowserRouter>
    </Provider>
  )
}

export default App
