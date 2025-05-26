export interface ContainerPropsType {
    scss?: string
    children: React.ReactNode;
    title?: string,
    clean?: boolean,
}
export interface ChildrenContext {
    children: React.ReactNode;
}


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
    // query?: string
    queryMock?: string,
    category?: string | null
    handleEvent?: (e: React.ChangeEvent<HTMLInputElement>) => void | string
    onClickEvent?:(category: string) => void
    cleanCategory?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

export type BasicProductType = {
    key?: number,
    id: string,
    name?: string,
}

export interface GameShowCardType extends BasicProductType {
    img: string,
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

export interface UserType {
    id: number,
    name: string,
    state: 'no-loged' | 'logging' | 'logged'
}

export interface UserContextType {
    user: UserType | null,
    // state: 'no-loged' | 'logging' | 'logged',
    loadUser: ({ id, name,state }: UserType) => void,
    logOut: () => void
}

export interface CategoriesType {
    name: string
}
