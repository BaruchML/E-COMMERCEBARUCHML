import Button from "./Button"
import { CardFooterPropType, CardPropType } from "../../types/uiTypes"
import { Link } from "react-router-dom"


export const Card = ({ scss }: CardPropType) => {

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
export const CardTextLeft = ({ scss, text, img, title }: CardPropType) => {

    return (
        <>
            <div className={`card ${scss}`}>
                <div className="card-img-text-container-ar-left">
                    <img src={img}></img>
                </div>
                <div className="card-center-info">
                    <div className="card-center-column">
                        <Link to={'/shop'}>
                            <h2>{title}</h2>
                            <p >{text}</p>
                            <Button scss="btn-link">Explora</Button>
                        </Link>

                    </div>
                </div>
            </div>
        </>
    )
}
export const CardTextRight = ({ scss, text, img, title }: CardPropType) => {

    return (
        <>
            <div className={`card ${scss}`}>
                <div className="card-center-info">
                    <div className="card-center-column">
                        <Link to={'/shop'}>
                            <h2>{title}</h2>
                            <p >{text}</p>
                            <Button scss="btn-link">Tienda</Button>
                        </Link>
                    </div>
                </div>
                <div className="card-img-text-container-ar-right">
                    <img src={img}></img>
                </div>
            </div>
        </>
    )
}

export const CardGameCarousel = ({ scss, text, title, img }: CardPropType) => {

    return (
        <>
            <div className={`card ${scss} `}>
                <div className="card_gameCarousel-img-container ">
                    <img src={img}></img>
                </div>
                <div className="card-center">
                    <p>{title}</p>
                    {text && text}
                    <Button scss="btn-carousel">Comprar</Button>
                </div>

            </div>
        </>
    )
}
export const CardGameSmall = ({ scss, text, title, img }: CardPropType) => {

    return (
        <>
            <div className={`card ${scss} `}>
                <div className="card-img-small-container-ar">

                    <img src={img}></img>
                </div>
                <div className="card-center">

                    <p>{title}</p>
                    {text && text}
                    <Button scss="btn-card-small">Ver mas</Button>
                </div>

            </div>
        </>
    )
}
export const CardNoticeSmall = ({ scss, text, title, img }: CardPropType) => {

    return (
        <>
            <div className={`card ${scss} `}>
                <div className="card-img-small-notice-container-ar">

                    <img src={img}></img>
                </div>
                <div className="card-center-notice">

                    <p>{title}</p>
                    <p>{text}</p>
                    <Button scss="btn-link">Leer mas</Button>
                </div>

            </div>
        </>
    )
}

export const CardFooter = ({ scss, list, title, demo }: CardFooterPropType) => {
    let demoOnly = (<p className="demo">DEMO ONLY</p>)
    return (
        <>
            <div className={`card ${scss} `}>
                <h3>{title} </h3>
                <ul>
                    {list && list.map((i, index) => {
                        return (
                            <li key={index}>
                                <Link to={i.link}>
                                    {i.subtitle}
                                </Link>
                            </li>)
                    }
                    )
                    }
                </ul>
                {demo && demoOnly}
            </div>
        </>
    )
}