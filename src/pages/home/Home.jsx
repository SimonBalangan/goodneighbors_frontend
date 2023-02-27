import Header from '../../components/header/Header';
import Navbar from '../../components/navbar/Navbar';
import Featured from '../../components/featured/Featured';
import ProductsList from '../../components/productsList/ProductsList';
import TextContainerCity from '../../components/textContainerCity/TextContainerCity' 
import MailList from '../../components/mailList/MailList';
import Footer from "../../components/footer/Footer";
import './home.css'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Header/>
        <div className='homeContainer'>
            <TextContainerCity/>
            <Featured/>
            <h1 className='homeTitle'>blablabla</h1>
            <ProductsList/>
            <MailList/>
            <Footer/>
        </div>
    </div>
  )
}

export default Home;