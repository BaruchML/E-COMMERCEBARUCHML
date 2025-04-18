import React from 'react'
import { Outlet } from 'react-router-dom'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
// import NavBar from './components/NavBar/NavBar'
''
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from './routes/root'
// import { CarritoProvider } from './context/CarritoContext'
// import Cart from './components/Cart/Cart'
// import Checkout from './components/Checkout/Checkout'
// import './App.css'

const App = () => {
  return (
    <>
<NavBar/>
<div>
  <Outlet/>
</div>
<footer></footer>
</>)
}

export default App