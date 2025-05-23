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

    const sumaContador = () => {
        if (producto.stock && contador < producto.stock ) {
            setContador(contador + 1)
        }
    }
    const restaContdor = () => {
        if (contador > inicial) {
            setContador(contador - 1)
        }
    }



    return (
        <>
            <div className="divContador">
                <button className="btn" onClick={restaContdor}> - </button>
                <strong>{contador}</strong>
                <button className="btn" onClick={sumaContador}> + </button>
                <div >
                    <button className="btnAgregar" onClick={() => funcionAgregar(contador)}>Agregar al carrito</button>
                </div>
            </div>
        </>
    )
}

export default Contador