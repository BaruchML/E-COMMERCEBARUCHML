//1) Voy a importar de react createContext que me permite crear
//un contexto que almacenara toda la logica de mi carrito de compras

import { useState, createContext, Children } from "react"

//2) Creamos el contexto.

export const CarritoContext = createContext({
    carrito: [],
    total: 0,
    cantidadTotal: 0
});

//El valor inicial es un objeto con la propiedad carrito, que es un array 
//vacio, total y cantidadTotal

 export const CarritoProvider = ({children}) => {
    //Creamos el estado para el carrito, total y cantidadTotal

    const [carrito, setCarrito] = useState([]);
    const [total, setTotal] = useState(0);
    const [cantidadTotal, setCantidadTotal] = useState(0);

    //Verificamos por consola: (Despues lo borramos!)
    console.log(carrito);


    //4) agregamos funciones auxiliares parala logica del carrito
    const agregarAlCarrito = (item, cantidad) => {
            const productoExistente = carrito.find(prod => prod.item.id === item.id);        

            if(!productoExistente) {
                setCarrito(prev => [...prev, {item,cantidad}]);
                setCantidadTotal(prev => prev + cantidad);
                setTotal(prev => prev + (item.precio * cantidad));
                //la sintaxis: prev => [...prev, {item,cantidad}] se utiliza para crear
                //nuevo array a partir del estado anterior del carrito 
                //y agregar un nuevo objeto que representa e, producto agregado
            } else {
                const carritoActualizado = carrito.map (prod => {
                    if(prod.item.id === item.id) {
                        return {...prod,cantidad: prod.cantidad + cantidad};
                    } else {
                        return prod;
                    }                
                })
                setCarrito(carritoActualizado);        
                setCantidadTotal(prev => prev + cantidad);
                setTotal(prev => prev + (item.precio * cantidad));
            }
                
                
    }
    //funcion para eliminar producto:
    const eliminarProducto = (id) => {
        const carritoActualizado = carrito.filter(prod => prod.item.id !== id);
        const productoEliminado = carrito.find(prod => prod.item.id ===id);
        
        setCarrito(carritoActualizado);
        setCantidadTotal(prev => prev - productoEliminado.cantidad);
        setTotal(prev => prev - productoEliminado.item.precio * productoEliminado.cantidad);


    }
    //funcion para vaciar el carrito:
    const vaciarCarrito = () => {
        setCarrito([]);
        setCantidadTotal([0]);
        setTotal([0]);
    }
    

  return (
    
    <CarritoContext.Provider value=
    {{carrito,total, cantidadTotal,agregarAlCarrito,eliminarProducto,vaciarCarrito}}>

    {children}        
        
    </CarritoContext.Provider>
  )
}

export default CarritoProvider

// En el value enviamos el valor actual del carrito, los items, el total de
// las funciones a agregar, eliminar y vaciar carrito.

//Children, usamos esta propiedad especial para representar a todos aquellos 
//componentes que puedan necesitar el carrito y sus funciones.
