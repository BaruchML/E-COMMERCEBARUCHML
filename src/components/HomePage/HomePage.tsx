// import { db } from "../../services/config"
// import { collection, getDocs, query, where } from 'firebase/firestore';
import { useParams } from 'react-router-dom';
import News from './News/News';
import Carousel from '../HomePage/Carousel/Carousel';
import Container from '../ui/container';
import Info from './Info/Info';
import Notice from './Notice/Notice';

const HomePage = () => {
  return (
    <div className='homepage'>
     <h1>Home</h1>
     <Carousel/>
     <News/>
    <Info/>
    <Info/>
   <Notice/>
    </div>
  )
}

export default HomePage