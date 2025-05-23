
import { SearchPropType } from "../../../types/componentTypes";
import Button from "../../ui/Button";
import { categories } from "../../../services/gamesMock";



function Categories({onClickEvent,cleanCategory}:SearchPropType) {
    let onClick:(category:string) => void;
    if (onClickEvent) {
        onClick=onClickEvent
    }

    
    return ( 
<div className="categories-container" >
        {categories.map((category) => <Button key={category.name} onClickEvent={()=>onClick(category.name)}>{category.name}</Button>)}
        <button onClick={cleanCategory}>Todos</button>
       
</div>
     );
}

export default Categories;