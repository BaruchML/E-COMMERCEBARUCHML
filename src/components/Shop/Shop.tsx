import { useState } from "react";
import ItemListContainer from "./ItemList/ItemListContainer";
import Container from "../ui/container";
import SideBar from "./SideBar/SideBar";
import { ProductsType } from "../../types/componentTypes";

function Shop() {
    const [query, setQuery] = useState('')

    const handleSearch = (e:React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
        
        setQuery(e.target.value);
    }
   
    return (
        <Container clean scss="container-shop">
            <SideBar handleEvent={handleSearch} />
            <ItemListContainer queryMock={query} />
        </Container>
    );
}

export default Shop;