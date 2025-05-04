
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