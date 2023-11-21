import { useState } from 'react'
import Contador from '../Contador/Contador';
import { Link } from 'react-router-dom';
import './ItemDetail.css'
import { CarritoContext } from '../../context/CarritoContext';
import { useContext } from 'react';

const ItemDetail = ({ id, nombre, precio, img, stock }) => {
  const [agregarCantidad, setAgregarCantidad] = useState(0);

  const { agregarAlCarrito } = useContext(CarritoContext);

  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad)

    const item = { id, nombre, precio };
    agregarAlCarrito(item, cantidad);
  }

  return (
    <div className='contenedorItem'>
      <img src={img} alt={nombre} className="imgDetail" />
      <div className='cardProductoInfo'>
        <h1>Nombre: {nombre}</h1>
        <h2>Precio: ${precio}</h2>
        <h3>En Stock: {stock}</h3>
        <p>ID: {id}</p>
        <p>Increible figura coleccionable de {nombre}</p>
        <p>Envio a toda Latinoamerica y E.U.A.</p>
        {


        }
        {agregarCantidad > 0 ? (<Link to="/cart"><button className='btnCompra'>Terminar Compra</button></Link>) :
          (<Contador inicial={1} stock={stock}
            funcionAgregar={manejadorCantidad} />)
        }


      </div>
    </div>
  )
}

export default ItemDetail