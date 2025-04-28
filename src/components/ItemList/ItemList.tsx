import Item from '../Item/Item'
import './ItemList.css'

export type ProductsType = {
  id:string, 
  name?: string, 
  price?: number, 
  img?: string, 
  stock?: number 
}

export type ProductsPropType = {
  productos: ProductsType[]
}


const ItemList = ({productos}:ProductsPropType) => {
  return (
    <div className='contenedorProductos'>
      {productos.map(item => <Item key={item.id}{...item} />)}
    </div>
  )
}

export default ItemList