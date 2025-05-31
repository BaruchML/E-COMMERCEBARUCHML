import { FormEvent } from "react"
import { noticeType } from "../services/noticesMock"
import { BasicProductType, FullProductType, GameCartItemType, GameCartType,} from "./componentTypes"


export interface ButtonPropType {
    scss?: string
    children?: React.ReactNode

    handleEvent?: () => void | string
    onClickEvent?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

export interface ButtonCategoryPropType extends ButtonPropType {
    selected?:boolean
}

export interface CardPropType {
    scss?: string //diseño card
    text?: string //
    title?: string, // Estas tres vienen de un producto
    img?: string, //
}
export interface CardPropInfo{
    style:{
        scssCard:string
        scssDivImg:string
        scssDivBtn?:string
        scssBtn:string
    }
    cardInfo:{
        title:string
        text?:string
        btnText?:string
        img:string
        id:string
    }
    productInfo? : GameCartItemType,
    discount?: boolean
}
export interface CardFooterPropType extends CardPropType{
    list: ListType[]
    demo: boolean
}
export interface CardFeaturePropType extends CardPropType{
    feature: FeatureType
    productInfo: string
    // demo: boolean
}

export interface CardItemPropType extends CardPropType{
    handleQuantity:(quantity:number) => void
    addQuantity:number
    product:FullProductType

}
export interface CardNoticePropType extends CardPropType {
    notice: noticeType
}
export interface CardLoginPropType extends CardPropType {
    handleName: (e: React.ChangeEvent<HTMLInputElement>) => void,
    handleSubmit: (e:FormEvent)=> void
    userName:string,
    error:string

}
export interface CardRegisterPropType extends CardPropType {
    handleName: (e: React.ChangeEvent<HTMLInputElement>) => void,
    handleLastName: (e: React.ChangeEvent<HTMLInputElement>) => void,
    handlePhoneNumber: (e: React.ChangeEvent<HTMLInputElement>) => void,
    handleEmail: (e: React.ChangeEvent<HTMLInputElement>) => void,
    handleEmailConf: (e: React.ChangeEvent<HTMLInputElement>) => void,
    handleSubmit: (e:FormEvent)=> void
    error:string

}
export interface CardCartPropType extends CardPropType{
    game: GameCartType
    eraseProduct: ({id}:BasicProductType) => void
    // demo: boolean
}


//* Si sigue comentado entonces mejor borrarlo
// export interface CardItemDetailPropType extends CardPropType{
//     price:number
//     stock?: number
//     handleQuantity:(quantity:number) => void
//     addQuantity:number
//     product:FullProductType
// }


export interface ListType {
    subtitle: string,
    link: string
}

export interface FeatureType {
    title:string,
    icon:string
}