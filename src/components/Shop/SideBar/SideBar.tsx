import { SearchPropType } from "../../../types/uiTypes";
import Search from "./Search";

function SideBar({handleEvent}:SearchPropType) {

    return ( 
        <>
        <div className="container-sidebar">
            SideBar
        <Search handleEvent={handleEvent}/>
        </div>
        
        </>
     );
}

export default SideBar;