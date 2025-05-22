import { SearchPropType } from "../../../types/uiTypes";
import Categories from "./Categories";
import Search from "./Search";

function SideBar({handleEvent,onClickEvent,cleanCategory}:SearchPropType) {

    return ( 
        <>
        <div className="container-sidebar">
            SideBar
        <Search handleEvent={handleEvent}/>
        <Categories onClickEvent={onClickEvent} cleanCategory={cleanCategory}/>
        </div>
        
        </>
     );
}

export default SideBar;