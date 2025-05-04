import {ButtonPropType}from'../../types/uiTypes'



const Button = ({handleEvent}:ButtonPropType) => {
    return (
        <>
        
        <button onClick={handleEvent}>Algo hace</button>
        </>
    )
}

export default Button