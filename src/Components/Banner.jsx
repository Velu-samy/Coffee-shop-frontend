import React from 'react'
import food from '../assets/food.png'
import fastfood from '../assets/fast-food.png'
import vector from '../assets/Vector.png'
import {motion} from 'framer-motion'

import bean from '../assets/bean.png'
function Banner() {
  return (
    <div>
    
<motion.div   whileInView={{y:0,opacity:1}} transition={{duration:0.9,delay:0.3}} initial={{y:-50,opacity:0}}>
      <h1 className='text-center  mt-10 font-bold text-5xl'>Explore Our Alowishus</h1>
</motion.div>
<motion.div whileInView={{y:0,opacity:1}} transition={{duration:0.9,delay:0.4}} initial={{y:0,opacity:0}}>
        <p className='text-center mt-3'> Discover handcrafted flavors, cozy vibes, and a menu that celebrates every craving—from sunrise bites to sweet indulgences.</p>

</motion.div>
      <div className='card-container flex flex-col  lg:flex-row  justify-center gap-20   items-center px-32 py-10 mt-8'>
        <motion.div whileInView={{y:0,opacity:1}} transition={{duration:0.9,delay:0.6}} initial={{y:-100,opacity:0}} className='card-bg   card w-72 flex flex-col items-center p-8 justify-center gap-2  rounded-md '>
          <h3 className='text-black font-bold  font-custom   text-center text-3xl '> Rise & Dine
</h3>
          <p className='text-white  font-thin text-sm  text-center'>Start your day with our hearty avocado toast, fluffy pancakes, or classic English breakfast.. </p>
          <img src={food} alt="" />
        <button className='bg-black  mt-2 px-16 py-3 border border-black rounded-md text-white hover:bg-transparent hover:border'>
          Check
        </button>
        </motion.div>
        <motion.div whileInView={{y:0,opacity:1}} transition={{duration:0.9,delay:0.6}} initial={{y:-100,opacity:0}} className='card-bg   card w-72 flex flex-col items-center p-8 justify-center gap-2  rounded-md '>
          <h3 className='text-black font-bold  font-custom  text-3xl '>Lunch Combos</h3>
          <p className='text-white font-thin text-center text-sm '>Grab a midday boost with our grilled chicken burger, iced latte, and crispy fries combo. </p>
          <img src={fastfood} alt="" />
        <button className='bg-black  mt-2 px-16 py-3 rounded-md border-black border text-white hover:bg-transparent hover:border'>
          Check
        </button>
        </motion.div>
         <motion.div whileInView={{y:0,opacity:1}} transition={{duration:0.9,delay:0.6}} initial={{y:-100,opacity:0}} className='card-bg   card w-72 flex flex-col items-center p-8 justify-center gap-2  rounded-md '>
          <h3 className='text-black font-bold  font-custom  text-3xl '>Sweet Treats</h3>
          <p className='text-white font-thin text-center text-sm'>Cool down with handcrafted gelato, brownie sundaes, or our signature affogato.
 </p>
          <img src={vector} alt="" />
        <button className='bg-black border border-black  mt-2 px-16 py-3 rounded-md text-white hover:bg-transparent hover:border'>
          Check
        </button>
        </motion.div>
      </div>
    </div>
  )
}

export default Banner
