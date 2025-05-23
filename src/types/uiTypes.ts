

export interface ButtonPropType {
    scss?: string
    children?: React.ReactNode
    handleEvent?: () => void | string
    onClickEvent?: (e: React.MouseEvent<HTMLButtonElement>) => void
}


export interface CardPropType {
    scss?: string
    text?: string
    title?: string,
    img?: string,
  id?:string
}
export interface CardFooterPropType extends CardPropType{
    list?: ListType[]
    demo?: boolean
}


export interface ListType {
    subtitle: string,
    link: string
}
