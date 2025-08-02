import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../views/Home'
import Login from '../views/Login'
import Product from '../views/Product'
import Register from '../views/Register'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product" element={<Product />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}

export { Router }