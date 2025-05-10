import { useState } from "react";
import ItemListContainer from "../Item/ItemListContainer/ItemListContainer";
import Container from "../ui/container";
import SideBar from "./SideBar";
import { ProductsType } from "../../types/componentTypes";

function Shop() {
    const [query, setQuery] = useState('')

    const handleSearch = (e:React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
        
        setQuery(e.target.value);
    }
   
    return (
        <Container scss="container-shop">
            <SideBar handleEvent={handleSearch} />
            <ItemListContainer />
        </Container>
    );
}

export default Shop;