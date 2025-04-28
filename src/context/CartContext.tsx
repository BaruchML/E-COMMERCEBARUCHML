import { useState, createContext, } from "react"
import { ProductsType } from "../components/ItemList/ItemList";

interface CartContextProps {
    children?: React.ReactNode;
}


export interface ItemType {
    item: ProductsType,
    quantity:number
}
export interface CartContextType {
    cart: ItemType[],
    total:number,
    totalQuantity:number,
    addToCart:({item,quantity}:ItemType) => void,
    eraseProduct:({id}:ProductsType) => void,
    cleanCart:() => void

}
export const CartContext = createContext<CartContextType>({
    cart: [],
    total: 0,
    totalQuantity: 0,
    addToCart: () => {},
    eraseProduct: () => {},
    cleanCart: () => {}
    
});

export const CartProvider = ({ children }:CartContextProps) => {

    const [cart, setCart] = useState<ItemType[]>([]);
    const [total, setTotal] = useState(0);
    const [totalQuantity, setTotalQuantity] = useState(0); //cambiar el nombre

    const addToCart = ({item, quantity}:ItemType) => {
        console.log({item});
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

    const eraseProduct = ({id}:ProductsType) => {
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

