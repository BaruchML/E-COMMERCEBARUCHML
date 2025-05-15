
export type ProductsType = {
    id:string, 
    name?: string, 
    price?: number, 
    img?: string, 
    stock?: number 
  }
  
  export type ProductsPropType = {
    productos: ProductsType[]
  }

  export interface ChildrenContextProps {
      scss?:string
      children?: React.ReactNode;
      title?:string,
      clean?:boolean
  }
  
  
  export interface ItemType {
      item: ProductsType,
      quantity:number
  }
  export interface CartContextType {
      cart: ItemType[],
      total:number,
      totalQuantity:number,
      addToCart:({item,quantity}:ItemType) => void,
      eraseProduct:({id}:ProductsType) => void,
      cleanCart:() => void
  
  }

  
export interface UserType {
    id:number,
    name:string,
    status?:boolean
    
}
export interface UserContextType {
    user:UserType | null,
    state:'no-loged' | 'logging'| 'logged',
    loadUser: ({id, name}:UserType) => void,
    logOut:() => void
}