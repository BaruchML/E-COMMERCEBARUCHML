export interface ButtonPropType {
    handleEvent?:() => void | string
    scss?:string
    children? : React.ReactNode
}

export interface CardPropType {
    scss?:string
    text?:string
    title?:string,
    img?:string,
    list?:ListType[]
    demo?:boolean
}
interface ListType{
    subtitle:string,
    link:string
}
export interface SearchPropType {
    handleEvent?:(e:React.ChangeEvent<HTMLInputElement>) => void | string
    scss?:string
}
