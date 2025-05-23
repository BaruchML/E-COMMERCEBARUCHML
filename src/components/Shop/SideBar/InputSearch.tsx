import {SearchPropType } from "../../../types/componentTypes";

function InputSearch({handleEvent,queryMock}:SearchPropType) {
    return ( 
<div >
        <input style={{width:'auto'}} placeholder="Busqueda" onChange={handleEvent} value={queryMock}/>
       
</div>
     );
}

export default InputSearch;