import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import ErrorPage from './routes/error-page'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'

const router = createBrowserRouter([{
  path:'/',
  element: <App/>,
  errorElement: <ErrorPage/>,
  children:[{
    path: 'categoria/:idCategoria',
    element:<ItemListContainer/>
  },
  {path:'/',
    element:<ItemListContainer/>
  },
 { 
  path:'item/:idItem',
  element:<ItemDetailContainer/>
}
]

},
// {
//   path: 'categoria/1',
//   element:<ItemListContainer/>
// }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
