import Navbar from '../components/Navbar/Navbar';
import Homecard from '../components/Homecard/Homecard';
import Blog from '../components/Blog/Blog';
import CanvaImage from '../components/CanvaImage/CanvaImage';
import Faq from '../components/Faq/Faq';
import Footer from '../components/Footer/Footer';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Homecard />
      <CanvaImage />
      <Blog />
      <Faq />
      <Footer />
    </div>
  )
}

export default Home