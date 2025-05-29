import { noticeType } from "../services/noticesMock"
import { FullProductType, GameShowCardType, UserType } from "./componentTypes"


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
    scss?: string
    text?: string
    title?: string,
    img?: string,
    id?:string
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
    loadUser: ({ name,state }: UserType) => void,
    userName:string
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