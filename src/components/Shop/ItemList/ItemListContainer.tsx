// import { useParams } from 'react-router-dom';
// import { db } from "../../../services/config"
// import { collection, getDocs, query, where } from 'firebase/firestore';
import { useState, useEffect } from 'react';
import {SearchPropType,GameShowCardType } from '../../../types/componentTypes';
import { ContainerListItems } from '../../ui/container';
import { CardGame as CardGameShop } from '../../ui/Card';
import { getSearchedGames } from '../../../utils/gamesFunctions';

const ItemListContainer = ({ queryMock, category }: SearchPropType) => {
  const [games, setGames] = useState<GameShowCardType[]>([])
      useEffect(() => {
        // if (category) {
          
        //   console.log({categoryItemList:category});
        // }else{
        //           console.log({categoryItemList:'no hay'});

        // }
         window.scrollTo(0, 0)
    const gamesFetch = async () => {
      try {
        const resp = await getSearchedGames(queryMock,category);
        setGames(resp)
      }
      catch (err) {
        console.log('Error trayendo games', err);
      }
    }
    gamesFetch()

  }, [/* idCategoria */queryMock, category])
  let noGames ;
  if (games.length === 0) {
    noGames = (<div>No hay Juegos que coincidan con tu busqueda</div>)
  }

  return (
    <>
      <ContainerListItems  clean title={`Juegos ${category != null ? 'tipo ' + category : ''}`}>
        {noGames}
       {games.map(game => <CardGameShop
               key={game.id}
               style={{
                 scssCard: 'card-small-shop',
                 scssDivImg: 'card-img-small-container-ar',
                 scssBtn: 'btn-card-small'
               }}
               cardInfo={{
                 id: game.id,
                 title: game.name,
                 img: game.img[0],
                 btnText: 'Ver mas'
               }}
               discount
               productInfo={game}
             />)}
      </ContainerListItems>
    </>
  )
}

export default ItemListContainer


// * PENDIENTE CONECTAR LA LOGICA PARA TRAER PRODUCTOS DESDE FIREBASE MIENTRAS SE USARA EL MOCK
// const [productos, setProductos] = useState<ProductsType[]>([]);
// const { idCategoria } = useParams();



// const misProductos = idCategoria ? query(collection(db, "productos"),
//   where("idCat", "==", idCategoria)) : collection(db, "productos");

//useEffect () {
  
// getDocs(misProductos)
//   .then(res => {
  //     const nuevosProductos:typeof productos = res.docs.map(doc => {
    //       const data = doc.data()
    //       return { id: doc.id, ...data }
    
    //     })
    //     setProductos(nuevosProductos);
    //   })
    //   .catch(error => console.log(error));
  // }