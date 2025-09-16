import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Brooklyn Simmons",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    feedback:
      "The hazelnut latte from Alwinss is my new obsession. Smooth, nutty, and not overly sweet—just perfect.",
    rating: 5,
  },
  {
    name: "Imam White",
    image: "https://randomuser.me/api/portraits/women/47.jpg",
    feedback:
      "Tried the cold brew today. Bold, refreshing, and surprisingly mellow. Alwinss knows how to brew!",
    rating: 5,
  },
  {
    name: "Robert Fox",
    image: "https://randomuser.me/api/portraits/men/52.jpg",
    feedback:
      "Their filter coffee hits differently. It’s got that nostalgic South Indian punch but with a modern twist.",
    rating: 4,
  },
  {
    name: "Sarah Johnson",
    image: "https://randomuser.me/api/portraits/women/49.jpg",
    feedback:
      "The service was quick and reliable. I’ll definitely recommend it to my friends.",
    rating: 5,
  },
];

export default function Feedback() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? testimonials.length - 2 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrent((prev) =>
      prev >= testimonials.length - 2 ? 0 : prev + 1
    );
  };

  return (
   <div className="flex justify-between mt-10 flex-col items-center lg:flex-row-reverse">
     <div className="flex  flex-row  justify-center items-center lg:flex-col">
      <div className="lg:pr-24 p-5"> 
      <motion.div whileInView={{x:0,opacity:1}} transition={{duration:0.9,delay:0.6}} initial={{x:200,opacity:0}}>
          <h2 className="text-4xl mb-10 md:text-4xl font-bold text-center ">
          What Our <span className="text-brown-600">Customers Say</span>
        </h2>
      </motion.div>
<motion.div  whileInView={{x:0,opacity:1}} transition={{duration:0.9,delay:0.8}} initial={{x:0,opacity:0}}>
          <p className="text-center mt-3">Our coffee shop has consistently received outstanding feedback from customers who appreciate not only the quality of our beverages but also the warm and inviting atmosphere we create. Guests often highlight our attention to detail, friendly service, and the unique flavors that set us apart. Whether it's a quick espresso or a relaxing afternoon with friends, our shop has become a local favorite thanks to the trust and satisfaction of our loyal community. We’re proud to be known for excellence, and we continue to raise the bar with every cup we serve.</p>
</motion.div>
           <motion.div whileInView={{x:0,opacity:1}} transition={{duration:0.9,delay:0.9}} initial={{x:0,opacity:0}} className="flex    justify-center mt-8 gap-4">
          <button
            onClick={prevSlide}
            className="p-3 bg-white rounded-full shadow-md hover:bg-gray-300 transition"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="p-3 bg-white rounded-full shadow-md hover:bg-gray-300 transition"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </motion.div>
        </div>
    </div>
    <section className="relative w-full  lg:w-1/2 py-16 flex justify-start items-center">
      <div className="max-w-6xl w-full px-6">
        {/* Heading */}
       

        {/* Slider Wrapper */}
        <div className="relative overflow-hidden">
          <div
            className="flex  transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${current * 100}%)`, // shift by 50% each time (2 cards per view)
            }}
          >
            {testimonials.map((t, index) => (
              <div
                key={index}
                className=" w-full  lg:w-1/2 flex-shrink-0 px-4 " // each card takes 50% width
              >
               
                <motion.div  whileInView={{x:0,opacity:1}} transition={{duration:0.9,delay:0.6}} initial={{x:-200,opacity:0}} className="feedback-card-bg rounded-2xl shadow-lg p-6 text-center">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-64 mb-3"
                  />
                  <h3 className="text-lg font-semibold">{t.name}</h3>

                  {/* Star rating */}
                  <div className="   flex justify-center    mb-3 bg-">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-500 fill-yellow-500"
                      />
                    ))}
                  </div>

                  <p className="text-white italic">“{t.feedback}”</p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
     
      </div>
    </section>
   </div>
  );
}
