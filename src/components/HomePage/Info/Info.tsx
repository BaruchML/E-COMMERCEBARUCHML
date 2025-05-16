
import {CardTextLeft, CardTextRight} from '../../ui/Card'
import Container from '../../ui/container'

const Info = (/* {handleEvent}:ButtonPropType */) => {
    return (
        <>
            <Container scss='container-center' clean title='Descubre'>    
                <CardTextLeft scss='card-info' title={'RETRO GAMES SIEMPRE A TU DISPOSICIÓN'}text={'Sumergete en el mundo del Arcade ahora'}img='/img/retro-1.jpg'/>
            </Container>
            <Container clean scss='container-center' >    
                <CardTextRight scss='card-info' title={'REVIVE MOMENTOS INCREIBLES'}text={'Busca en nuestra tienda el juego de tu infancia'}img='/img/arcade-3.jpg'/>
            </Container>
        </>
            
    )
}

export default Info