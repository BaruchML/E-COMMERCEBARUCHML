import Button from "./Button"
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
export const CardText = ({scss='card',text,img}:CardPropType) => {

    return (
        <>
           <div className={`card ${scss}`}>
            <div className="card-img-container-ar">
            <img src={img}></img>

            </div>
          <p >{text}</p>
            </div>
        </>
    )
}

export const CardGame = ({scss,text,title,img}:CardPropType) => {

    return (
        <>
            <div className={`card ${scss} `}>
                <div className="card-img-container-ar">
                <img src={img}></img>
                </div>
                <div className="card-center">
                <p>{title}</p>
               { text && text}
                <Button scss="btn-carousel">Comprar</Button>
                </div>
                
            </div>
        </>
    )
}
export const CardGameSmall = ({scss,text,title,img}:CardPropType) => {

    return (
        <>
            <div className={`card ${scss} `}>
                <div className="card-img-small-container-ar">

                <img src={img}></img>
                </div>
                <div className="card-center">

                <p>{title}</p>
                {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore commodi quis voluptate adipisci dolore fugiat repellendus tempora, voluptatibus, fuga, ipsa est nam molestias. Vel earum ducimus eveniet eligendi. Voluptatum, consequuntur.</p> */}
                <Button scss="btn-card-small">Ver mas</Button>
                </div>
                
            </div>
        </>
    )
}
export const games = [
    {id:1,name:'Mario 64',img:'../../../public/img/mario_64.jpg'}
]