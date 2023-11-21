import { useState } from "react";
import "./Contador.css"

const Contador = ({ inicial, stock, funcionAgregar }) => {
    const [contador, setContador] = useState(inicial);

    const sumaContador = () => {
        if (contador < stock) {
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