import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { db } from "../../../services/config";
import { getDoc, doc } from "firebase/firestore";
import "./ItemDetailContainer.css"
import { ProductsType } from "../ItemList/ItemList";

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState<ProductsType>();

  const { idItem } = useParams();

  if(!idItem){
    return (<h1>Sin item</h1>)
  }
  useEffect(() => {
    const nuevoDoc = doc(db, "productos", idItem);

    getDoc(nuevoDoc)
      .then(res => {
        if (res.exists()) {
          
          const data = res.data() as Omit<ProductsType, 'id'>;
          setProducto({ id: res.id, ...data })
        }
      })
      .catch(error => console.log(error))
  }, [idItem])
  if (!producto) {
    return <h1>Cargando...</h1>;
  }
  return (
    <div className="itemDetailContainer">
      <ItemDetail {...producto} />
    </div>
  )
}

export default ItemDetailContainer