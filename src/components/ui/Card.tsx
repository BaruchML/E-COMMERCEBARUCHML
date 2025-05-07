import Button from "./button"
import { CardPropType } from "../../types/uiTypes"


export const Card = ({scss,text}:CardPropType) => {

    return (
        <>
            <div className={`card ${scss}`}>
                <p>Card</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore commodi quis voluptate adipisci dolore fugiat repellendus tempora, voluptatibus, fuga, ipsa est nam molestias. Vel earum ducimus eveniet eligendi. Voluptatum, consequuntur.</p>
                <Button />
            </div>
        </>
    )
}
export const CardText = ({scss='card',text}:CardPropType) => {

    return (
        <>
           <div className={`card ${scss}`}>
          <p className="negativo">
            
            {text}
            </p>
            </div>
        </>
    )
}

