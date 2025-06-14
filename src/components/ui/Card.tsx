import Button, { ButtonSubmit } from "./Button"
import { CardCartPropType, CardFeaturePropType, CardFooterPropType, CardItemPropType, CardLoginPropType, CardNoticePropType, CardPropInfo, CardPropType, CardRegisterPropType } from "../../types/uiTypes"
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
export const CardGame = ({ style, cardInfo,productInfo,discount }: CardPropInfo) => {
    let offer = (<p>{productInfo?.price}</p>)
    return (
        <>
            <div className={`card ${style.scssCard} `}>
                <div className={`${style.scssDivImg}`}>
                    <img src={cardInfo.img}></img>
                </div>
                <div className="card-center">
                    <p>{cardInfo.title}</p>
                    {cardInfo.text && <p>{cardInfo.text}</p>}
                    {discount && offer}
                    <div className={`${style.scssDivBtn}`}>
                        <Link to={`/item/${cardInfo.id}`}>
                            <Button scss={`${style.scssBtn}`}>{cardInfo.btnText}</Button>
                        </Link>
                    </div>
                </div>
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
                <div className="card-center">
                    <div className="card-center-column">
                        <Link to={'/notices'}>
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
                <div className="card-center">
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

export const CardNotice = ({ scss, notice }: CardNoticePropType) => {
    return (
        <>
            <div id={notice.id} className={`card ${scss} `}>
                <div className="card-img-notice-container-ar">
                    <img src={notice.img}></img>
                </div>
                <div className="card-center-notice">
                    <h2>{notice.name}</h2>
                    <p>{notice.largeDescription}</p>
                    <p>Fecha de publicación: {notice.date}</p>
                    <div style={{ alignSelf: 'start' }}>
                        <Link to={`/item/${notice.gameId}`}>
                            <Button scss="btn-link">Ver Juego</Button>
                        </Link>
                    </div>
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
                            <h1 className="card-item-detail_name">{product.name}</h1>
                            <p>Fecha de lanzamiento: {product.info.lunchDate}</p>
                            <p>Consola: {product.info.console}</p>
                        </div>
                        <div className="card-item-detail-column_info ">
                            <h1 >{formatCurrency(product.price)}</h1>
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
                        <h1 className="card-item-detail_title">{title}</h1>
                        <p >{text}</p>
                    </div>
                </div>
                <div className="card-img-text-container-ar-right-detail">
                    <img src={img}></img>
                </div>
            </div>
        </>
    )
}

export const CardFeature = ({ scss, feature, productInfo }: CardFeaturePropType) => {

    return (
        <>
            <div className={`card ${scss} `}>
                <div className="card-feature-detail-title">

                    <iconify-icon icon={feature.icon} width="32" height="32"></iconify-icon>

                    <h2>{feature.title} </h2>
                </div>
                <div className="card-feature-detail-info">

                    <h3>{productInfo}</h3>
                </div>
            </div>
        </>
    )
}

export const CardLogin = ({ scss, handleName, handleSubmit, error }: CardLoginPropType) => {
    return (
        <>
            <div className={`card ${scss} `}>
                <form className="form-login" onSubmit={handleSubmit}>
                    <label> Nombre de Usuario </label>
                    <input type="text" placeholder="Solo escribe tu nombre" onChange={handleName}></input>
                    {error && <span style={{ color: 'red', fontSize: '0.9em' }}>{error}</span>}
                    <ButtonSubmit >Iniciar Sesión</ButtonSubmit>
                </form>

            </div>
        </>
    )
}
export const CardRegister = ({ scss, handleName, handleEmail, handleLastName, handleEmailConf, handlePhoneNumber, handleSubmit, error }: CardRegisterPropType) => {
    return (
        <>
            <div className={`card ${scss} `}>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor=''>Nombre</label>
                        <input type="text" onChange={handleName} />
                    </div>
                    <div>
                        <label htmlFor=''>Apellido</label>
                        <input type="text" onChange={handleLastName} />
                    </div>
                    <div>
                        <label htmlFor=''>Telefono</label>
                        <input type="text" onChange={handlePhoneNumber} />
                    </div>
                    <div>
                        <label htmlFor=''>Email</label>
                        <input type="email" onChange={handleEmail} />
                    </div>
                    <div>
                        <label htmlFor=''>Email Confirmación</label>
                        <input type="email" onChange={handleEmailConf} />
                    </div>
                    {
                        error && <p style={{ color: "red" }}>{error}</p>
                    }
                    <ButtonSubmit >Registrar tu usuario</ButtonSubmit>

                </form>


            </div>
        </>
    )
}

export const CardRegisterSuccess = ({ scss, }: CardPropType) => {
    return (
        <>
            <div className={`card ${scss} `}>
                <h2>
                    ¡Felicidades!
                </h2>
                <h4>
                    Usuario Registrado con Exito
                </h4>
                <p>¡Revisa tu carrito!</p>
                <Link to={'/cart'}>
                    <Button scss="btn-register-success">Ir</Button>
                </Link>
            </div>
        </>
    )
}
export const CardCartItem = ({ game, eraseProduct }: CardCartPropType) => {
    return (
        <>
            <div className={`card card-cart-item`}>
                <div className="card-cart-item-img-container-ar">
                    <img src={game.item.img[0]}></img>
                </div>
                <div className="card-cart-item-info">
                    <h3>{game.item.name}</h3>
                    <p>Cantidad: {game.quantity}</p>
                    {
                        eraseProduct && (<button className="card-cart-item-erase_btn" onClick={() => eraseProduct(game.item)}><iconify-icon icon="gg:trash" width="18" height="18"></iconify-icon></button>)
                    }
                </div>
                <div className="card-cart-item-price">
                    <h3>Precio:</h3>
                    <p> {formatCurrency(game.item.price)}</p>

                </div>


            </div>
        </>
    )
}
export const CardPurchase = ({ scss }: CardPropType) => {
    return (
        <>
            <div className={`card ${scss}`}>
                {/* <h1>
                Gracias por llegar hasta aqui
            </h1> */}
                <h3>
                    Este E-commerce es una practica de React en la que incluyo diferentes herramientas con motivo de seguir aprendiendo y presentarlas en mi portfolio,
                    ¡Aqui!
                </h3>
                <a href="/algun_lugar">Portfolio</a>
                <h3>Espero que te haya gustado, este sitio seguira en crecimiento asi que siempre puedes darte una vuelta para ver que novedades se han agregado.</h3>
            </div>
        </>
    )
}