import Button from "./Button"
import { CardFooterPropType, CardItemPropType, CardPropType } from "../../types/uiTypes"
import { Link } from "react-router-dom"
import Contador from "../Cart/Contador/Contador"
import { formatCurrency } from "../../utils/formatCurrency"


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

export const CardGameCarousel = ({ scss, text, title, img, id }: CardPropType) => {

    return (
        <>
            <div className={`card ${scss} `}>
                <div className="card_gameCarousel-img-container ">
                    <img src={img}></img>
                </div>
                <div className="card-center">
                    <p>{title}</p>
                    {text && text}

                    <Link to={`/item/${id}`}>
                        <Button scss="btn-carousel">Comprar</Button>
                    </Link>
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

export const CardItemDetail = ({ scss, addQuantity, handleQuantity, product }: CardItemPropType) => {

    return (
        <>
            <div className={`card ${scss}`}>
                <div className="card-item-detail_img-ar">
                    <img src={product.img[0]} alt={product.name}></img>
                </div>
                <div className="card-item-detail_info">
                    <div className="card-item-detail_column">
                        <div className="card-item-detail-column_info ">

                            <h1>{product.name}</h1>
                            <p>Fecha de lanzamiento: {product.info.lunchDate}</p>
                            <p>Consola: {product.info.console}</p>
                            <p>Cantidad de Jugadores: {product.info.numberOfPlayers}</p>

                        </div>
                        <div className="card-item-detail-column_info ">
                            <h2 >{formatCurrency(product.price)}</h2>
                            {addQuantity > 0 
                                ? (<Link to="/cart"><Button scss='btn_item-detail'>Terminar Compra</Button></Link>)
                                : (<Contador inicial={1} producto={product}
                                    funcionAgregar={handleQuantity} />)
                            }
                            {addQuantity > 0 && <Link to={'/shop'}><Button scss="btn_item-detail">Ver mas Juegos </Button></Link>}
                        </div>
                     
                    </div>

                </div>
            </div>
        </>
    )
}

export const CardTextLeftItemDetail = ({ scss, text, img, title }: CardPropType) => {

    return (
        <>
            <div className={`card ${scss}`}>
                <div className="card-center-info-detail">
                    <div className="card-center-column-detail">
                        {/* <Link to={'/shop'}> */}
                            <h2>{title}</h2>
                            <p >{text}</p>
                            {/* <Button scss="btn-link">Tienda</Button>
                        </Link> */}
                    </div>
                </div>
                <div className="card-img-text-container-ar-right-detail">
                    <img src={img}></img>
                </div>
            </div>
        </>
    )
}