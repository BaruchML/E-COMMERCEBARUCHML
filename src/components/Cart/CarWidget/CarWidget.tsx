import { useContext, useState } from "react"
import "./CarWidget.css"
import { CartContext } from "../../context/CartContext"
import { Link } from 'react-router-dom'
// import {Icon} from '@iconify/react'


const CarWidget = () => {
  const { totalQuantity } = useContext(CartContext);
  const [hovered, setHovered] = useState(false)
  return (
    <>
    <div className="container-cart-widget">
      
    <div className="cart-widget-header" >
      <Link to="/cart">
        <iconify-icon icon="picon:cart" width="32" height="32" 
         ></iconify-icon>
      </Link>
      <div className="cart-widget-quantity">
        {
          totalQuantity > 0 && <strong className="quantity"> {totalQuantity}</strong>
        }
      </div>
    </div>
        </div></>
  )
}

export default CarWidget