
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

  export interface CartContextProps {
      scss?:string
      children?: React.ReactNode;
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