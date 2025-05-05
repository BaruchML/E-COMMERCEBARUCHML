import Button from "./button"
import { CardPropType } from "../../types/uiTypes"


const Card = ({scss='card'}:CardPropType) => {
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

export default Card