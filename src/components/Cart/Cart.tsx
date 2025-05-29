import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom"
import CartItem from "./CartItem/CartItem";
import './Cart.css'
import { UserContext } from "../context/UserContext";
import Container from "../ui/container";
import Button from "../ui/Button";
import Login from "../Login/Login";

const Cart = () => {
    const { user, logOut, } = useContext(UserContext)
    const { cart, cleanCart, total, totalQuantity } = useContext(CartContext);
    console.log(user);
    if (!user) {
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
                    <h2>No hay productos en el carrito.</h2>
                    <Link to="/shop"><Button>Ver Productos</Button></Link>
                    <Button onClickEvent={logOut} >Cerrar Sesion</Button>
                </Container>
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