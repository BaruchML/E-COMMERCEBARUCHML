import { CardGame as CardGameCarousel } from '../../ui/Card'
import { useEffect, useState } from "react"
import Container from '../../ui/container'
import { GameShowCardType } from '../../../types/componentTypes'
import { getLimitedGames } from '../../../utils/gamesFunctions'


export default function Carousel() {
    const [games, setGames] = useState<GameShowCardType[]>([])
    useEffect(() => {
        const gamesFetch = async () => {
            try {
                const resp = await getLimitedGames(0, 3);

                setGames(resp)
            }
            catch (err) {
                console.log('Error trayendo games', err);

            }
        }
        gamesFetch()
    }, [])

    return (
        <Container scss='container-sp-even' clean title='Lo mas nuevo'>
            {games.map((game) => <CardGameCarousel
                key={game.id}
                style={{
                    scssCard: 'card-carousel',
                    scssDivImg: 'card_gameCarousel-img-container ',
                    scssBtn: 'btn-carousel'
                }}
                cardInfo={{
                    id: game.id,
                    title: game.name,
                    img: game.img[0],
                    btnText: 'Comprar'
                }}
            />)}
        </Container>
    )
}
