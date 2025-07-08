import React from "react";
import { images } from "../assets/assests";
import { motion } from "framer-motion";
import { FadeUp } from "../Utils/Animation";

const WhyChooseUs = () => {
  return (
    <div className="bg-white px-6 py-4 cursor-pointer ">
      <motion.div
        variants={FadeUp(0.3)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-5xl text-center text-blue-900 font-semibold mb-10"
      >
        Why Choose <span className="text-black text-6xl">US</span>
      </motion.div>

      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 p-2 ">
        {/* Image */}
        <div className="order-1 lg:order-2 w-full lg:w-1/2 flex justify-center">
          <motion.img
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.10 }}
            viewport={{ once: true }}
            src={images.chooseusImg}
            alt="Why Choose Us"
            className="max-w-full h-auto"
          />
        </div>

        {/* Content */}
        <div className="order-2 lg:order-1 w-full lg:w-1/2 flex flex-col gap-8">
          <motion.div
            variants={FadeUp(0.5)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className=" text-2xl font-semibold">
              Quality Products
            </h2>
            <p className="text-blue-900 text-lg">
              At Omsheel Group, we are committed to providing the highest
              quality food to our customers. We use traditional methods and the
              latest technology to ensure purity, freshness, and taste. Food
              Safety Management System is certified for ISO 22000:2018
              International Accreditation Certification.
            </p>
          </motion.div>

          <motion.div
            variants={FadeUp(0.7)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className=" text-2xl font-semibold">Expertise</h2>
            <p className="text-blue-900 text-lg">
              Our team of experts has years of experience in each of our
              industries, from food processing to logistics to exports. We are
              dedicated to providing the best possible service to our customers.
            </p>
          </motion.div>

          <motion.div
            variants={FadeUp(0.9)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-semibold">Innovation</h2>
            <p className="text-blue-900 text-lg">
              We believe in embracing innovation while preserving traditional
              methods. Our in-house research teams are constantly exploring new
              technologies and techniques to improve our products and services.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
