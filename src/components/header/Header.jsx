import { faCalendarDays } from '@fortawesome/free-regular-svg-icons'
import { faBabyCarriage, faGamepad, faGear, faKitchenSet } from '@fortawesome/free-solid-svg-icons'      //go to the fortawsome website and istall all dep and import the icon file you want        
import { faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { DateRange } from 'react-date-range';
import {useState} from 'react'
import './header.css'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {format} from 'date-fns'
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const [product, setProduct] = useState('')
    const [destination, setDestination] = useState('')
    const [openDate, setOpenDate] = useState(false)
    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
      ]);

const navigate = useNavigate();

const handleSearch = () => {
    navigate('/products', { state:{ product, destination, date } });
}

  return (
    <div className='header'>
        <div className='headerContainer'>
            <div className='headerList'>
                <div className='headerListItem active'>
                    <FontAwesomeIcon icon={faScrewdriverWrench} />
                    <span>Tools</span>
                </div>

                <div className='headerListItem'>
                    <FontAwesomeIcon icon={faKitchenSet} />
                    <span>Kitchen</span>
                </div>
                <div className='headerListItem'>
                    <FontAwesomeIcon icon={faBabyCarriage} />
                    <span>Baby</span>
                </div>
                
                <div className='headerListItem'>
                    <FontAwesomeIcon icon={faGamepad} />
                    <span>Games</span>
                </div>
            </div>
        
            <h1 className='headerTitle'>Good Neighbors</h1>
            <p>Welcome to your neighborhood!</p>
            <button className='headerBtn'>Sign in / Register</button>
            <div className='headerSearch'>
                <div className='headerSearchItem'>
                    <FontAwesomeIcon icon={faGear} />
                    <input  type='text' 
                            placeholder='what are you looking for?'
                            className='headerSearchInput'
                            onChange={ (e) => setProduct(e.target.value) }
                    />
                </div>
                <div className='headerSearchItem'>
                    <FontAwesomeIcon icon={faGear} />
                    <input  type='text' 
                            placeholder='destination?'
                            className='headerSearchInput'
                            onChange={ (e) => setDestination(e.target.value) }
                    />
                </div>
                <div className='headerSearchItem'>
                    <FontAwesomeIcon icon={faCalendarDays} />
                    <span onClick={() => setOpenDate(!openDate)} className='headerSearchText'>{`${format(date[0].startDate,'MM/dd/yyyy')} to ${format(date[0].endDate,'MM/dd/yyyy')}`}</span>
                    {openDate && <DateRange
                    editableDateInputs={true}  
                    onChange={item => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className='date'
                    />}
                </div>
                <div className='headerSearchItem'>
                    <button className='headerBtn' onClick={handleSearch}>Search</button>
                </div>
            </div>
        </div>    
    </div>
    
  )
}

export default Header