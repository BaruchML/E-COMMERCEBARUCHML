import {ButtonPropType}from'../../types/uiTypes'



const Button = ({handleEvent,scss,children = 'button'}:ButtonPropType) => {
    return (
        <>
        
        <button className={`btn ${scss}`} onClick={handleEvent}>{children}</button>
        </>
    )
}

export default Button