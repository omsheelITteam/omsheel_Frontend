import React from "react";
import Omsheel from "../assets/omsheel.png";
import { images } from "../assets/assests";
import { motion } from "framer-motion";
import "../App.css";
import "./imageCard.css";
import EmptyComponent from "../components/EmptyComponent";
import { FadeDown, FadeLeft, FadeRight, FadeUp } from "../Utils/Animation";
const About = () => {
  return (
    <div
      initial={{ opacity: 0, y: -100 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <style>
        {`
          @keyframes spinClockwise {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          .animate-spin-clockwise {
            animation: spinClockwise 10s linear infinite;
          }
        `}
      </style>
      {/* Section Header */}
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>
          ABOUT <span className="text-blue-900">US</span>
        </p>
      </div>
      {/* Main Content */}
      <div className="my-10 flex flex-col md:flex-row gap-12 items-center px-6 md:px-12 justify-center">
        <motion.img
          variants={FadeRight(0.9)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="w-full md:max-w-[360px] h-52 sm:h-56 md:h-60 lg:h-52 xl:h-60 object-contain rounded-full animate-spin-clockwise"
          src={Omsheel}
          alt="Omsheel"
        />
        <motion.div
          variants={FadeLeft(0.9)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col justify-center gap-6 md:w-2/4 text-sm text-blue-900"
        >
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-black">
            Omsheel Groups
          </h2>
          <p>
            Omsheel is a group of companies with diverse interests in food
            processing, logistics, infrastructure, and exports. We are
            passionate about preserving traditional methods while also embracing
            innovation to provide the best products and services to our
            customers. Our commitment to purity and quality is reflected in
            every bite.
          </p>
          <p>
            Omsheel Group is committed to achieving leadership in diverse
            sectors such as food processing, logistics, infrastructure, and
            exports. We prioritize sustainability, ethical business practices,
            and actively support local communities. A key focus of our mission
            is empowering SMEs and startups, particularly those based in Tier-2
            and Tier-3 towns and cities, with special emphasis on Northeastern
            India. We aim to help these enterprises enter and thrive in global
            markets through strategic partnerships and guidance. Our strength
            lies in building long-term relationships rooted in trust, quality,
            and industry expertise.
          </p>
        </motion.div>
      </div>
      {/* Why Choose Us Section */}
      <motion.div
        variants={FadeDown(0.9)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-xl my-4 px-4"
      >
        <p className="text-center">
          WHY <span className="text-gray-700 font-semibold">CHOOSE US</span>
        </p>
      </motion.div>
      <motion.div
        variants={FadeUp(0.9)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-col md:flex-row mb-20 justify-around gap-5"
      >
        <div className="imgcontainer">
          <div className="Imgcard">
            <img src={images.TrustImg} alt="" className="images3" />
            <div className="intro">
              <h2>TRUST</h2>
              <p className="text-lg font-semibold">
                Long-term partnerships based on transparency and quality
              </p>
            </div>
          </div>

          <div className="Imgcard">
            <img src={images.empowermentImg} alt="" className="images3" />
            <div className="intro">
              <h2>EMPOWERMENT</h2>
              <p className="text-lg font-semibold">
                {" "}
                Dedicated to uplifting SMEs and startups, especially in
                Northeast India.
              </p>
            </div>
          </div>

          <div className="Imgcard">
            <img src={images.sustainImg} alt="" className="images3" />
            <div className="intro">
              <h2>SUSTAINABILITY</h2>
              <p className="text-lg font-semibold">
                {" "}
                Ethical business practices that support people and the planet.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
      {/* Team Cards Section */}
      <motion.h2
        variants={FadeDown(0.9)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-4xl font-bold text-center"
      >
        Our <span className="text-blue-900"> Team </span>{" "}
      </motion.h2>
      <br /> <br /> <br /> <br />
      <motion.div
        variants={FadeUp(0.9)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-wrap justify-center gap-12 px-4 md:px-12 cursor-pointer"
      >
        <div className="card card1">
          <div className="imgBx">
            <img src={images.mainFounder} alt="Card" />
          </div>
          <div className="content">
            <h2 className="text-xl font-bold text-blue-900 mb-2 text-center">
              {" "}
              Odhary Muthulingam Shetty{" "}
            </h2>
            <span className="inline-block mb-3 text-sm text-white bg-secondary px-3 py-1 rounded-full">
              Chairman{" "}
            </span>
            <p></p>
          </div>
        </div>
        <div className="card card2">
          <div className="imgBx">
            <img src={images.firstFounder} alt="Card" />
          </div>
          <div className="content">
            <h2 className="text-xl font-bold text-blue-900 mb-2 text-center">
              Major Sunil Shetty
            </h2>
            <span className="inline-block mb-3 text-sm text-white bg-secondary px-3 py-1 rounded-full">
              Founder & CEO
            </span>
            <p>
              Major Sunil Shetty (Retd), Founder of My Startup TV, highlights
              Indian startups with strategic insight from his army background.
            </p>
          </div>
        </div>
        <div className="card card2">
          <div className="imgBx">
            <img src={images.secondFounder} alt="Card" />
          </div>
          <div className="content">
            <h2 className="text-xl font-bold text-blue-900 mb-2 text-center">
              Geetesh Sarin
            </h2>
            <span className="inline-block mb-3 text-sm text-white bg-secondary px-3 py-1 rounded-full">
              Director
            </span>
            <p>
              Major Sunil Shetty (Retd), Founder of My Startup TV, highlights
              Indian startups with strategic insight from his army background.
            </p>
          </div>
        </div>
      </motion.div>
      <br />
      <br />
      <br />
      <br /> <br /> <br /> <br />
      {/* <EmptyComponent /> */}
    </div>
  );
};

export default About;
