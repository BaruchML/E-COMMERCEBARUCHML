
import {CardTextLeft, CardTextRight} from '../../ui/Card'
import Container from '../../ui/container'

const Info = (/* {handleEvent}:ButtonPropType */) => {
    return (
        <>
            <Container scss='container-center' clean title='Descubre'>    
                <CardTextLeft scss='card-info' title={'¡Descubre Qué Hay de Nuevo en el Mundo del Retro!'}text={'Lanzamientos, historias y todo lo que pasa en el universo del arcade. ¡Entra ahora!'}img='/img/retro-1.jpg'/>
            </Container>
            <Container clean scss='container-center' >    
                <CardTextRight scss='card-info' title={'REVIVE MOMENTOS INCREIBLES'}text={"Explora nuestra tienda y encuentra esos clásicos que te hicieron amar los videojuegos."}img='/img/arcade-3.jpg'/>
            </Container>
        </>
            
    )
}

export default Info