export interface ButtonPropType {
    handleEvent?:() => void | string
    scss?:string
    children? : React.ReactNode
}

export interface CardPropType {
    scss?:string
    text?:string
    tittle?:string,
    img?:string
}

export interface SearchPropType {
    handleEvent?:(e:React.ChangeEvent<HTMLInputElement>) => void | string
    scss?:string
}
