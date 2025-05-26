
import { useContext } from "react"
import { GameCartType } from "../../../types/componentTypes";
import { CartContext } from "../../context/CartContext";
import './CartItem.css'

const CartItem = ({ item, quantity }:GameCartType) => {
  const { eraseProduct } = useContext(CartContext);
  return (
    <div className="divCartItem">
      <h3>{item.name}</h3>
      <p>Cantidad: {quantity}</p>
      <p>Precio: ${item.price}</p>

    {
      eraseProduct && (<button className="buttonCartItem" onClick={() => eraseProduct(item)}>Eliminar</button>)
    }
      
      <hr />
    </div>
  )
}

export default CartItem



