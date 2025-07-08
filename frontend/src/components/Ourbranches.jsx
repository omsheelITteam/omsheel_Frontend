import React from "react";
import { cardsData } from "../assets/assests";
import { motion, delay } from "framer-motion";
import { FadeUp } from "../Utils/Animation";
import "../App.css";
const Ourbranches = () => {
  return (
    <motion.section
      variants={FadeUp(0.5)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="p-6 w-full overflow-x-auto hide-scrollbar bg-slate-50 cursor-pointer"
    >
      <h1 className="text-3xl font-bold text-center text-blue-900 mb-8">
        Our Associate Partners
      </h1>

      <div className="w-max flex gap-6 animate-marquee pauseonHover">
        {cardsData?.map((menu, index) => (
          <motion.div
            initial="hidden"
            whileInView="visible"
            key={index}
            className="bg-white rounded-2xl p-2 shadow-[0_0_12px_0_rgba(0,0,0,0.15)] flex items-center gap-4 flex-shrink-0 w-64 h-32"
          >
            <img
              src={menu.image}
              alt=""
              className="rounded-xl object-contain w-full h-full"
            />
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Ourbranches;
