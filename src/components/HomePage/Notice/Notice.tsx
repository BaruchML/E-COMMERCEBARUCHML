import { Card } from "../../ui/Card";
import Container from "../../ui/container";

function Notice() {
    return ( 
        <>
        <Container scss="container-notice">
            <Card scss="card-carousel"/>
            <Card scss="card-carousel"/>
        </Container>
        <Container  scss="container-notice">

            <Card scss=""/>
            <Card scss=""/>
            <Card scss=""/>
            <Card scss=""/>
          
        </Container>
        </>
     );
}

export default Notice;