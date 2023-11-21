
import { useContext } from "react"
import { CarritoContext } from "../../context/CarritoContext"
import './CartItem.css'

const CartItem = ({ item, cantidad, img }) => {
  const { eliminarProducto } = useContext(CarritoContext);
  return (
    <div className="divCartItem">
      <h3>{item.nombre}</h3>
      <p>Cantidad: {cantidad}</p>
      <p>Precio: ${item.precio}</p>


      <button className="buttonCartItem" onClick={() => eliminarProducto(item.id)}>Eliminar</button>
      <hr />
    </div>
  )
}

export default CartItem



