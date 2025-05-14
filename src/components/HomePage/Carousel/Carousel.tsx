import {CardGame} from '../../ui/Card'
import { GameType, getGames,getLimitedGames } from "../../../services/gamesMock"
import { useEffect, useState } from "react"
import Container from '../../ui/container'


export default function Carousel() {        
    const [games, setGames] = useState<GameType[]>([])
    useEffect(() => {
        const gamesFetch = async () => {
            try {
                const resp = await getLimitedGames(0,3);

                setGames(resp)
            }
            catch (err) {
                console.log('Error trayendo games', err);

            }
        }
        gamesFetch()
    }, [])

    return (
        <Container scss='container-sp-even container_clean '>
            {games.map((e, i) => <CardGame title={e.name} img={e.img} scss='card-carousel' key={i} />)}
        </Container>
    )
}
