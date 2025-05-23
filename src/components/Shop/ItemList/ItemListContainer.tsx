import { useState, useEffect } from 'react';
import ItemList from "../ItemList/ItemList";
import { useParams } from 'react-router-dom';
// import { db } from "../../../services/config"
// import { collection, getDocs, query, where } from 'firebase/firestore';
import { ChildrenContextProps, ProductsType } from '../../../types/componentTypes';
import Container, { ContainerListItems } from '../../ui/container';
import { GameType, getCategoryGames, getGames, getLimitedGames, getSearchedGames } from '../../../services/gamesMock';
import { CardGameSmall } from '../../ui/Card';

const ItemListContainer = ({ queryMock, category }: ChildrenContextProps) => {
  const [games, setGames] = useState<GameType[]>([])
      useEffect(() => {
        if (category) {
          
          console.log({categoryItemList:category});
        }else{
                  console.log({categoryItemList:'no hay'});

        }
        
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

  return (
    <>
      <ContainerListItems clean title='Juegos'>
        {games.map(game => <CardGameSmall title={game.name} img={game.img} scss='card-small' key={game.id} />)}
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