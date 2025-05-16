import { useContext, useState } from "react"
import "./CarWidget.css"
import { CartContext } from "../../context/CartContext"
import { Link } from 'react-router-dom'
// import {Icon} from '@iconify/react'


const CarWidget = () => {
  const { totalQuantity } = useContext(CartContext);
  const [hovered, setHovered] = useState(false)
  return (
    <div className="cart-widget-header" >
      <div>
        
      </div>
      <Link to="/cart">
        <iconify-icon icon="picon:cart" width="32" height="32" style={{
          color: hovered ? '#840d0d' : 'black',
          borderBottom: hovered ? '1px solid #840d0d' : '1px solid transparent',
          transition: 'color 0.3s, border-color 0.3s ease',
          transitionDuration: '.5s'
        }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        ></iconify-icon>
          </Link>
        <div>
          {
            totalQuantity > 0 && <strong className="quantity"> {totalQuantity}</strong>

          }
        </div>
    </div>
  )
}

export default CarWidget