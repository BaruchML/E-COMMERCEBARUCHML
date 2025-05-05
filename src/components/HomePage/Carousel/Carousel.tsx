import Card from '../../ui/card'
import { GameType, getGames } from "../../../services/data"
import { useEffect, useState } from "react"
import Container from '../../ui/container'

export default function Carousel() {
    const [games, setGames] = useState<GameType[]>([])
    useEffect(() => {
        const gamesFetch = async () => {
            try {
                const resp = await getGames();
                setGames(resp)
            }
            catch (err) {
                console.log('Error trayendo games', err);

            }
        }
        gamesFetch()
    }, [])

    return (
        <Container>

            <h2>Carousel</h2>
            {games.map((e, i) => <Card key={i} />)}
        </Container>
    )
}
