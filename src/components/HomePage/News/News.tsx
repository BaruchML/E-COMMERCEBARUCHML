// import ItemList from "../ItemList/ItemList";
// import { db } from "../../../services/config"
// import { collection, getDocs, query, where } from 'firebase/firestore';
// import { ProductsType } from '../../../types/componentTypes';
import { useState, useEffect } from 'react';
import { CardGameSmall } from '../../ui/Card'
import Container from '../../ui/container'
import { getLimitedGames } from '../../../utils/gamesFunctions';
import { GameShowCardType } from '../../../types/componentTypes';

const News = () => {
  // cambiar el nombre del estado, porque products era cuando me conectaba a firebase
  // const [productos, setProductos] = useState<ProductsType[]>([]);
  //pendiente traer la logica de getGamesLimited a la base de datos
  const [games, setGames] = useState<GameShowCardType[]>([])
  useEffect(() => {
    const gamesFetch = async () => {
      try {
        const resp = await getLimitedGames(3, 7);
        setGames(resp)
      }
      catch (err) {
        console.log('Error trayendo games', err);
      }
    }
    gamesFetch()

  }, [])
  // if (games.length === 0) {
  //   return (
  //     <Container />
  //   )
  // }

  return (
    <Container scss='container-sp-even' clean title='Los favoritos de siempre'>
      {games.map(game => <CardGameSmall id={game.id} title={game.name} img={game.img[0]} scss='card-small' key={game.id} />)}
    </Container>

  )
}

export default News