import {ButtonCategoryPropType, ButtonPropType}from'../../types/uiTypes'
import { useState } from 'react';


const Button = ({onClickEvent,scss,children = 'button',}:ButtonPropType) => {

    return (
        <>
        
        <button className={`btn ${scss}`} onClick={onClickEvent}>{children}</button>
        </>
    )
}

export default Button

const ButtonCategorySearch =  ({onClickEvent,scss,children = 'button',selected}:ButtonCategoryPropType) => {

    return (
        <>
        <button className={`btn ${scss}`} onClick={onClickEvent}>{children}</button>
        </>
    )
}