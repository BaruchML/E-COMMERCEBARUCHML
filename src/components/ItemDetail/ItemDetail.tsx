import { useState } from 'react'
// import Contador from '../Contador/Contador';
import { Link } from 'react-router-dom';
import './ItemDetail.css'
// import { CarritoContext } from '../../context/CarritoContext';
import { useContext } from 'react';
import { ProductsType } from '../ItemList/ItemList';

type Props = {
  producto?: ProductsType;
};

const ItemDetail = ({producto}:Props) => {

  
  const [agregarCantidad, setAgregarCantidad] = useState<number>(0);

  // const { agregarAlCarrito } = useContext(CarritoContext);

  const manejadorCantidad = (cantidad:number) => {
    setAgregarCantidad(cantidad)

    // const item = { id, nombre, precio };
    // agregarAlCarrito(item, cantidad);
  }

  return (
    <div className='contenedorItem'>
      <img src={producto?.img} alt={producto?.nombre} className="imgDetail" />
      <div className='cardProductoInfo'>
        <h1>Nombre: {producto?.nombre}</h1>
        <h2>Precio: ${producto?.precio}</h2>
        <h3>En Stock: {producto?.stock}</h3>
        <p>ID: {producto?.id}</p>
        <p>Increible figura coleccionable de {producto?.nombre}</p>
        <p>Envio a toda Latinoamerica y E.U.A.</p>
        {/* {


        }
        {agregarCantidad > 0 ? (<Link to="/cart"><button className='btnCompra'>Terminar Compra</button></Link>) :
          (<Contador inicial={1} stock={stock}
            funcionAgregar={manejadorCantidad} />)
        } */}


      </div>
    </div>
  )
}

export default ItemDetail