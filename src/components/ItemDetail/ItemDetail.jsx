import { useState } from 'react'
import Contador from '../Contador/Contador';
import { Link } from 'react-router-dom';
import './ItemDetail.css'
//Importamos CarritoContext
import { CarritoContext } from '../../context/CarritoContext';
//Importo el Hook useContext:
import { useContext } from 'react';

const ItemDetail = ({id, nombre, precio, img, stock}) => {
  //creamos un estado local con la cantidad de productos agregados.
  const [agregarCantidad, setAgregarCantidad] = useState(0);
  
  //////////////////////////////AGREGADO CLASE 6
  
  
  const {agregarAlCarrito} = useContext(CarritoContext);
  
  
  //////////////////////////////AGREGADO CLASE 6
  
  
  
  //Creamos una funcion manejdora de la cantidad:


  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad)
    //console.log("Productos agregados:" + cantidad);
  
  //Ahora aca yo puedo crear un objeto con el item y la cantidad:
  const item = {id,nombre,precio};
  agregarAlCarrito(item,cantidad);
  }
  
  return (
    <div className='contenedorItem'>

        <h2>Nombre: {nombre}</h2>
        <h3>Precio: {precio}</h3>
        <h3>ID: {id}</h3>
        <img src={img} alt={nombre} className="imgDetail"/>
        <p>Lorem ipsum dolor, sit amet consectetur 
            adipisicing elit. Harum cupiditate, fuga 
            officia iure, voluptatum non sit maxime 
            tenetur quas provident autem fugit aliquam 
            assumenda necessitatibus 
            voluptatem? Repellendus deleniti ipsam 
            illo!</p>
            {
              //Aca empleamos la logica ara el montaje y el desmontaje de contador

            }
            { agregarCantidad > 0 ? (<Link to="/cart">Terminar Compra</Link>) : 
            (<Contador inicial={1} stock={stock} 
              funcionAgregar={manejadorCantidad}/>)
            }

        
    </div>
  )
}

export default ItemDetail