import { useState, useContext, FormEvent } from 'react';
import { CartContext, } from '../context/CartContext';
// import { db } from '../../services/config';
// import { collection, addDoc, updateDoc, doc, getDoc } from 'firebase/firestore';
import "./Checkout.css"
import { GameOrderType } from '../../types/componentTypes';
import { UserContext } from '../context/UserContext';
import Register from '../Login/Register';
import Cart from '../Cart/Cart';
import { Link } from 'react-router-dom';

const Checkout = () => {

    const [ordenId, setOrdenId] = useState("");

    const { cart, cleanCart, total, totalQuantity } = useContext(CartContext);
    const { user } = useContext(UserContext)

    interface OrderType {
        items: GameOrderType[],
        totalProducts: number,
        totalPrice: number,
        fecha: Date,
        nombre: string,
        apellido: string,
        telefono: string,
        email: string

    }

    if (!user) {
        return (
            <Register></Register>
        )
    } else if (cart.length === 0) {
        return (
            <Cart />
        )
    }
const purchase = () => {

    cleanCart()
}

return (
    <div className='contenedorCh'>
        <h2>Checkout</h2>
        {
            cart.map(producto => (
                <div className="orden" key={producto.item.id}>
                    <p>{producto.item.name} x {producto.quantity}</p>
                    <p>{producto.item.price}</p>
                </div>
            ))
        }
<Link to={'/purchase'}><button onClick={purchase}>Terminar Compra</button></Link>

    </div>
)
}

export default Checkout
    // const [nombre, setNombre] = useState("");
    // const [apellido, setApellido] = useState("");
    // const [telefono, setTelefono] = useState("");
    // const [email, setEmail] = useState("");
    // const [emailConfirmacion, setEmailConfirmacion] = useState("");
    // const [error, setError] = useState("");
    // const manejadorFormulario = (event: FormEvent) => {
    //     event.preventDefault();

    //     const orden:OrderType = {
    //         items: cart.map(producto => {
    //             return{
    //                 item:{id:producto.item.id,
    //                     name:producto.item.name,
    //                 },
    //                 quantity:producto.quantity
    //             }
    //         }),
    //         totalProducts: total,
    //         totalPrice:totalQuantity,
    //         fecha: new Date(),
    //         nombre:user.userData.name,
    //         apellido:user.userData.lastName,
    //         telefono:user.userData.phoneNumber,
    //         email:user.userData.email
    //     };

    //     Promise.all(
    //         orden.items.map(async (productoOrden) => {
    //             const productoRef = doc(db, "productos", productoOrden.item.id);
    //             const productoDoc = await getDoc(productoRef);
    //             if (productoDoc.exists()) {
    //                 console.log("Document data:", productoDoc.data());
    //                 const stockActual = productoDoc.data().stock;
    //                 await updateDoc(productoRef, {
    //                     stock: stockActual - productoOrden.quantity
    //                 })
    //             } else {
    //                 console.log("No such document!");
    //             }
    //         })
    //     )
    //         .then(() => {
    //             addDoc(collection(db, "ordenes"), orden)
    //                 .then(docRef => {
    //                     setOrdenId(docRef.id);
    //                     cleanCart();
    //                 })
    //                 .catch(error => {
    //                     console.log("Error al crear la orden", error);
    //                     setError("Se produjo un error al crear la orden,vamos a morir");
    //                 })

    //         })
    //         .catch((error) => {
    //             console.log("No se pudo actualizar el stock", error);
    //             setError("No se puede actualizar el stock");
    //         })

// }
{/* <form onSubmit={manejadorFormulario}>
        <div>
            <label htmlFor=''>Nombre</label>
            <input type="text" onChange={(e) => setNombre(e.target.value)} />
        </div>
        <div>
            <label htmlFor=''>Apellido</label>
            <input type="text" onChange={(e) => setApellido(e.target.value)} />
        </div>
        <div>
            <label htmlFor=''>Telefono</label>
            <input type="text" onChange={(e) => setTelefono(e.target.value)} />
        </div>
        <div>
            <label htmlFor=''>Email</label>
            <input type="email" onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
            <label htmlFor=''>Email Confirmación</label>
            <input type="email" onChange={(e) => setEmailConfirmacion(e.target.value)} />
        </div>
        {
            error && <p style={{ color: "red" }}>{error}</p>
        }

        <button className='btnCompra' type="submit">Confirmar Compra</button>
        {
            ordenId && (<strong>¡Gracias por su compra! tu
                numero de orden es {ordenId}
            </strong>)
        }

    </form> */}