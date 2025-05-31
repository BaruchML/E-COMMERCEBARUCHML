import { useEffect, useState } from "react";
import { getLimitedNotices, noticeType } from "../../../services/noticesMock";
import { CardGame as CardNoticeSmall } from "../../ui/Card";
import Container from "../../ui/container";

function Notice() {
    const [newNotices, setNewNotices] = useState<noticeType[]>([])
    const [notices, setNotices] = useState<noticeType[]>([])
    useEffect(() => {
        const noticesFetch = async () => {
            try {
                const respnew = await getLimitedNotices(0, 2);
                const resp = await getLimitedNotices(2, 6);
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
    // scss="card-notice-medium"
    return (
        <>
            <Container
                title="Ultimas Noticias"
                clean
                scss="container-notice">
                {newNotices.map((newNotice) =>
                    <CardNoticeSmall
                        style={{
                            scssCard: 'card-notice-medium',
                            scssDivImg: 'card-img-small-notice-container-ar',
                            scssDivBtn: 'align-start',
                            scssBtn: 'btn-link',
                        }}
                        cardInfo={{
                            id: newNotice.id,
                            title: newNotice.name,
                            text: newNotice.description,
                            img: newNotice.img,
                            btnText: 'Leer Mas'
                        }}
                        />)}
            </Container>
            <Container clean scss="container-notice">
                     {notices.map((notice) =>
                    <CardNoticeSmall
                        style={{
                            scssCard: 'card-notice-small',
                            scssDivImg: 'card-img-small-notice-container-ar',
                            scssDivBtn: 'align-start',
                            scssBtn: 'btn-link',
                        }}
                        cardInfo={{
                            id: notice.id,
                            title: notice.name,
                            text: notice.description,
                            img: notice.img,
                            btnText: 'Leer Mas'
                        }}
                        />)}


            </Container>
        </>
    );
}

export default Notice;