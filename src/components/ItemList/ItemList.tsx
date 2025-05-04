import Item from '../Item/Item'
import './ItemList.css'
import { ProductsPropType } from '../../types/componentTypes'


const ItemList = ({productos}:ProductsPropType) => {
  return (
    <div className='contenedorProductos'>
      {productos.map(item => <Item key={item.id}{...item} />)}
    </div>
  )
}

export default ItemList