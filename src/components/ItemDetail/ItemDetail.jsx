import './ItemDetail.css'

const ItemDetail = ({id, nombre, precio, img}) => {
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
        
    </div>
  )
}

export default ItemDetail