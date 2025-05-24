import { useState, createContext, } from "react"
import { ChildrenContextProps, CartContextType, GameCartType, BasicProductType } from "../../types/componentTypes";

export const CartContext = createContext<CartContextType>({
    cart: [],
    total: 0,
    totalQuantity: 0,
    addToCart: () => {},
    eraseProduct: () => {},
    cleanCart: () => {}
    
});

export const CartProvider = ({ children }:ChildrenContextProps) => {

    const [cart, setCart] = useState<GameCartType[]>([]);
    const [total, setTotal] = useState(0);
    const [totalQuantity, setTotalQuantity] = useState(0);
//  * Añade varios productos al Cart,puede sumar varias cantidades del mismo producto, pero el boton de comprar solo agregara 1
    const addToCart = ({item, quantity}:GameCartType) => {
        console.log({item,quantity,price:item.price,name:item.name});
        const existingProduct = cart.find(prod => prod.item.id === item.id);

        if (!existingProduct) {
            setCart(prev => [...prev, {item, quantity }]);
            setTotalQuantity(prev => prev + quantity);
            setTotal(prev => prev + (item.price ? item.price * quantity : prev));
        } else {
            const updatedCart = cart.map(prod => prod.item.id === item.id ? { ...prod, quantity: prod.quantity + quantity } : prod)
            
            
            setCart(updatedCart);
            setTotalQuantity(prev => prev + quantity);
            setTotal(prev => prev + (item.price ? item.price + quantity : prev));
        }
    }

    const eraseProduct = ({id}:BasicProductType) => {
        const updatedCart = cart.filter(prod => prod.item.id !== id);
        const eliminatedProduct = cart.find(prod => prod.item.id === id);

        setCart(updatedCart);
        if (eliminatedProduct) {
            setTotalQuantity(prev => prev -  eliminatedProduct.quantity);
            
            if (eliminatedProduct.item) {
                
                setTotal(prev => prev - (eliminatedProduct.item.price ? eliminatedProduct.item.price* eliminatedProduct.quantity: prev));
            }
        }
    }

    const cleanCart = () => {
        setCart([]);
        setTotalQuantity(0);
        setTotal(0);
    }

    return (

        <CartContext.Provider value=
            {{ cart, total, totalQuantity, addToCart, eraseProduct, cleanCart }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider

