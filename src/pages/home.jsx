import React from 'react'
import Header from '../components/header'
import { Route, Routes } from 'react-router-dom'
import ProductPage from './productPage'
import Overview from './overview'
import Cart from './cart'

export default function HomePage() {
  return (
    <div className='w-full min-h-screen'>
      <Header />

      <Routes>
        <Route path="/" element={<div>Home Page Content</div>} />
        <Route path="/about" element={<div>About Page Content</div>} />
        <Route path="/contact" element={<div>Contact Page Content</div>} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/overview/:productId" element={<Overview />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/*" element={<div>404 Not Found!</div>} />
      </Routes>

    </div>
  )
}
