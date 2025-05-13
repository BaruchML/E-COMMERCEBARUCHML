import { useContext } from "react"
import "./CarWidget.css"
import { CartContext } from "../../context/CartContext"
import { Link } from 'react-router-dom'

const CarWidget = () => {
  const { totalQuantity } = useContext(CartContext);
  return (
      <Link to="/cart">
    <div className="card card-cartwidget">
        <img className="carrito" src='../img/carrito.png' alt="carrito de compras" />
        {
          totalQuantity > 0 && <strong> {totalQuantity}</strong>
        }
    </div>
        </Link>
  )
}

export default CarWidget