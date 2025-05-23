import { useState } from "react";
import ItemListContainer from "./ItemList/ItemListContainer";
import Container from "../ui/container";
import SideBar from "./SideBar/SideBar";


function Shop() {
    const [query, setQuery] = useState('')
    const [categoryGame, setCategoryGame] = useState<string | null>(null)

    const handleQuerySearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log({ query: e.target.value });
        setCategoryGame(null)
        setQuery(e.target.value);
    }
    const handleCategory = (category: string) => {
        console.log(category);
        setQuery('')
        setCategoryGame(category)
    }
    const cleanSearch = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        setQuery('')
        setCategoryGame(null)
    }

    return (
        <Container clean scss="container-shop">
            <SideBar handleEvent={handleQuerySearch} onClickEvent={handleCategory} cleanCategory={cleanSearch} queryMock={query} />
            <ItemListContainer queryMock={query} category={categoryGame} />
        </Container>
    );
}

export default Shop;