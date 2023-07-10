import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './views/Home'
import Categories from './views/Categories'

const Router = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/categories" element={<Categories />} />
  </Routes>
)

export default Router
