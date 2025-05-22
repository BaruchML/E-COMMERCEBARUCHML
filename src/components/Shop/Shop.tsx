import { useState } from "react";
import ItemListContainer from "./ItemList/ItemListContainer";
import Container from "../ui/container";
import SideBar from "./SideBar/SideBar";
import { ProductsType } from "../../types/componentTypes";

function Shop() {
    const [query, setQuery] = useState('')
    const [categoryGame , setCategoryGame] = useState<string | null>(null)

    const handleSearch = (e:React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
        
        setQuery(e.target.value);
    }
    const handleCategory = (category:string) => {
        console.log({category});
        
        setCategoryGame(category)
    }
    const cleanCategory = () => {
        console.log('si llego');
        
        setCategoryGame(null)
    }
//    const handleCategory = ()
    return (
        <Container clean scss="container-shop">
            <SideBar handleEvent={handleSearch} onClickEvent={handleCategory} cleanCategory={cleanCategory} />
            <ItemListContainer queryMock={query} category={categoryGame} />
        </Container>
    );
}

export default Shop;