import Container from "../ui/container"
import { CardFooter } from "../ui/Card"
import { footerList, footerIcons } from "../../services/footerMock"
import { Link } from "react-router-dom"



const Footer = () => {
    
    return (
        <>

            <Container clean scss="container-footer">
                <div className="container-footer-list">

                    {footerList.map((footeritem) => {
                        return (
                            <CardFooter key={footeritem.title} title={footeritem.title} list={footeritem.list} scss="card-footer" demo={footeritem.demo} />
                        )
                    })}
                </div>
                <div className="footer-icons">

                    {footerIcons.map(((item, index) => {
                        return (
                            <Link key={index} to={item.url}>
                                <iconify-icon  icon={item.icon} width="32" height="32"
                                ></iconify-icon>
                            </Link>
                        )
                    }))}


                </div>
            </Container>

        </>
    )
}

export default Footer