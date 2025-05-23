import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App'
import {
  // createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
// import ErrorPage from './routes/error-page'
// import ItemListContainer from './components/Item/ItemListContainer/ItemListContainer'
// import ItemDetailContainer from './components/Item/ItemDetailContainer/ItemDetailContainer'
// import Cart from './components/Cart/Cart'
// import Checkout from './components/Checkout/Checkout'
// import HomePage from './components/HomePage/HomePage'
// import Shop from './components/Shop/Shop'
import { router } from './routes/createBrowserRouter'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
