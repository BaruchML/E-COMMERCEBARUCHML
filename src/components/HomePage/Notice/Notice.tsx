import { useEffect, useState } from "react";
import { getLimitedNotices, noticeType } from "../../../services/noticesMock";
import { Card, CardNoticeSmall } from "../../ui/Card";
import Container from "../../ui/container";

function Notice() {
      const [newNotices, setNewNotices] = useState<noticeType[]>([])
      const [notices, setNotices] = useState<noticeType[]>([])
        useEffect(() => {
            const noticesFetch = async () => {
                try {
                    const respnew = await getLimitedNotices(0,2);
                    const resp = await getLimitedNotices(2,6);
                    setNewNotices(respnew)
                    setNotices(resp)
                }
                catch (err) {
                    console.log('Error trayendo games', err);
                }
            }
            noticesFetch()
        }, [])
        //PENDIENTE HACER RESPONSIVE EL TEXTO
    return ( 
        <>
        <Container title="Ultimas Noticias" clean scss="container-notice">
             {newNotices.map((n) => <CardNoticeSmall scss="card-notice" title={n.name} text={n.description} img={n.img}/>)}
        </Container>
        <Container clean scss="container-notice">
                    {notices.map((n) => <CardNoticeSmall scss="card-notice-small" title={n.name} text={n.description} img={n.img}/>)}
    
        </Container>
        </>
     );
}

export default Notice;