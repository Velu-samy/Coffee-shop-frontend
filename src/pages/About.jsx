import React from 'react';
import about1 from '../assets/about1.jpg';
import about2 from '../assets/about2.jpg';
import about3 from '../assets/about3.jpg';
import about4 from '../assets/about4.jpg';
import Navbar from '../Components/Navabr';
import Footer from '../Components/Footer';
import { motion } from 'framer-motion';

function About() {
  const sections = [
    {
      image: about1,
      text: `At Alowishus, coffee is more than a beverage — it’s a daily ritual, a quiet moment of reflection, and a shared experience that brings people together. From the first aroma of freshly ground beans to the final sip of a perfectly brewed cup, we believe in honoring the craft behind every pour. Our journey began with a simple vision: to create a space where flavor, comfort, and community could thrive.`,
    },
    {
      image: about2,
      text: `Our team is the heartbeat of Alowishus. Each member brings passion, skill, and a genuine love for hospitality. From the baristas who remember your name and your favorite order, to the chefs crafting fresh pastries and savory bites in the kitchen, every detail is handled with care. We believe in training not just for technique, but for empathy — because great service starts with understanding.`,
    },
    {
      image: about3,
      text: `Step into Alowishus and you’ll find more than just coffee — you’ll find a philosophy. We believe in slowing down, savoring the moment, and celebrating the small joys that make life rich. Our seasonal menus are inspired by local ingredients and global flavors, offering something fresh with every visit.`,
    },
    {
      image: about4,
      text: `Sustainability is at the core of what we do, from compostable packaging to partnerships with eco-conscious suppliers. We’re proud to be part of a movement that values quality over quantity, relationships over transactions, and purpose over profit. Whether you’re here for your first visit or your hundredth, we want you to leave feeling better than when you arrived.`,
    },
  ];

  return (
    <div className="bg-white text-gray-800">
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-12">About</h1>

        {sections.map((section, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-10 mb-16 ${
              index % 2 !== 0 ? 'md:flex-row-reverse' : ''
            }`}
          >
            {/* Image */}
            <motion.div
              initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="w-full md:w-1/2"
            >
              <img
                src={section.image}
                alt={`About ${index + 1}`}
                className="rounded-lg shadow-lg w-full object-cover"
              />
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ x: index % 2 === 0 ? 50 : -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="w-full md:w-1/2"
            >
              <p className="text-base leading-relaxed">{section.text}</p>
            </motion.div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default About;