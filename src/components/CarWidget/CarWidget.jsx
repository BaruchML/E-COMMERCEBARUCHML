import { useContext } from "react"
import "./CarWidget.css"
import { CarritoContext } from "../../context/CarritoContext"
import {Link} from 'react-router-dom'

const CarWidget = () => {
  const { cantidadTotal } = useContext(CarritoContext);
  return (
    <div>
      <Link to="/cart">
        <img className="carrito" src='../img/carrito.png' alt="carrito de compras" />
        {
          cantidadTotal > 0 && <strong> {cantidadTotal}</strong>
        }
      </Link>
    </div>
  )
}

export default CarWidget