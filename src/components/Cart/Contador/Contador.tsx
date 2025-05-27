import { useState } from "react";
import { GameCartItemType } from "../../../types/componentTypes";
import { Link } from "react-router-dom";
import Button from "../../ui/Button";

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



    return (
        <>
            <div className="divContador">
             {/* <button className="btn" onClick={restaContdor}> - </button>
             <strong>{contador}</strong>
             <button className="btn" onClick={sumaContador}> + </button> */}
                <div>
                    {producto.stock < contador
                        ? <div>
                            <p>Lo sentimos, estamos en espera de que lleguen mas copias de este juego. ¡Puedes ver más aqui!.</p>
                            <Link to={'/shop'}><Button scss="btn_item-detail">Ver mas Juegos </Button></Link></div>
                        : <Button scss="btn_item-detail" onClickEvent={() => { funcionAgregar(contador) }}>Agregar al carrito</Button>}

                </div>
            </div>
        </>
    )
}

export default Contador