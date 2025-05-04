import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom"
import CartItem from "../CartItem/CartItem";
import './Cart.css'

const Cart = () => {
    const { cart, cleanCart, total, totalQuantity } = useContext(CartContext);

    if (totalQuantity === 0) {
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
                    cart.map(prod => <CartItem key={prod.item.id} {...prod} />)

                }
            </div>
            <div className="divCard">
                <h2>Resumen de Compra</h2>
                <p> Total de piezas: {totalQuantity}</p>
                <p> Total: ${total}</p>
                {
                    cleanCart && (<button className="btnVaciarCompra" onClick={() => cleanCart()}> Vaciar Carrito</button>)
                }
                
                <Link to="/checkout"><button className="btnFinCompra">Continuar Compra</button></Link>
            </div>

        </div>
    )
}

export default Cart