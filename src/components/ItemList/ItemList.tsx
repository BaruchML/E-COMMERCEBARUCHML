import Item from '../Item/Item'
import './ItemList.css'

export type ProductsType = {
  id:string, 
  nombre?: string, 
  precio?: string, 
  img?: string, 
  stock?: string 

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