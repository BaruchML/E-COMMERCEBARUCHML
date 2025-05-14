// import ItemList from "../ItemList/ItemList";
import { useState, useEffect } from 'react';
import { db } from "../../../services/config"
import { collection, getDocs, query, where } from 'firebase/firestore';
import { ProductsType } from '../../../types/componentTypes';
import {CardGameSmall} from '../../ui/Card'
import Container from '../../ui/container'

const News = () => {
    const [productos, setProductos] = useState<ProductsType[]>([]);
    const carouselProducts:ProductsType[] = []
  useEffect(() => {
    const misProductos = collection(db, "productos");

    getDocs(misProductos)
      .then(res => {
        const nuevosProductos:typeof productos = res.docs.map(doc => {
          const data = doc.data()
          return { id: doc.id, ...data }

        })
        setProductos(nuevosProductos);
      })
      .catch(error => console.log(error));


  }, [])
if(productos.length=== 0){
  return (
   
    <Container/>

  )
}

    return (
            <Container scss='container-sp-even container_clean'>                   
               <CardGameSmall scss='card-small' key={productos[0].name} img={productos[0].img} title={productos[0].name}/>
               <CardGameSmall scss='card-small' key={productos[2].name} img={productos[2].img} title={productos[2].name}/>
               <CardGameSmall scss='card-small' key={productos[1].name} img={productos[1].img} title={productos[1].name}/>
               <CardGameSmall scss='card-small' key={productos[3].name} img={productos[3].img} title={productos[3].name}/>
               <CardGameSmall scss='card-small' key={productos[4].name} img={productos[4].img} title={productos[4].name}/>
            </Container>
            
    )
}

export default News