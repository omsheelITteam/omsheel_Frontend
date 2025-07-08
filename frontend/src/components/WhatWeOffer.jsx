import React from "react";
import { images } from "../assets/assests";
import { FadeDown, FadeUp } from "../Utils/Animation";
import { FadeRight, FadeLeft } from "../Utils/Animation";

import { motion } from "framer-motion";
import "../App.css";
const WhatWeOffer = () => {
  return (
    <div className="px-4 py-10 cursor-pointer">
      <div>
        <motion.h2
          variants={FadeUp(0.5)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center text-3xl md:text-5xl font-semibold mb-8 text-blue-900"
        >
          What We{" "}
          <span className="text-4xl md:text-6xl text-black">Offer</span>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center max-w-7xl mx-auto ">
          {/* Card 1 */}
          <motion.div
            variants={FadeRight(0.9)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="w-full max-w-[300px] h-[300px] rounded p-4 flex flex-col justify-center items-center text-center holographic-container"
          >
            <div className="relative h-20 w-20 p-1 bg-slate-200/100 rounded-full holographic-card ">
              <img
                src={images.spicesIcon}
                alt="Spices Icon"
                className="h-22 w-22  bg-[#66D2CE] p-4 rounded-full "
              />
              <p className="mt-2 text-blue-950 font-semibold">
                At Omsheel Group, we specialize in food processing using
                traditional methods and the latest technology to ensure the
                highest quality products.
              </p>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            variants={FadeDown(0.9)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="w-full max-w-[300px] h-[300px] rounded p-4 flex flex-col justify-center items-center text-center holographic-container"
          >
            <div className="relative h-20 w-20 p-1 bg-slate-200/100 rounded-full holographic-card">
              <img
                src={images.logisticsIcon}
                alt=""
                className="h-22 w-22  bg-[#66D2CE] p-4 rounded-full "
              />
              <p className="mt-2 text-blue-950 font-semibold">
                We provide logistics solutions from local to global. Our
                services include transportation, warehousing, and inventory
                management.
              </p>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            variants={FadeLeft(0.9)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="w-full max-w-[300px] h-[300px] rounded p-4 flex flex-col justify-center items-center text-center holographic-container"
          >
            <div className="relative h-20 w-20 p-1 bg-slate-200/100 rounded-full holographic-card">
              <img
                src={images.infrastructureIcon}
                alt=""
                className="h-22 w-22  bg-[#66D2CE] p-4 rounded-full "
              />
              <p className="mt-2 text-blue-950 font-semibold">
                We deliver infrastructure solutions for businesses and
                communities from construction to utilities management.
              </p>
            </div>
          </motion.div>

          {/* Card 4 */}
          <motion.div
            variants={FadeRight(0.9)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="w-full max-w-[300px] h-[300px] rounded p-4 flex flex-col justify-center items-center text-center holographic-container"
          >
            <div className="relative h-20 w-20 p-1 bg-slate-200/100 rounded-full holographic-card">
              <img
                src={images.exportsIcon}
                alt=""
                className="h-22 w-22  bg-[#66D2CE] p-4 rounded-full "
              />
              <p className="mt-2 text-blue-950 font-semibold">
                We are experts in exporting goods globally, offering customs
                clearance, documentation, and logistics support.
              </p>
            </div>
          </motion.div>

          {/* Card 5 */}
          <motion.div
            variants={FadeUp(0.9)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="w-full max-w-[300px] h-[300px] rounded p-4 flex flex-col justify-center items-center text-center holographic-container"
          >
            <div className="relative h-20 w-20 p-1 bg-slate-200/100 rounded-full holographic-card">
              <img
                src={images.consultingIcon}
                alt=""
                className="h-22 w-22 bg-[#66D2CE] p-4 rounded-full "
              />
              <p className="mt-2 text-blue-950 font-semibold">
                We provide expert consulting to help businesses grow, from
                marketing strategy to supply chain optimization.
              </p>
            </div>
          </motion.div>

          {/* Card 6 */}
          <motion.div
            variants={FadeLeft(0.9)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="w-full max-w-[300px] h-[300px] rounded p-4 flex flex-col justify-center items-center text-center holographic-container"
          >
            <div className="relative h-20 w-20 p-1 bg-slate-200/100 rounded-full holographic-card">
              <img
                src={images.podcastIcon}
                alt=""
                className="h-22 w-22  bg-[#66D2CE] p-4 rounded-full "
              />
              <p className="mt-2 text-blue-950 font-semibold">
                We specialize in podcasts, live TV, and news
                broadcasting—creating compelling content across digital
                platforms.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeOffer;
