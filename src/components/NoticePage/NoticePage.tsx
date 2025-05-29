import { useEffect, useState } from 'react';
import { getLimitedNotices, noticeType } from '../../services/noticesMock';
import Container from '../ui/container';
import { CardNotice } from '../ui/Card';

const NoticesPage = () => {
  
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

  }, []); 

  return (
    <Container clean title='Las ultimas noticias' scss='card-notices-container'>
      <div className='card-notices-container-column'>
        {notices.map((n) => <CardNotice key={n.id} scss='card-notice' notice={n}/>)}
      </div>
    </Container>
  );
};

export default NoticesPage;