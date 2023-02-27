import React, { useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header';
import SearchItem from "../../components/searchItem/SearchItem";
import { useLocation } from 'react-router-dom';

const List = () => {
  
  const location = useLocation();
  const [product, setProduct] = useState(location.state.product);
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  
  console.log(location)
  return (
    <div>
      <Navbar />
      <Header />
      <div className='listResult'>
        <SearchItem/>
        <SearchItem/>
        <SearchItem/>
        <SearchItem/>
        <SearchItem/>
      </div>
    </div>
  )
}

export default List