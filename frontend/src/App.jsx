import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navabr from './Components/Navabr';
import Hero from './pages/Hero';
import Herooo from './pages/Herooo';
import Banner from './Components/Banner';
import Product from './Components/Product';
import Order from './Components/Order';
import Feedback from './Components/Feedback';
import Footer from './Components/Footer';
import beans from '../src/assets/bean.png';
import About from './pages/About'
import Singleproductview from './pages/Singleproductview';
import Contact from './Components/Contact';
import Cart from './pages/Cart';
import Loginpage from '../src/pages/Loginpage';
import Register from './pages/Register';
import Singledrink from './pages/Singledrink';
import Singlesnacks from './pages/Singlesnacks';
import Address from './Components/Adress';
import ScrollToTop from './Components/ScrollToTop';
import Success from './Components/Success';

function App() {
  return (
    <BrowserRouter>
      {/* Background Layer */}
      <div className='overflow-hidden'>
        <div className='bg fixed -z-10 top-0 w-full h-full'>
          <div className='bg-color absolute top-0 w-full h-screen z-0'>
            <img src={beans} className='w-full h-full absolute' alt="Beans Background" />
          </div>
        </div>

        {/* Foreground Content */}
        <div className='relative z-10'>
        <ScrollToTop/>
         <Routes>
            <Route path='/' element={<Herooo />} />
            <Route path='/about' element={<About/>}/>
           <Route path='/product' element={<Product/>}/>
                       <Route path='/singleproduct/Drink/:id' element={<Singledrink/>}/>
                       <Route path='/singleproduct/Snacks/:id' element={<Singlesnacks/>}/>
                       <Route path='/success' element={<Success/>}/>
            <Route path='/singleproduct/coffee/:id' element={<Singleproductview/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/cart' element={<Cart/>}/> 
            <Route path='/login' element={<Loginpage/>}/>
           <Route path='/register' element={<Register/>}/>
           <Route path='/adress'  element={<Address/>}/>
          </Routes>
       
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;