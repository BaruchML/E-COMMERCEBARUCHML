export interface ButtonPropType {
    handleEvent?:() => void
    scss?:string
    children? : React.ReactNode
}

export interface CardPropType {
    scss?:string
    text?:string
    tittle?:string,
    img?:string
}