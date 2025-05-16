import {CardGameCarousel} from '../../ui/Card'
import { GameType,getLimitedGames } from "../../../services/gamesMock"
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
        <Container scss='container-sp-even' clean={true} title='Lo mas nuevo'>
            {games.map((e, i) => <CardGameCarousel title={e.name} img={e.img} scss='card-carousel' key={i} />)}
        </Container>
    )
}
