import { ButtonPropType, SearchPropType } from "../../../types/uiTypes";
import Button from "../../ui/Button";
import { categories } from "../../../services/gamesMock";



function Categories({scss,onClickEvent,cleanCategory}:SearchPropType) {
    let onClick:(category:string) => void;
    if (onClickEvent) {
        onClick=onClickEvent
    }

    return ( 
<div className="categories-container" >
        {categories.map((category) => <Button key={category.name} onClickEvent={()=>onClick(category.name)}>{category.name}</Button>)}
        {/* {categories.map((category) => <button onClick={()=>onClick(category)}>{category}</button>)} */}
        {/* <input style={{width:'auto'}} placeholder="Search" onChange={handleEvent}/>
        <Button></Button> */}
        <button onClick={()=>cleanCategory}>Todos</button>
       
</div>
     );
}

export default Categories;