import { useState } from 'react'
import Contador from '../../Cart/Contador/Contador';
import { Link } from 'react-router-dom';
import './ItemDetail.css'
import { CartContext } from '../../context/CartContext';
import { useContext } from 'react';
import { ItemType, ProductsType } from '../../../types/componentTypes';


const ItemDetail = ({ ...producto }: ProductsType) => {
  const [agregarCantidad, setAgregarCantidad] = useState<number>(0);
  const { addToCart } = useContext(CartContext);

  const handleQuantity = (quantity: number) => {
    setAgregarCantidad(quantity)

    const handleItem: ItemType = { item: { ...producto }, quantity: quantity };
    addToCart(handleItem)

  }

  return (
    <div className='card card-item-detail'>
      <img src={producto.img} alt={producto.name} className="imgDetail" />
      {/* <div className='cardProductoInfo'> */}
        <h1>Nombre: {producto.name}</h1>
        <h2>Precio: ${producto.price}</h2>
        <h3>En Stock: {producto.stock}</h3>
        <p>ID: {producto.id}</p>
        <p>Increible figura coleccionable de {producto.name}</p>
        <p>Envio a toda Latinoamerica y E.U.A.</p>
        {


        }
        {agregarCantidad > 0 ? (<Link to="/cart"><button className='btnCompra'>Terminar Compra</button></Link>) :

          (<Contador inicial={1} producto={producto}
            funcionAgregar={handleQuantity} />)
        }


      {/* </div> */}
    </div>
  )
}

export default ItemDetail