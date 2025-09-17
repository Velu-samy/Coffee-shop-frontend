import React from 'react';
import about1 from '../data/about1.jpg';
import about2 from '../data/about2.jpg';
import about3 from '../data/about3.jpg';
import about4 from '../data/about4.jpg';
import Navbar from '../Components/Navabr';
import Footer from '../Components/Footer';
import { motion } from 'framer-motion';

function About() {
  return (
    <div>
      <Navbar />
      <div className="px-4 lg:px-10 py-10 space-y-16">
        {/* Section 1 */}
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <motion.div
            animate={{ x: 0, opacity: 1 }}
            initial={{ x: -40, opacity: 0 }}
            transition={{ delay: 0.3, duration: 1.4 }}
            className="w-full lg:w-1/2"
          >
            <img src={about1} className="rounded-md w-full" alt="About 1" />
          </motion.div>
          <motion.div
            animate={{ x: 0, opacity: 1 }}
            initial={{ x: 40, opacity: 0 }}
            transition={{ delay: 0.3, duration: 1.4 }}
            className="w-full lg:w-1/2"
          >
            <h1 className="text-4xl lg:text-6xl font-semibold mb-4">About</h1>
            <p className="text-base text-justify">
              At Alowishus, coffee is more than a beverage — it’s a daily ritual, a quiet moment of reflection, and a shared experience that brings people together. From the first aroma of freshly ground beans to the final sip of a perfectly brewed cup, we believe in honoring the craft behind every pour. Our journey began with a simple vision: to create a space where flavor, comfort, and community could thrive.
            </p>
          </motion.div>
        </div>

        {/* Section 2 */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-10">
          <motion.div
            animate={{ x: 0, opacity: 1 }}
            initial={{ x: 40, opacity: 0 }}
            transition={{ delay: 0.3, duration: 1.4 }}
            className="w-full lg:w-1/2"
          >
            <img src={about2} className="rounded-md w-full" alt="About 2" />
          </motion.div>
          <motion.div
            animate={{ x: 0, opacity: 1 }}
            initial={{ x: -40, opacity: 0 }}
            transition={{ delay: 0.3, duration: 1.4 }}
            className="w-full lg:w-1/2"
          >
            <p className="text-base text-justify">
              Our team is the heartbeat of Alowishus. Each member brings passion, skill, and a genuine love for hospitality. From the baristas who remember your name and your favorite order, to the chefs crafting fresh pastries and savory bites in the kitchen, every detail is handled with care. We believe in training not just for technique, but for empathy — because great service starts with understanding.
            </p>
          </motion.div>
        </div>

        {/* Section 3 */}
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <motion.div
            animate={{ x: 0, opacity: 1 }}
            initial={{ x: -40, opacity: 0 }}
            transition={{ delay: 0.3, duration: 1.4 }}
            className="w-full lg:w-1/2"
          >
            <img src={about3} className="rounded-md w-full" alt="About 3" />
          </motion.div>
          <motion.div
            animate={{ x: 0, opacity: 1 }}
            initial={{ x: 40, opacity: 0 }}
            transition={{ delay: 0.3, duration: 1.4 }}
            className="w-full lg:w-1/2"
          >
            <p className="text-base text-justify">
              Our interiors are designed to feel like a second home: warm lighting, cozy corners, and a layout that invites conversation or quiet solitude. We’ve blended rustic charm with modern elegance, creating a space that feels both grounded and inspiring. Whether you're a freelancer, a couple, or a regular — we’ve got a seat waiting for you.
            </p>
          </motion.div>
        </div>

        {/* Section 4 */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-10">
          <motion.div
            animate={{ x: 0, opacity: 1 }}
            initial={{ x: 40, opacity: 0 }}
            transition={{ delay: 0.3, duration: 1.4 }}
            className="w-full lg:w-1/2"
          >
            <img src={about4} className="rounded-md w-full" alt="About 4" />
          </motion.div>
          <motion.div
            animate={{ x: 0, opacity: 1 }}
            initial={{ x: -40, opacity: 0 }}
            transition={{ delay: 0.3, duration: 1.4 }}
            className="w-full lg:w-1/2"
          >
            <p className="text-base text-justify">
              Step into Alowishus and you’ll find more than just coffee — you’ll find a philosophy. We believe in slowing down, savoring the moment, and celebrating the small joys that make life rich. Sustainability is at the core of what we do, and every visit is brewed with intention.
            </p>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;