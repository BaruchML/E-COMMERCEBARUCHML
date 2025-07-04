

//Container
export interface ContainerType {
    scss?: string
    children: React.ReactNode;
    title?: string,
    clean?: boolean,
    cleanGrey?: boolean,
}

//Context in General
export interface ContextChildrenType {
    children: React.ReactNode;
}

//CartContext

export interface CartContextType {
    cart: GameCartType[],
    total: number,
    totalQuantity: number,
    addToCart: ({ item, quantity }: GameCartType) => void,
    eraseProduct: ({ id }: BasicProductType) => void,
    cleanCart: () => void
}



export interface SearchPropType {
    scss?: string
    queryMock?: string,
    category?: string | null
    handleEvent?: (e: React.ChangeEvent<HTMLInputElement>) => void | string
    onClickEvent?:(category: string) => void
    cleanCategory?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

export type BasicProductType = {
    key?: number,
    id: string,
    name: string,
}

export interface GameShowCardType extends BasicProductType {
    img: string[],
    info:GameShowInformationType,
}
export interface GameShowInformationType {
    lunchDate: string,
    category: string,
    console:string,
    description: string,
    titleDescription:string,
    numberOfPlayers: string,
    developer: string,
    clasification:string,
    size:string,
    rating:string
}

export interface GameCartItemType extends BasicProductType {
    stock: number,
    price: number
}


export type FullProductType = GameShowCardType & GameCartItemType

// export type ProductsPropType = { // *cambiar nombre tal vez no se use
//     productos: BasicProductType[]
// }

export interface GameCartType {
    item: FullProductType,
    quantity: number
}
export interface GameOrderType{
    item:BasicProductType
    quantity:number
}

export interface UserType {
    id?: string,
    userData: UserDataType,
    state: 'no-loged' | 'logging' | 'logged'
    cart?:string,
    order?:string
}

export interface UserContextType {
    user: UserType | null,
    loadUser: ({ userData,state }: UserType) => void,
    logOut: () => void
    getUser:()=> void
}

export interface CategoriesType {
    name: string
}

export interface UserDataType {
    name:string,
    lastName:string,
    phoneNumber:string,
    email:string
}