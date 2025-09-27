import React from 'react'
import about1 from '../assets/about1.jpg'
import about2 from '../assets/about2.jpg'
import about3 from '../assets/about3.jpg'
import about4 from '../assets/about4.jpg'
import Navbar from '../Components/Navabr'
import Footer from '../Components/Footer'
import { delay } from 'framer-motion'
import { motion } from 'framer-motion'
function About() {
  return (
    <div>
      <Navbar/>
      <div>
        <div className='about-container my-20 flex justify-center  items-center'>
          <div className="left w-1/2 ml-36 about-img">
         <div   className='flex justify-center gap-5 items-center flex-col'> 
          <motion.div animate={{x:0 , opacity:1}} initial={{x:20,opacity:0}} transition={{delay:0.3,duration:1.4}}  className=''>
  <img src={about1} className='rounded-md'  alt="" />
          </motion.div>
          <motion.div  animate={{x:0 , opacity:1}} initial={{x:-20,opacity:0}} transition={{delay:0.6,duration:1.4}}  className=' relative right-44'>
              <img src={about2} className='rounded-md'  alt="" />
          </motion.div>
          <motion.div animate={{x:0 , opacity:1}} initial={{x:20,opacity:0}} transition={{delay:0.8,duration:1.4}} className=''>
              <img src={about3} className='rounded-md'  alt="" />
          </motion.div>
            <motion.div whileInView={{x:0 , opacity:1}} initial={{x:-20,opacity:0}} transition={{delay:0.3,duration:1.4}} className=' rounded-md relative     right-44'>
              <img src={about4} className='rounded-md'  alt="" />
          </motion.div>
          
          </div>
          </div>
        <div className="right w-1/2  ml-20">
        <div className=' shadow-sm p-6 rounded-lg ml-10 shadow-slate-800'>

<motion.div whileInView={{x:0 , opacity:1}} initial={{x:40,opacity:0}} transition={{delay:0.3,duration:1.4}} >
              <h1 className='text-6xl font-semibold mb-3 '>About</h1>
</motion.div>
     
     <motion.div  whileInView={{x:0 , opacity:1}} initial={{x:0,opacity:0}} transition={{delay:0.3,duration:1.4}} >
        <p class="text-base  mb-8">
  At Alowishus, coffee is more than a beverage — it’s a daily ritual, a quiet moment of reflection, and a shared experience that brings people together. From the first aroma of freshly ground beans to the final sip of a perfectly brewed cup, we believe in honoring the craft behind every pour. Our journey began with a simple vision: to create a space where flavor, comfort, and community could thrive. We source our beans ethically, roast them with precision, and train our baristas to treat every cup as a canvas. Whether you're grabbing a quick espresso on your way to work or settling in for a slow morning with friends, we’re here to make that moment memorable. Our menu is curated to reflect both tradition and innovation — from classic brews to seasonal specials that surprise and delight. We believe that coffee should be personal, and every guest should feel seen, heard, and welcomed. That’s why we’ve built Alowishus not just as a café, but as a place where stories unfold, ideas spark, and connections deepen. It’s not just about what’s in the cup — it’s about what happens around it.
</p>

     </motion.div>
<motion.div whileInView={{x:0 , opacity:1}} initial={{x:0,opacity:0}} transition={{delay:0.3,duration:1.4}}>
  <p class="text-base  mb-8">
  Our team is the heartbeat of Alowishus. Each member brings passion, skill, and a genuine love for hospitality. From the baristas who remember your name and your favorite order, to the chefs crafting fresh pastries and savory bites in the kitchen, every detail is handled with care. We believe in training not just for technique, but for empathy — because great service starts with understanding. Our interiors are designed to feel like a second home: warm lighting, cozy corners, and a layout that invites conversation or quiet solitude. We’ve blended rustic charm with modern elegance, creating a space that feels both grounded and inspiring. Whether you're a freelancer looking for a creative nook, a couple on a weekend date, or a regular who knows the rhythm of our mornings, we’ve got a seat waiting for you. We host local artists, support community events, and always look for ways to give back. Alowishus isn’t just a business — it’s a living, breathing part of the neighborhood, shaped by the people who walk through our doors every day.
</p>
</motion.div>
<motion.div whileInView={{x:0 , opacity:1}} initial={{x:0,opacity:0}} transition={{delay:0.3,duration:1.4}}>
  <p class="text-base ">
  Step into Alowishus and you’ll find more than just coffee — you’ll find a philosophy. We believe in slowing down, savoring the moment, and celebrating the small joys that make life rich. Our seasonal menus are inspired by local ingredients and global flavors, offering something fresh with every visit. We experiment, we listen, and we evolve — always guided by the feedback and stories of our guests. Sustainability is at the core of what we do, from compostable packaging to partnerships with eco-conscious suppliers. We’re proud to be part of a movement that values quality over quantity, relationships over transactions, and purpose over profit. Whether you’re here for your first visit or your hundredth, we want you to leave feeling better than when you arrived. That’s the Alowishus promise: a place where coffee meets care, and every moment is brewed with intention.
</p>
</motion.div>
        </div>
        </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default About
