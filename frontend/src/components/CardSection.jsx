import React from "react";
import { motion, delay } from "framer-motion";
import { companies } from "../assets/assests";
import { FadeLeft, FadeRight } from "../Utils/Animation";
const CardSection = () => {
  return (
    <section>
      <div className="container pt-12 pb-20 bg-white text-blue-900  cursor-pointer ">
        <motion.h1
          variants={FadeRight(0.9)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-2xl font-bold text-left pb-10 uppercase"
        >
          Our BUSINESSES
        </motion.h1>
        <div className="flex justify-between w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
            {companies.map((menu, index) => (
              <motion.div
                variants={FadeRight(0.9)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                key={index}
                className="bg-white rounded-3xl p-4 shadow-[0_0_22px_0_rgba(0,0,0,0.20)] flex items-center gap-4"
              >
                <img
                  src={menu.image}
                  alt=""
                  className="w-[75px] mb-4 scale-110 transform -translate-y-6"
                />
                <div>
                  <h1 className="text-3xl font-semibold text-pink-600">
                    {menu.title1}
                  </h1>
                  <h1 className="text-xl font-semibold ">{menu.title2}</h1>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardSection;
