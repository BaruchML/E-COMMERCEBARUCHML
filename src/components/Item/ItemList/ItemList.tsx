import Item from '../Item'
import { ProductsPropType } from '../../../types/componentTypes'


const ItemList = ({productos}:ProductsPropType) => {
  return (
    <div className='container-side-items_items'>
      {productos.map(item => <Item key={item.id}{...item} />)}
    </div>
  )
}

export default ItemList