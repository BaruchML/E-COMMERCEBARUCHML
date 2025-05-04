import { useState, useEffect } from 'react';
import ItemList from "../ItemList/ItemList";
import { useParams } from 'react-router-dom';
// import { db } from "../../services/config"
// import { collection, getDocs, query, where } from 'firebase/firestore';
import { ProductsType } from '../../types/componentTypes';
import Carousel from '../Carousel/Carousel';

const HomePage = () => {
  const [productos, setProductos] = useState<ProductsType[]>([]);

  const { idCategoria } = useParams();

//   useEffect(() => {
//     // const misProductos = idCategoria ? query(collection(db, "productos"),
//     //   where("idCat", "==", idCategoria)) : collection(db, "productos");

//     // getDocs(misProductos)
//     //   .then(res => {
//     //     const nuevosProductos:typeof productos = res.docs.map(doc => {
//     //       const data = doc.data()
//     //       return { id: doc.id, ...data }

//     //     })
//     //     setProductos(nuevosProductos);
//     //   })
//     //   .catch(error => console.log(error));
//   }, [idCategoria])

  return (
    <div className='homepage'>
     <h1>Home</h1>
     <Carousel/>
    </div>
  )
}

export default HomePage