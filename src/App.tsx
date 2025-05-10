
import { Outlet } from 'react-router-dom'
import NavBar from './routes/NavBar'
import CartProvider from './components/context/CartContext'
import './styles/main.scss'
import Footer from './components/Footer/Footer'
import UserProvider from './components/context/UserContext'
const App = () => {
  
  return (
    <>
    <UserProvider>
    <CartProvider>
      <NavBar />

      <div>
        <Outlet />
      </div>
      
      <Footer/>
    </CartProvider>
    </UserProvider>
    </>)
}

export default App