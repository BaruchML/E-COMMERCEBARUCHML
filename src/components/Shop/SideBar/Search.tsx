import { ButtonPropType, SearchPropType } from "../../../types/uiTypes";
import Button from "../../ui/Button";

function Search({scss,handleEvent}:SearchPropType) {
    const onClick = handleEvent
    return ( 
<div >
        <input style={{width:'auto'}} placeholder="Search" onChange={handleEvent}/>
        <Button></Button>
       
</div>
     );
}

export default Search;