// import './ItemDetail.css'
import { useState } from 'react'
import { CartContext } from '../../context/CartContext';
import { useContext } from 'react';
import { GameCartType, FullProductType } from '../../../types/componentTypes';
import { CardItemDetail } from '../../ui/Card';
import Container from '../../ui/container';


const ItemDetail = ({ ...producto }: FullProductType) => {
  const [agregarCantidad, setAgregarCantidad] = useState<number>(0);
  const { addToCart } = useContext(CartContext);

  const handleQuantity = (quantity: number) => {
    setAgregarCantidad(quantity)

    if(producto.stock > 0){
      const handleItem: GameCartType = { item: { ...producto }, quantity: quantity };
      addToCart(handleItem)
    }

  }

  return (
    <>
      <Container scss="container-center">
      <CardItemDetail
          // img={producto.img}
          // title={producto.name}
          // price={producto.price}
          addQuantity={agregarCantidad}
          handleQuantity={handleQuantity}
          product={producto}
          scss='card-item-detail' />
      </Container>
    </>
  )
}

export default ItemDetail