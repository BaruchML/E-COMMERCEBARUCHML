
import { Outlet } from 'react-router-dom'
import NavBar from './routes/NavBar'
import CartProvider from './components/context/CartContext'
import './styles/main.scss'
import Footer from './components/Footer/Footer'
const App = () => {
  
  return (
    <>

    <CartProvider>
      <NavBar />

      <div>
        <Outlet />
      </div>
      
      <Footer/>
    </CartProvider>
    </>)
}

export default App