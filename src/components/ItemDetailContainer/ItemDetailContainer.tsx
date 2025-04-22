import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { db } from "../../services/config";
import { getDoc, doc } from "firebase/firestore";
import "./ItemDetailContainer.css"
import { ProductsType } from "../ItemList/ItemList";

const ItemDetailContainer = () => {
   interface IdItemType  {
    idItem : string | undefined
  }
  const [producto, setProducto] = useState<ProductsType>();

  const { idItem } = useParams();//intentar tipar useParams con iditemtype

  if(!idItem){
    return (<h1>Sin item</h1>)
  }
  useEffect(() => {
    const nuevoDoc = doc(db, "productos", idItem);

    getDoc(nuevoDoc)
      .then(res => {
        const data = res.data();
        const nuevoProducto = { id: res.id, ...data }
        setProducto(nuevoProducto)
      })
      .catch(error => console.log(error))
  }, [idItem])
  return (
    <div className="itemDetailContainer">
      <ItemDetail producto = {producto} />
    </div>
  )
}

export default ItemDetailContainer