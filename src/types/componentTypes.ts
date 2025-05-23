export interface ChildrenContextProps {
    scss?: string
    children?: React.ReactNode;
    title?: string,
    clean?: boolean,

  
}
export interface CartContextType {
    cart: GameCartType[],
    total: number,
    totalQuantity: number,
    addToCart: ({ item, quantity }: GameCartType) => void,
    eraseProduct: ({ id }: ProductsType) => void,
    cleanCart: () => void
}

export interface SearchPropType {
    scss?: string
    // query?: string
      queryMock?: string,
    category?: string | null
    handleEvent?: (e: React.ChangeEvent<HTMLInputElement>) => void | string
    onClickEvent?: (category: string) => void
    cleanCategory?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

export type ProductsType = {
    key?: number,
    id: string,
    name?: string,
    img?: string,
}

export interface GameType extends ProductsType {
    stock?: number
    description?: string,
    category?: string
}
export type ProductsPropType = {
    productos: ProductsType[]
}

export interface GameCartType {
    item: GameType,
    quantity: number
}

export interface UserType {
    id: number,
    name: string,
    status?: boolean

}

export interface UserContextType {
    user: UserType | null,
    state: 'no-loged' | 'logging' | 'logged',
    loadUser: ({ id, name }: UserType) => void,
    logOut: () => void
}

export interface CategoriesType {
    name: string
}
