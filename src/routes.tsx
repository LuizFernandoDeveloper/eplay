import { Route, Routes } from 'react-router-dom'

import Home from './views/Home'
import Categories from './views/Categories'
import Product from './views/product'
import Checkout from './views/Checkout/index'

const Router = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/categories" element={<Categories />} />
    <Route path="/product/:id" element={<Product />} />
    <Route path="/checkout" element={<Checkout />} />
  </Routes>
)

export default Router
