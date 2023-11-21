import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { Link } from "react-router-dom"
import CartItem from "../CartItem/CartItem";
import './Cart.css'

const Cart = () => {
    const { carrito, vaciarCarrito, total, cantidadTotal } = useContext(CarritoContext);

    if (cantidadTotal === 0) {
        return (
            <>
                <div className="cartVacio">
                    <h2>No hay productos en el carrito. Compra o vete</h2>
                    <Link to="/"><button>Ver Productos</button></Link>
                </div>
                <hr />
            </>
        )
    }

    return (
        <div className="divCardContainer">
            <div>
                {
                    carrito.map(producto => <CartItem key={producto.item.id} {...producto} />)

                }
            </div>
            <div className="divCard">
                <h2>Resumen de Compra</h2>
                <p> Total de piezas: {cantidadTotal}</p>
                <p> Total: ${total}</p>
                <button className="btnVaciarCompra" onClick={() => vaciarCarrito()}> Vaciar Carrito</button>
                <Link to="/checkout"><button className="btnFinCompra">Continuar Compra</button></Link>
            </div>

        </div>
    )
}

export default Cart