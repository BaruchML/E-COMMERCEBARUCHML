import News from './News/News';
import Carousel from '../HomePage/Carousel/Carousel';
import Info from './Info/Info';
import Notice from './Notice/Notice';

const HomePage = () => {
  return (
    <div>
      <Carousel />
      <News />
      <Info />
      <Info />
      <Notice />
    </div>
  )
}

export default HomePage