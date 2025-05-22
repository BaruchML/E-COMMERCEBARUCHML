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
  // const [productos, setProductos] = useState<ProductsType[]>([]);
  const [search, setSearch] = useState(queryMock)
  const [games, setGames] = useState<GameType[]>([])

  // const { idCategoria } = useParams();

  useEffect(() => {
    // * PENDIENTE CONECTAR LA LOGICA PARA TRAER PRODUCTOS DESDE FIREBASE MIENTRAS SE USARA EL MOCK
    // const misProductos = idCategoria ? query(collection(db, "productos"),
    //   where("idCat", "==", idCategoria)) : collection(db, "productos");

    // getDocs(misProductos)
    //   .then(res => {
    //     const nuevosProductos:typeof productos = res.docs.map(doc => {
    //       const data = doc.data()
    //       return { id: doc.id, ...data }

    //     })
    //     setProductos(nuevosProductos);
    //   })
    //   .catch(error => console.log(error));
    const gamesFetch = async () => {

      try {
        const resp = await getSearchedGames(queryMock);


        setGames(resp)
      }
      catch (err) {
        console.log('Error trayendo games', err);

      }
    }
    gamesFetch()

  }, [/* idCategoria */queryMock, category])
  // if(!games){
  //   return (

  //     <Container/>

  //   )
  // }
  return (
    <>
      <ContainerListItems clean title='Juegos'>
        {games.map(game => <CardGameSmall title={game.name} img={game.img} scss='card-small' key={game.id} />)}
      </ContainerListItems>
    </>
  )
}

export default ItemListContainer