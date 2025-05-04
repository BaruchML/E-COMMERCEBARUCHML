
import { Outlet } from 'react-router-dom'
import NavBar from './routes/NavBar'
import CartProvider from './components/context/CartContext'
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