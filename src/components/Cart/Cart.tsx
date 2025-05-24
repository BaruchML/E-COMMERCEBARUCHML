import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom"
import CartItem from "./CartItem/CartItem";
import './Cart.css'
import { UserContext } from "../context/UserContext";
import { Card } from "../ui/Card";
import Container from "../ui/container";
import Button from "../ui/Button";

const Cart = () => {
    const {user,state,logOut,loadUser} = useContext(UserContext)
    const { cart, cleanCart, total, totalQuantity } = useContext(CartContext);
if (!user) {
    return (
            <Container scss='container-center'>


        <Button onClickEvent={()=>loadUser({id:1,name:'baruch'})} >Log in</Button>
            </Container>
    )
}
    if (totalQuantity === 0) {
        return (
            <>
                     <Container scss='container-center'>
                    <h2>No hay productos en el carrito. Compra o vete</h2>
                    <Link to="/"><Button>Ver Productos</Button></Link>
                    <Button onClickEvent={logOut} >Log out</Button>
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