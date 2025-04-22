import {ProductsType } from '../ItemList/ItemList';
import './Item.css';
import { Link } from 'react-router-dom'

const Item = (props:ProductsType) => {
  return (
    <div className='cardProducto'>
      <img src={props.img} alt={props.nombre} />
      <div className=''>
        <h3>{props.nombre}</h3>
        <p>Precio: ${props.precio}</p>
        <p>ID: {props.id}</p>
        <p>Stock: {props.stock}</p>
        <Link to={`/item/${props.id}`}><button>Ver Detalles</button> </Link>
      </div>

    </div>
  )
}

export default Item