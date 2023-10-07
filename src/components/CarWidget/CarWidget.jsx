import React from 'react'
import "./CarWidget.css"

const CarWidget = () => {
    const imgCarrito = "https://previews.123rf.com/images/vectoraa/vectoraa1609/vectoraa160900985/62392824-icono-de-carrito-de-compras-icono-de-vector-de-mejor-dise%C3%B1o-plano.jpg"
  return (
    <div>
        <img className = 'imgCarrito' src = {imgCarrito} alt="imagen carrito"/>
        <strong>2</strong>
    </div>
  )
}

export default CarWidget