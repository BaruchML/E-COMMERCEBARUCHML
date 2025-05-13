import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { db } from "../../../services/config";
import { getDoc, doc } from "firebase/firestore";
import { ProductsType } from "../../../types/componentTypes";
import Container from "../../ui/container";
import Info from "../../HomePage/Info/Info";
import AboutItem from "./AboutItem/About";
import { Card } from "../../ui/Card";


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
    return(
    <div>
      <Container scss="container-center">
      {/* <ItemDetail {...producto} /> */}
      {/* <Card scss="card-item-detail"/> */}
      <h1>Provisional</h1>
      </Container>
      <Info/>
      <AboutItem/>
    </div>
  )
  }
  return (
    <div>
      <Container scss="container-center">
      <ItemDetail {...producto} />
      </Container>
      <Info/>
      <AboutItem/>
    </div>
  )
}

export default ItemDetailContainer