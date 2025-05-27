// import { db } from "../../../services/config";
// import { getDoc, doc } from "firebase/firestore";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FullProductType } from "../../types/componentTypes";
import { getGame } from "../../utils/gamesFunctions";
import Container from "../ui/container";
import ItemDetail from "./ItemDetail/ItemDetail";
import Info from "../HomePage/Info/Info";
import InfoItemDetail from "./InfoItemDetail/InfoItemDetail";
import FeaturesItemDetail from "./FeaturesItemDetail/FeaturesItemDetail";



const ItemDetailContainer = () => {

  const [producto, setProducto] = useState<FullProductType | null>(null);
  let { idItem } = useParams();
  let gameId:string;
  if (idItem) {
    gameId = idItem
  }
  useEffect(() => {

    const gameFetch = async () => {
      try {
        const resp = await getGame(gameId)
        setProducto(resp)
      }catch(err){
        console.log({err});
      }
    }
    gameFetch()
  
  }, [idItem])
  if (!producto) {   // * Preferible mandar a pagina 404
    return(
    <div>
      <Container scss="container-center">
      {/* <ItemDetail {...producto} /> */}
      {/* <Card scss="card-item-detail"/> */}
      <h1>Provisional</h1>
      </Container>
      <Info/>
      {/* <InfoItemDetail/> */}
    </div>
  )
  }
  return (
    <div>
      <ItemDetail {...producto} />
      <InfoItemDetail {...producto}/>
      <FeaturesItemDetail/>
    </div>
  )
}

export default ItemDetailContainer

//* Traer logica para firebase

      // const nuevoDoc = doc(db, "productos", idItem);
    
      // getDoc(nuevoDoc)
      //   .then(res => {
      //     if (res.exists()) {
            
      //       const data = res.data() as Omit<ProductsType, 'id'>;
      //       setProducto({ id: res.id, ...data })
      //     }
      //   })
      //   .catch(error => console.log(error))