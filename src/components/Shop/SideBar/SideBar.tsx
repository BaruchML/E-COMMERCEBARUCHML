import { SearchPropType } from "../../../types/componentTypes";
import Categories from "./Categories";
import InputSearch from "./InputSearch";

function SideBar({ handleEvent, onClickEvent, cleanCategory, queryMock }: SearchPropType) {

    return (
        <>
            <div className="container-sidebar">
                <InputSearch handleEvent={handleEvent} queryMock={queryMock} />
                <Categories onClickEvent={onClickEvent} cleanCategory={cleanCategory} />
            </div>

        </>
    );
}

export default SideBar;