import Container from "../ui/container"
import { CardFooter } from "../ui/Card"
import { footerList, footerIcons } from "../../services/footerMock"
import { useState } from "react"
import { Link } from "react-router-dom"



const Footer = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
    return (
        <>

            <Container clean scss="container-footer">
                <div className="container-footer-list">

                    {footerList.map((footeritem) => {
                        return (
                            <CardFooter key={footeritem.title} title={footeritem.title} list={footeritem.list} scss="card-footer" />
                        )
                    })}
                </div>
                <div className="footer-icons">

                    {footerIcons.map(((item, index) => {
                        return (
                            <Link to={item.url}>
                                <iconify-icon icon={item.icon} width="32" height="32"
                                    onMouseEnter={() => setHoveredIndex(index)}
                                    onMouseLeave={() => setHoveredIndex(null)}
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