import './singlePage.css'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import { faCircleArrowLeft, faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';


const SinglePage = () => {

  const [slideNumber, setSlideNumber] = useState(0)
  const [open, setOpen] = useState(false)

const photos = [
  {
    src: 'https://images.obi.de/product/DE/415x415/146655_3.jpg'
  },
  {
    src: 'https://m.media-amazon.com/images/I/71wV1wd8VDL._AC_SX425_.jpg'
  },
  {
    src: 'https://m.media-amazon.com/images/I/51YE45AQ3zL._AC_SY355_.jpg'
  },
]


const handleOpen = (i) => {
  setSlideNumber(i);
  setOpen(true)
}

const handleMove = (direction) =>{
  let newSlideNumber;

  if (direction === 'l') {
    newSlideNumber = slideNumber === 0 ? 2 : slideNumber -1;
  }else {
    newSlideNumber = slideNumber === 2 ? 0 : slideNumber +1;
  }

  setSlideNumber(newSlideNumber)
}
  return (
    <div>
      <Navbar/>
      <Header/>
        <div className='hotelContainer'>
          {open && <div className='slider'>
            <FontAwesomeIcon className='close' onClick={()=>setOpen(false)} icon={faCircleXmark}/>
            <FontAwesomeIcon className='arrow' onClick={()=>handleMove('l')} icon={faCircleArrowLeft}/>
            <div className='slideWrapper'>
              <img 
                className='sliderImg' 
                src={photos[slideNumber].src} 
                alt='' />
            </div>
            <FontAwesomeIcon className='arrow' onClick={()=>handleMove('r')} icon={faCircleArrowRight}/>
            
          </div>}
          
          <div className='hotelWrapper'>
          <button className='bookNow'>Reserve or book now</button>
            <h1 className='hotelTitle'>Produkt Titel</h1>
            <span className='hotelDistance'>
              This Product is only 30m from location!
            </span>
            <div className='hotelImages'>
            {photos.map((photo, i)=>(
              <div className='hotelImageWrapper'>
                <img 
                  onClick={()=>handleOpen(i)} 
                  className='hotelImg' 
                  src={photo.src} 
                  alt=''/>
              </div> 
            ))} 
             
              <div className='hotelDetailsPrice'>
                <h1>Titel Box...</h1>
                <span>
                  hadalkjdhsalkdhadjhasdlkjhadljkhad
                  adahdljsahdlakhdalshdasld
                </span>
                <h2>
                  <b>adhdsds</b>
                </h2>
                <button>Book it now</button>
              </div>
            </div>
            <div className='hotelDetails'>
              <div className='hotelDetailsTexts'>
                <h1 className='hotelTitle'>Titel vom Produkt</h1>
                <p className='hotelDesc'>
                  Beschreibung über das Produkt... blablablablablablablablabla
                  blablablablablablablablablablablablablablablablablablablablabla
                  blablablablablablablablablablablablablablabla
                  blablablablablablablablabla...
                </p>
              </div>
              {/* <div className='hotelDetailsPrice'>
                <h1>Titel Box...</h1>
                <span>
                  hadalkjdhsalkdhadjhasdlkjhadljkhad
                  adahdljsahdlakhdalshdasld
                </span>
                <h2>
                  <b>adhdsds</b>
                </h2>
                <button>nksbkjsAKJD</button>
              </div> */}
           
            </div>
          </div>
            <MailList />
            <Footer />
        </div>    
    </div>
    
  )
}

export default SinglePage