import React from "react";
import { motion } from "framer-motion";
import { images } from "../assets/assests";
import { FaBookOpen } from "react-icons/fa";
import { FadeRight } from "../Utils/Animation";

const HeroSection = () => {
  return (
    <section>
      <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px] relative bg-white">
        <div className="flex flex-col justify-center py-14 md:py-0 relative z-10">
          <div className="text-center md:text-left space-y-6 lg:max-w-[440px]">
            <motion.h1
              variants={FadeRight(0.6)}
              initial="hidden"
              animate="visible"
              className=" font-bold leading-relaxed xl:leading-loose"
            >
              <span className="text-4xl lg:text-6xl text-pink-600">Omsheel</span> <span className="text-4xl lg:text-5xl text-blue-900">Group</span> 
            </motion.h1>
            <motion.p
              variants={FadeRight(1.2)}
              initial="hidden"
              animate="visible"
              className="text-lg text-blue-900 font-semibold"
            >
             <span className="text-3xl">Omsheel</span>   Group is a diversified enterprise in food processing, logistics, infrastructure, and exports, blending traditional values with innovation to deliver quality, support sustainability, empower SMEs in Tier-2/3 cities and Northeast India, and build lasting partnerships through trust and expertise.
            </motion.p>

            <motion.div
              variants={FadeRight(1.5)}
              initial="hidden"
              animate="visible"
              className="flex justify-center md:justify-start"
            >
              <button className="primary-btn flex gap-2 items-center">
                <span>
                  <FaBookOpen />
                </span>
                Know More
              </button>
            </motion.div>
          </div>
        </div>
        <div className="flex justify-center item-center">
          <motion.img
            initial={{ opacity: 0, x: 200, rotate: 75 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 1, delay: 1.6 }}
            src={images.omsheel}
            alt="OmsheelImg"
            className="w-[350px] md:w-[650px] drop-shadow"
          />
        </div>
       
      </div>
    </section>
  );
};

export default HeroSection;
