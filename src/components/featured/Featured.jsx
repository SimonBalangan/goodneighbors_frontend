import './featured.css'

const Featured = () => {
  return (
    <div className='featured'>
        <div className='featuredItem'>
            <img className='featuredImg' src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Oberstadt_in_Mainz.svg/800px-Oberstadt_in_Mainz.svg.png' alt='Map'/>
            <div className='featuredTitles'>
                <h1>Mainz</h1>
                <h2>location 123</h2>
            </div>
        </div>
        <div className='featuredItem'>
            <img className='featuredImg' src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Oberstadt_in_Mainz.svg/800px-Oberstadt_in_Mainz.svg.png' alt='Map'/>
            <div className='featuredTitles'>
                <h1>Mainz</h1>
                <h2>location 123</h2>
            </div>
        </div>
        <div className='featuredItem'>
            <img className='featuredImg' src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Oberstadt_in_Mainz.svg/800px-Oberstadt_in_Mainz.svg.png' alt='Map'/>
            <div className='featuredTitles'>
                <h1>Mainz</h1>
                <h2>location 123</h2>
            </div>
        </div>
    </div>
  )
}

export default Featured