import Button from "./button"
import { CardPropType } from "../../types/uiTypes"


export const Card = ({scss='card',text}:CardPropType) => {

    return (
        <>
            <div className={scss}>
                <p>Card</p>
                <p>Title</p>
                <Button />
            </div>
        </>
    )
}
export const CardText = ({scss='card',text}:CardPropType) => {

    return (
        <>
            <div className={scss}>
          <p className="negativo">
            
            {text}
            </p>
            </div>
        </>
    )
}

