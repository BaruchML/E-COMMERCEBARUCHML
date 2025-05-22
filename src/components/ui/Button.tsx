import {ButtonPropType}from'../../types/uiTypes'



const Button = ({handleEvent,onClickEvent,scss,children = 'button'}:ButtonPropType) => {
    return (
        <>
        
        <button className={`btn ${scss}`} onClick={onClickEvent}>{children}</button>
        </>
    )
}

export default Button