import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom"
import './Cart.css'
import { UserContext } from "../context/UserContext";
import Container from "../ui/container";
import Button from "../ui/Button";
import Login from "../Login/Login";
import { CardCartItem } from "../ui/Card";

const Cart = () => {
    const { user, logOut, } = useContext(UserContext)
    const { cart, cleanCart, total, totalQuantity } = useContext(CartContext);

    if (!user || user.state != 'logged') {
        return (
            <>
                <Login />
            </>

        )
    }
    if (totalQuantity === 0) {
        return (
            <>
                <Container clean scss='container-center'>
                    <div className="empty-cart">
                        <h2>No hay productos en el carrito.</h2>
                        <Link to="/shop"><Button>Ver Productos</Button></Link>
                        <Button onClickEvent={logOut} >Cerrar Sesion</Button>
                    </div>
                </Container>
                <hr />
            </>
        )
    }

    return (
        <Container scss="container-cart">
            <div className="container-cart-items">
                {
                    cart.map(prod => <CardCartItem key={prod.item.id} {...prod} />)
                }
            </div>
            <div className="container-cart-summary">
                <h2>Resumen de Compra</h2>
                <p> Total de piezas: {totalQuantity}</p>
                <p> Total: ${total}</p>
                {
                    cleanCart && (<button className="btnVaciarCompra" onClick={() => cleanCart()}> Vaciar Carrito</button>)
                }

                <Link to="/checkout"><button className="btnFinCompra">Continuar Compra</button></Link>
            </div>

        </Container>
    )
}

export default Cart