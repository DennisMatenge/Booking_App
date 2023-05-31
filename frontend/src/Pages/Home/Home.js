import './Home.css'
import Navbar from '../../Components/Navbar/Navbar'
import Header from '../../Components/Header/Header'
import Featured from '../../Components/Featured/Featured'
import PropertyList from '../../Components/PropertyList/PropertyList';
import FeaturedProperties from '../../Components/FeaturedProperties/FeaturedProperties';
import MailList from '../../Components/MailList/MailList';
import Footer from '../../Components/Footer/Footer';

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <div className='homeContainer'>
        <Featured/>
      </div>
      <h1 className='homeTitle'>Property Type</h1>
      <PropertyList/>
      <h1 className=''> Homes Guests Love</h1>
      <FeaturedProperties/>
      <MailList/>
      <Footer/>
    </div>
  );
};

export default Home
