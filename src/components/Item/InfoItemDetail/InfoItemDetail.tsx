
import {GameShowCardType } from '../../../types/componentTypes'
import {CardTextLeftItemDetail} from '../../ui/Card'
import Container from '../../ui/container'


export  const InfoItemDetail = ({...producto}:GameShowCardType) => {
    
return(
    <>
            <Container clean scss='container-center' >    
                <CardTextLeftItemDetail scss='card_info-detail' title={producto.info.titleDescription}text={producto.info.description}img={producto.img[1]}/>
            </Container>
        </>
)
}
 export default InfoItemDetail