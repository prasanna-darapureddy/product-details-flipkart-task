import React from 'react';
import { BrowserRouter, Routes, Route, } from 'react-router-dom'

import Login from './Components/LoginForm/Login.tsx';
import Home from './Components/Home/Home.tsx';
import ProductDetails from './Components/ProductDetails/ProductDetails.tsx';
import NotFound from './Components/NotFound.tsx';
import Cart from './Components/Cart/Cart.tsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Home />} />
        <Route path='/products/:id' element={<ProductDetails />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App;
