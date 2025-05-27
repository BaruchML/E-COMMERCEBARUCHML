
import {GameShowCardType } from '../../../types/componentTypes'
import {CardTextLeftItemDetail} from '../../ui/Card'
import Container from '../../ui/container'


export  const InfoItemDetail = ({...producto}:GameShowCardType) => {
    console.log(producto.img[0]);
    
return(
    <>
            <Container clean title='Mas acerca de' scss='container-center' >    
                <CardTextLeftItemDetail scss='card_info-detail' title={producto.info.titleDescription}text={producto.info.description}img={producto.img[1]}/>
            </Container>
        </>
)
}
 export default InfoItemDetail