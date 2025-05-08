import {ProductsType } from '../../types/componentTypes';
import Button from '../ui/Button';
import './Item.css';
import { Link } from 'react-router-dom'

const Item = ({id,name,img,price,stock}:ProductsType) => {
  return (
    <div className='card card-shop'>
      <img src={img} alt={name} />
      <div className=''>
        <h3>{name}</h3>
        <p>Precio: ${price}</p>
        <p>ID: {id}</p>
        <p>Stock: {stock}</p>
        <Link to={`/item/${id}`}><Button>Ver Detalles</Button> </Link>
      </div>

    </div>
  )
}

export default Item