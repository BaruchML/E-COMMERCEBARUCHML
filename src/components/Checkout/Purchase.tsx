import { CardPurchase } from "../ui/Card";
import Container from "../ui/container";

function Purchase() {
    return ( 
        <Container clean scss="container-center" title="Gracias por llegar hasta aqui">
       <CardPurchase scss="card-purchase"/>
        </Container>
     );
}

export default Purchase;