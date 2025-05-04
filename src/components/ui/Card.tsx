import Button from "./Button"
import '../../styles/Card.scss'
import { useEffect, useState } from "react"
import { GameType, getGames } from "../../services/data"




const Card = (/* {handleEvent}:ButtonPropType */) => {
    const [games, setGames] = useState<GameType[]>([])
    useEffect(() => {
        const gamesFetch = async () => {
            try {
                const resp = await getGames();
                setGames(resp)
            }
            catch (err) {
                console.log('Error trayendo games',err);

            }
        }
        gamesFetch()
    }, [])
    return (
        <>
            <div className="card">

                <p>Card</p>
                <p>Title{games.map((e,i)=> <p>{e.img}</p>)}</p>
                <Button />
            </div>
        </>
    )
}

export default Card