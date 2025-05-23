import { ButtonPropType, SearchPropType } from "../../../types/uiTypes";
import Button from "../../ui/Button";

function Search({scss,handleEvent,query}:SearchPropType) {
    const onClick = handleEvent
    // console.log({searched:query});
    
    return ( 
<div >
        <input style={{width:'auto'}} placeholder="Search" onChange={handleEvent} value={query}/>
        <Button></Button>
       
</div>
     );
}

export default Search;