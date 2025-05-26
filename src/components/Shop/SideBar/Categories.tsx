
import { SearchPropType } from "../../../types/componentTypes";
import Button from "../../ui/Button";
import { categories } from "../../../services/gamesMock";



function Categories({onClickEvent,cleanCategory}:SearchPropType) {

    let onClick:(category:string) => void;
    if (onClickEvent) {
        onClick=onClickEvent
    }

    
    return ( 
<div className="container-categories-sidebar" >
        <h3 className="container-categories-sidebar_title">Categorias</h3>
        <ul>
        {categories.map((category) => <li key={category.name}><Button onClickEvent={()=>{onClick(category.name)}}>{category.name}</Button></li>)}
        <li><Button onClickEvent={cleanCategory}>Todos</Button></li>
        </ul>
       
</div>
     );
}

export default Categories;