import {CardGameCarousel} from '../../ui/Card'
import { useEffect, useState } from "react"
import Container from '../../ui/container'
import { GameShowCardType } from '../../../types/componentTypes'
import { getLimitedGames } from '../../../utils/gamesFunctions'


export default function Carousel() {        
    const [games, setGames] = useState<GameShowCardType[]>([])
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
            {games.map((e, i) => <CardGameCarousel id={e.id} title={e.name} img={e.img} scss='card-carousel' key={i} />)}
        </Container>
    )
}
