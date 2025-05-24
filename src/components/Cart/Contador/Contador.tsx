import { useState } from "react";
import "./Contador.css"
import { GameCartItemType } from "../../../types/componentTypes";

interface ContadorType {
    inicial:number,
    producto: GameCartItemType,
    funcionAgregar:(quantity:number) => void

}
const Contador = ({ inicial, producto, funcionAgregar }:ContadorType) => {
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

//* Con un stock en 0, se ve el boton agregar al carrito pero solo avisa que no hay, me gustaria renderizar algo en pantalla
//* Los que no tienen stock
    if (producto.stock < contador) {
        setContador(0)
    }

    return (
        <>
            <div className="divContador">
                {/* <button className="btn" onClick={restaContdor}> - </button> */}
                {/* <strong>{contador}</strong> */}
                {/* <button className="btn" onClick={sumaContador}> + </button> */}
                <div >
                    <button className="btnAgregar" onClick={() => {contador > 0 ? funcionAgregar(contador) : alert('Ups, se acabaron');
                    }}>Agregar al carrito</button>
                </div>
            </div>
        </>
    )
}

export default Contador