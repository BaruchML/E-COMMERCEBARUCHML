import React from 'react'
import { Outlet } from 'react-router-dom'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
// import NavBar from './components/NavBar/NavBar'
''
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from './routes/NavBar'
import CartProvider, { CartContext } from './context/CartContext'
// import Cart from './components/Cart/Cart'
// import Checkout from './components/Checkout/Checkout'
// import './App.css'
import './styles/main.scss'
const App = () => {
  
  return (
    <>
    <CartProvider>

      <NavBar />
      <div>
        <Outlet />
      </div>
      <footer></footer>
    </CartProvider>
    </>)
}

export default App