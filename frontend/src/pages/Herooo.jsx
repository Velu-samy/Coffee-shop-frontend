import React from 'react'
import Hero from './Hero';
import Banner from '../Components/Banner';
import Product from '../Components/Product';
import Order from '../Components/Order';
import Feedback from '../Components/Feedback';
import Footer from '../Components/Footer';
import { GiFootPlaster } from 'react-icons/gi';
import Rproduct from '../Components/Rproduct';

function Herooo() {
  return (
    <div className=''>
      <Hero/>
      <Banner/>
    <Rproduct/>
      <Order/>
      <Feedback/>
      <Footer/>
    </div>
  )
}

export default Herooo
