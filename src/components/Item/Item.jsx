import './Item.css';
import { Link } from 'react-router-dom'

const Item = ({ id, nombre, precio, img, stock }) => {
  return (
    <div className='cardProducto'>
      <img src={img} alt={nombre} />
      <div className='cardProductoInfo'>
        <h3>{nombre}</h3>
        <p>Precio: ${precio}</p>
        <p>ID: {id}</p>
        <p>Stock: {stock}</p>
        <Link to={`/item/${id}`}><button>Ver Detalles</button> </Link>
      </div>

    </div>
  )
}

export default Item