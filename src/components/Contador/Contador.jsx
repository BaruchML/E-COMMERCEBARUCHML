import { useState } from "react";

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
            <div>
                <button onClick={restaContdor}> - </button>
                <strong>{contador}</strong>
                <button onClick={sumaContador}> + </button>
            </div>
            <button onClick={() => funcionAgregar(contador)}>Agregar al carrito</button>
        </>
    )
}

export default Contador