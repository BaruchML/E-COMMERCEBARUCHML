import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom"
import './Cart.css'
import { UserContext } from "../context/UserContext";
import Container from "../ui/container";
import Button from "../ui/Button";
import Login from "../Login/Login";
import { CardCartItem } from "../ui/Card";
import NewsCart from "./NewsCart";
import { formatCurrency } from "../../utils/formatCurrency";

const Cart = () => {
    const { user, logOut, } = useContext(UserContext)
    const { cart, cleanCart, total, totalQuantity,eraseProduct } = useContext(CartContext);

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
        <>

        <Container cleanGrey title="Carrito" scss="container-cart"> 
            <div className="container-cart-items">
                {
                    cart.map(prod => <CardCartItem eraseProduct={eraseProduct} key={prod.item.id} game={prod} />)
                }
            </div>
            <div className="container-cart-summary">
                <h2>Resumen de Compra</h2>
                <p> Total de piezas: {totalQuantity}</p>
                <p> Total: {formatCurrency(total)}</p>
                {
                    cleanCart && (<Button scss="container-cart-sumary_btn" onClickEvent={() => cleanCart()}> Vaciar Carrito</Button>)
                }

                <Link to="/checkout"><Button scss="container-cart-sumary_btn-buy">Continuar Compra</Button></Link>
            </div>

        </Container>
            <NewsCart/>
        </>
    )
}

export default Cart