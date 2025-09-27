import React from 'react'
import img from '../assets/Reserve.png'
import {motion} from 'framer-motion'

function Order(){
  return (
<div>
      <div className='flex  flex-col lg:flex-row  justify-center pt-16 p-7 items-center border-dashed border-red-500'>
      <motion.div whileInView={{x:0,opacity:1}} transition={{duration:0.9,delay:0.4}} initial={{x:-100,opacity:0}} className='flex w-full  justify-center lg:w-1/2'>
        <img src={img} className='lg:w-96 w-80' alt="" />
      </motion.div>
      <div className='w-full lg:w-1/2 flex justify-center flex-col  p-5'>
<motion.div  whileInView={{x:0,opacity:1}} transition={{duration:0.9,delay:0.4}} initial={{x:100,opacity:0}}>
          <h1 className='font-extrabold text-6xl  lg:text-7xl'>Oder Your <br/> Favourite <span className='text-color'>Coffee :)</span> </h1>
</motion.div>
      <motion.div  whileInView={{x:0,opacity:1}} transition={{duration:0.9,delay:0.6}} initial={{x:0,opacity:0}}>
          <p className='mt-5'> Order your favourite coffee and let the aroma do the talking.  
  From bold brews to mellow blends we’ve got your cravings covered.  
  Allwiuns Coffee Shop, where every cup tells a story.  
  Sip. Smile. Repeat.

</p>
      </motion.div>
<motion.div whileInView={{y:0,opacity:1}} transition={{duration:0.9,delay:0.8}} initial={{y:-50,opacity:0}}>   
       <button className='mt-10 bg-black text-white px-14 py-2 rounded-2xl border hover:bg-transparent hover:text-black hover:border border-black'>Oder now</button>
</motion.div>    
      </div>
    </div>
  </div>
  )
}

export default Order
