import { useState } from "react";
import { GameCartItemType } from "../../../types/componentTypes";
import "./Contador.css"
import { Link } from "react-router-dom";

interface ContadorType {
    inicial: number,
    producto: GameCartItemType,
    funcionAgregar: (quantity: number) => void

}
const Contador = ({ inicial, producto, funcionAgregar }: ContadorType) => {
    const [contador, setContador] = useState(inicial);

    // const sumaContador = () => {
    //     if (producto.stock && contador < producto.stock ) {
    //         setContador(contador + 1)
    //     }
    // }

    // const restaContdor = () => {
    //     if (contador > inicial) {
    //         setContador(contador - 1)
    //     }
    // }

    //* Aunque tenga stock en 0, se ve el boton agregar al carrito pero solo avisa que no hay, me gustaria renderizar algo en pantalla
    //* Los que no tienen stock
    // if (producto.stock < contador) {
    //     setContador(0)
    // }

    return (
        <>
            <div className="divContador">
                {/* <button className="btn" onClick={restaContdor}> - </button> */}
                {/* <strong>{contador}</strong> */}
                {/* <button className="btn" onClick={sumaContador}> + </button> */}
                <div >
                    {producto.stock < contador
                        ? <div>
                            <p>Lo sentimos, estamos en espera de que lleguen mas copias de este juego. ¡Puedes ver más aqui!.</p>
                            <Link to={'/shop'}><button className="btnAgregar" onClick={() => { funcionAgregar(contador) }}>Ver mas Juegos </button></Link></div>
                        : <button className="btnAgregar" onClick={() => { funcionAgregar(contador) }}>Agregar al carrito</button>}

                </div>
            </div>
        </>
    )
}

export default Contador