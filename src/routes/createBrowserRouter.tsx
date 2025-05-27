import React from 'react';;
import ReactDOM from 'react-dom/client';
import App from '../App';
import {
    createBrowserRouter,
} from 'react-router-dom';
import ErrorPage from '../routes/error-page';
import ItemListContainer from '../components/Shop/ItemList/ItemListContainer';
import ItemDetailContainer from '../components/Item/ItemDetailContainer';
import Cart from '../components/Cart/Cart';
import Checkout from '../components/Checkout/Checkout';
import HomePage from '../components/HomePage/HomePage';
import Shop from '../components/Shop/Shop';

export const router = createBrowserRouter([{
    path: '/',
    element: <App/>,
  errorElement: <ErrorPage/>,
  children: [{
        path: 'categoria/:idCategoria',
        element: <ItemListContainer/>
    },
    {
        path: '/',
        element: <HomePage/>
    },
    {
        path: 'item/:idItem',
        element: <ItemDetailContainer/>
    },
    {
        path: '/cart',
        element: <Cart/>
    },
    {
        path: '/checkout',
        element: <Checkout/>
    },
    {
        path: '/shop',
        element: <Shop/>
    }
    ],
},

    // {
    //   path: 'categoria/1',
    //   element:<ItemListContainer/>
    // }
])