// //VERSION SIMPLE:
// import { useState, useEffect, useContext } from 'react';
// import { CarritoContext } from '../../context/CarritoContext';
// import { db } from '../../services/config';
// import { collection, addDoc } from 'firebase/firestore';


// import React from 'react'

// const Checkout = () => {
//     const [nombre, setNombre] = useState("");
//     const [apellido, setApellido] = useState("");
//     const [telefono, setTelefono] = useState("");
//     const [email, setEmail] = useState("");
//     const [emailConfirmacion, setEmailConfirmacion] = useState("");
//     const [error, setError] = useState("");
//     const [ordenId, setOrdenId] = useState("");

//     const { carrito, vaciarCarrito, total, totalCantidad } = useContext(CarritoContext);


//     //FUNCIONES Y VALIDACIONES
//     const manejadorFormulario = (event) =>{
//         event.preventDefault();
//         //verificamos que los campos esten completos
//         if(!nombre || !apellido || !telefono || !email || !emailConfirmacion){
//             setError("Porfavor completa los campos");
//             return;
//         }
//         // validamos que los campos coincidan
//         if(email !== emailConfirmacion){
//             setError("Los campos del email no coinciden, maldito");
//             return;
//         }

//         //1)creamos un objeto con todos los datos de la orden de copra:

//         const orden = {
//             items: carrito.map(producto => ({
//                 id: producto.item.id,
//                 nombre: producto.item.nombre,
//                 producto: producto.cantidad,
//             })),
//             total: total,
//             fecha: new Date(),
//             nombre,
//             apellido,
//             telefono,
//             email
//         };

//         //2) Guardar la orden en la base de datos
//         addDoc(collection (db, "ordenes"), orden)
//             .then(docRef => {
//                 setOrdenId(docRef.id);
//                 vaciarCarrito();
//             })
//             .catch(error => {
//                 console.log("Error al crear la orden",error);
//                 setError("Se produjo un error al crear la orden,vamos a morir");
//             })

//     }
    
//     return (
//         <div>
//             <h2>Checkout</h2>

//             <form onSubmit={manejadorFormulario}>
//                 {
//                     carrito.map(producto => (
//                         <div key={producto.item.id}>
//                             <p>{producto.item.nombre} x {producto.totalCantidad}</p>
//                             <p>{producto.item.precio}</p>
//                             <hr />
//                         </div>
//                     ))


//                 }
//                 <div>
//                     <label htmlFor=''>Nombre</label>
//                     <input type="text" onChange={(e) => setNombre(e.target.value)}/>
//                 </div>
//                 <div>
//                     <label htmlFor=''>Apellido</label>
//                     <input type="text" onChange={(e) => setApellido(e.target.value)}/>
//                 </div>
//                 <div>
//                     <label htmlFor=''>Telefono</label>
//                     <input type="text" onChange={(e) => setTelefono(e.target.value)}/>
//                 </div>
//                 <div>
//                     <label htmlFor=''>Emai</label>
//                     <input type="email"onChange={(e) => setEmail(e.target.value)}/>
//                 </div>
//                 <div>
//                     <label htmlFor=''>Email Confirmación</label>
//                     <input type="email"onChange={(e) => setEmailConfirmacion(e.target.value)}/>
//                 </div>
//                 {
//                     error && <p style={{color:"red"}}>{error}</p>
//                 }

//                 <button type="submit">Confirmar Compra</button>
//                 {
//                     ordenId && (<strong>¡Gracias por su compra! tu 
//                         numero de orden es {ordenId}
//                     </strong>)
//                 }

//             </form>


//         </div>
//     )
// }

// export default Checkout


//VERSION CON DESCUENTO DE STOCK

import { useState, useEffect, useContext } from 'react';
import { CarritoContext } from '../../context/CarritoContext';
import { db } from '../../services/config';
import { collection, addDoc, updateDoc, doc, getDoc } from 'firebase/firestore';
import React from 'react'

const Checkout = () => {
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [emailConfirmacion, setEmailConfirmacion] = useState("");
    const [error, setError] = useState("");
    const [ordenId, setOrdenId] = useState("");

    const { carrito, vaciarCarrito, total, totalCantidad } = useContext(CarritoContext);


    //FUNCIONES Y VALIDACIONES
    const manejadorFormulario = (event) =>{
        event.preventDefault();
        //verificamos que los campos esten completos
        if(!nombre || !apellido || !telefono || !email || !emailConfirmacion){
            setError("Porfavor completa los campos");
            return;
        }
        // validamos que los campos coincidan
        if(email !== emailConfirmacion){
            setError("Los campos del email no coinciden, maldito");
            return;
        }

        //1)creamos un objeto con todos los datos de la orden de copra:

        const orden = {
            items: carrito.map(producto => ({
                id: producto.item.id,
                nombre: producto.item.nombre,
                cantidad: producto.cantidad,
            })),
            total: total,
            fecha: new Date(),
            nombre,
            apellido,
            telefono,
            email
        };

        //////////////////////////////////////////////////////

        //Vamos a modificar el codigo apra que ejecute varias promesas en paraelo
        //por un lado que actualize el stock de productos y por el otro lado
        // que genere una orden de compra.
        //Vamos a usar Promise.All

        Promise.all(
            orden.items.map(async(productoOrden) => {
                const productoRef = doc(db,"productos", productoOrden.id);
                //Por cada producto en la coleccion "productos"
                //obtengo una referencia  y a partir de esa referencia
                //obtengo el DOC.

                const productoDoc = await getDoc(productoRef);
                const stockActual = productoDoc.data().stock;

                //Data es un metodo que me permite acceder a la info del documento
                
                await updateDoc (productoRef,{
                    stock: stockActual - productoOrden.cantidad
                })
                 //Modifico el stock y subo la informacion actualizada
            })
        )
        .then(() => {
            //Guardamos la orden en la base de datos 
            addDoc(collection (db, "ordenes"), orden)
            .then(docRef => {
                setOrdenId(docRef.id);
                vaciarCarrito();
            })
            .catch(error => {
                console.log("Error al crear la orden",error);
                setError("Se produjo un error al crear la orden,vamos a morir");
            })

        })
        .catch((error) => {
            console.log("No se pudo actualizar el stock",error);
            setError("No se puede actualizar el stock");
        })

    }
    
    return (
        <div>
            <h2>Checkout</h2>

            <form onSubmit={manejadorFormulario}>
                {
                    carrito.map(producto => (
                        <div key={producto.item.id}>
                            <p>{producto.item.nombre} x {producto.cantidad}</p>
                            <p>{producto.item.precio}</p>
                            <hr />
                        </div>
                    ))


                }
                <div>
                    <label htmlFor=''>Nombre</label>
                    <input type="text" onChange={(e) => setNombre(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor=''>Apellido</label>
                    <input type="text" onChange={(e) => setApellido(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor=''>Telefono</label>
                    <input type="text" onChange={(e) => setTelefono(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor=''>Emai</label>
                    <input type="email"onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor=''>Email Confirmación</label>
                    <input type="email"onChange={(e) => setEmailConfirmacion(e.target.value)}/>
                </div>
                {
                    error && <p style={{color:"red"}}>{error}</p>
                }

                <button type="submit">Confirmar Compra</button>
                {
                    ordenId && (<strong>¡Gracias por su compra! tu 
                        numero de orden es {ordenId}
                    </strong>)
                }

            </form>


        </div>
    )
}

export default Checkout