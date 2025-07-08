import React from "react";
import { images } from "../assets/assests";
import { motion } from "framer-motion";
import { FadeUp } from "../Utils/Animation";
const OmsheelContent = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8 bg-white">
      <div className="flex flex-col lg:flex-row items-center  lg:items-start gap-25">
        {/* Logo */}
        <div className="">
          <motion.img
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.9 }}
            viewport={{ once: true }}
            src={images.omsheel}
            alt="Omsheel Logo"
            className=""
          />
        </div>

        {/* Content */}
        <div className="max-w-4xl text-center lg:text-left">
          <motion.h2
            variants={FadeUp(0.3)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="font-semibold text-3xl text-blue-900 mb-4"
          >
            Let’s Talk About the{" "}
            <span className="text-5xl text-black block">Company</span>
          </motion.h2>

          <div className="space-y-8">
            {/* Our Story */}
            <motion.div
              variants={FadeUp(0.5)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3 className=" text-2xl mb-2 font-semibold">Our Story</h3>
              <p className=" text-blue-900 text-lg">
                Omsheel is a group of companies with diverse interests in food
                processing, logistics, infrastructure, and exports. We are
                passionate about preserving traditional methods while embracing
                innovation to provide the best products and services to our
                customers. Our commitment to purity and quality is reflected in
                every bite.
              </p>
            </motion.div>

            {/* Who We Are */}
            <motion.div
              variants={FadeUp(0.7)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-sm text-black leading-relaxed"
            >
              <h3 className=" text-2xl mb-2 font-semibold">Who We Are</h3>
              <p className=" text-blue-900 text-lg">
                At Omsheel Group, we are dedicated to providing exceptional
                products and services. Our team consists of industry experts in
                food processing, logistics, and exports. We focus on building
                long-term relationships with our customers rooted in trust and
                quality.
              </p>
            </motion.div>

            {/* Our Vision */}
            <motion.div
              variants={FadeUp(0.9)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3 className=" text-2xl mb-2 font-semibold">Our Vision</h3>
              <p className=" text-blue-900 text-lg">
                Our ambition is to lead in all our sectors while emphasizing
                sustainability and ethics. We actively support communities and
                strengthen local businesses, particularly SMEs and startups in
                Tier-2, Tier-3, and Northeastern India. We aim to empower them
                to thrive on a global scale.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OmsheelContent;
