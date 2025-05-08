import {ButtonPropType}from'../../types/uiTypes'



const Button = ({handleEvent = ()=>console.log({no:'no'}),scss,children = 'button'}:ButtonPropType) => {
    return (
        <>
        
        <button className={`btn ${scss}`} onClick={()=>handleEvent}>{children}</button>
        </>
    )
}

export default Button