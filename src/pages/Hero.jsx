import React from 'react'
import Navabr from '../Components/Navabr'
import img from '../assets/Frame.png'
import {motion} from 'framer-motion'
function Hero() {
  return (
<div className='bg-hero' >
<div>
     <Navabr/>
  {/*    <img src={beans}  className=' absolute left-3/4 top-52
      '  alt="" /> */}
     <div className='lg:flex     absolute  top-11    gap-20    justify-around w-full items-center  ' >
     <motion.div animate={{x:0,opacity:1}} transition={{duration:0.9,delay:0.9}} initial={{x:-50,opacity:0}} className='w-full        lg:w-1/2 flex justify-center'>
<img src={img}   className='img-hero'   alt="" />
     </motion.div>
     <div className='w-full  lg:w-1/2 flex justify-center flex-col px-10'>
<motion.div animate={{x:0,opacity:1}} transition={{duration:0.9,delay:1.5}} initial={{x:0,opacity:0}}>
         <h1 className="text-4xl  text-center    lg:text-8xl font-extrabold  lg:text-start  font-serif   " style={{color:"#362312"}}>Alowishus<br/> Delicious<br/> Coffee</h1>

</motion.div>
  <motion.div animate={{x:0,opacity:1}} transition={{duration:0.9,delay:2.0}} initial={{x:0,opacity:0}} >
    <p className="mt-5 text-md text-center lg:text-start  text-white font-custom" >
 Discover handcrafted coffee, cozy ambiance, and a menu made with love.  
  Order online, explore our specials, or just drop by for your daily dose of comfort.

  </p>
  </motion.div>
<motion.div animate={{y:0,opacity:1}} transition={{duration:0.9,delay:2.5}} initial={{y:-50,opacity:0}} className='flex lg:flex-row  w-full  items-center justify-between flex-col lg:gap-5 mt-10 items-center'>
  <button className='bg-black  text-white px-14  py-3 rounded-3xl  border border-black hover:bg-transparent hover:border '>
  Download App
  </button>
<a href="" className=' text-black  px-14 py-3  ' style={{textDecoration:'underline'}} >
  Checkout
</a>
</motion.div>
     </div>
     </div>
</div>    
    </div>
  )
}

export default Hero
