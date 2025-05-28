import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getLimitedNotices, noticeType } from '../../services/noticesMock';
import Container from '../ui/container';
import { CardNotice, CardNoticeSmall } from '../ui/Card';

const NoticesPage = () => {
  const location = useLocation();  // Obtener la ubicación actual (con el hash)
  console.log(location);
  
  const [notices, setNotices] = useState<noticeType[]>([])
  useEffect(() => {
    const noticesFetch = async () => {
      try {
        const resp = await getLimitedNotices(0, 6);
        setNotices(resp)
      }
      catch (err) {
        console.log('Error trayendo games', err);
      }
    }
    noticesFetch()
    // Si el hash existe en la URL (ejemplo: /notices#noticia123)
    if (location.hash) {
      const id = location.hash.replace('#', '');  // Obtener el id (sin el #)
      const element = document.getElementById(id);  // Buscar el elemento con ese id

      if (element) {
        // Hacer scroll hasta ese elemento
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);  // Ejecutar cada vez que cambie la URL (por ejemplo, cuando el hash cambie)

  return (
    <Container clean title='Las ultimas noticias' scss='card-notices-container'>
      <div className='card-notices-container-column'>
        {notices.map((n) => <CardNotice key={n.id} scss='card-notice' notice={n}/>)}
      </div>
    </Container>
  );
};

export default NoticesPage;