import { useState } from "react";
import ItemListContainer from "../Item/ItemListContainer/ItemListContainer";
import Container from "../ui/container";
import SideBar from "./SideBar";
import { ProductsType } from "../../types/componentTypes";

function Shop() {
    // const [product, setProduct] = useState<ProductsType>()
    // setProduct({id:'1'})
    const handleSearch = (productId:string) => {
        console.log({productId});
        
    }
    
    const handleHello = () => {
        console.log({si:'si'});
        // console.log({hola:'hola'});
        // setProduct({id:'2'})
        // console.log({product});
        
    }
   
    return (
        <Container scss="container-shop">
            <SideBar handleEvent={handleHello} />
            <ItemListContainer />
        </Container>
    );
}

export default Shop;