import { GameCartItemType, GameShowCardType } from '../../../types/componentTypes'
import { CardFeature } from '../../ui/Card'
import Container from '../../ui/container'
import { featuresTitles } from '../../../services/featuresItemMock'

export const FeaturesItemDetail = ({ ...producto }: GameShowCardType) => {



    return (
        <>
            <Container clean title='Caracteristicas' scss='container-center' >
                {/* <CardFeature scss='card_info-detail' listTitles={} /> */}
                <div className='container-features-detail'>
                    <div>
                        <CardFeature scss='card-feature-detail' feature={featuresTitles[0]} productInfo={producto.info.size} />
                        <CardFeature scss='card-feature-detail' feature={featuresTitles[1]} productInfo={producto.info.console} />
                        <CardFeature scss='card-feature-detail' feature={featuresTitles[2]} productInfo={producto.info.numberOfPlayers} />
                        <CardFeature scss='card-feature-detail' feature={featuresTitles[3]} productInfo={producto.info.developer} />
                        <CardFeature scss='card-feature-detail' feature={featuresTitles[4]} productInfo={producto.info.category} />
                        <CardFeature scss='card-feature-detail' feature={featuresTitles[5]} productInfo={producto.info.lunchDate} />
                        <CardFeature scss='card-feature-detail' feature={featuresTitles[6]} productInfo={producto.info.rating} />
                        <CardFeature scss='card-feature-detail' feature={featuresTitles[7]} productInfo={producto.info.clasification} />
                    </div>
                    {/* <div> */}
                    <img src={producto.img[2]}></img>
                    {/* </div> */}
                </div>
            </Container>
        </>
    )
}
export default FeaturesItemDetail