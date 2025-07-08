// import React from 'react';
import { delay, motion } from "framer-motion";
// // Make sure these imports exist in your assets file

import React, { useState, useEffect, useRef } from "react";
import { images } from "../assets/assests";
import { FadeLeft, FadeRight } from "../Utils/Animation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { companies } from "../assets/assests";
import { groupWorks, subWorks } from "../assets/assests";
import "../App.css";
import "./OurWorks.css";
const sliderImages = [
  images.comapny1Img,
  images.comapny2Img,
  images.comapny3Img,
  images.comapny4Img,
  images.comapny5Img,
  images.comapny6Img,
  images.comapny7Img,
  images.comapny8Img,
  images.comapny9Img,
  images.comapny10Img,
];
// const bubbles = [
//   {
//     text: "MyStartup TV",
//     position: "top-0 left-1/2 -translate-x-1/2",
//     bg: "bg-orange-300",
//     image: images.Branch1pic,
//     delay: 0,
//   },
//   {
//     text: "MyStartup Life",
//     position: "top-[15%] left-0",
//     bg: "bg-yellow-300",
//     image: images.Branch2pic,
//     delay: 0.6,
//   },
//   {
//     text: "Shops Infra Construction",
//     position: "top-[15%] right-0",
//     bg: "bg-blue-300",
//     image: images.Branch3pic,
//     delay: 0.3,
//   },
//   {
//     text: "DADI food product",
//     position: "bottom-1/4 left-0",
//     bg: "bg-pink-300",
//     image: images.Branch4pic,
//     delay: 1.2,
//   },
//   {
//     text: "the tribes",
//     position: "bottom-0 left-1/2 -translate-x-1/2",
//     bg: "bg-gray-400",
//     image: images.Branch6pic,
//     delay: 1.5,
//   },
//   {
//     text: "My Startup OTT",
//     position: "bottom-1/4 right-0",
//     bg: "bg-purple-300",
//     image: images.Branch8pic,
//     delay: 0.9,
//   },
// ];
const TimeData = [
  { text: "MyStartup TV" },
  { text: "Omsheel Exports & Logistics" },
  { text: "Shops Infra Construction" },
  { text: "Omsheel Food Products" },
  { text: "Ask Mentor" },
  { text: "Wogin Learning" },
];
const descriptions = [
  "My Startup TV is a media platform showcasing the startup and entrepreneurship world. We share inspiring stories, expert interviews, and insights to educate and motivate aspiring entrepreneurs",
  "My Startup Life showcases the real journeys of entrepreneurs through stories, insights, and experiences. It aims to inspire and guide aspiring founders in the startup world",
  "My Startup OTT is the world’s first OTT platform dedicated to startup content. It allows Indian startup enablers to host curated content and live events on their own OTT channels.",
  "MyStartup TV Hindi is the Hindi edition of India’s first web TV channel for startups. It covers startup news, founder stories, and events in Hindi. The channel aims to make startup content accessible to regional audiences through simple, engaging videos.",
  "MyStartup TV Regional is a startup news channel that shares stories, interviews, and events in multiple Indian languages. It makes startup content accessible and relatable to diverse audiences across India.",
  "MyStartup Podcast is an audio series by MyStartup TV that shares quick and simple updates on India’s startup scene. From founder journeys to new tech and government support, it covers key topics in an easy-to-understand format.",
  "My Startup News delivers real-time updates, stories, and insights from the startup ecosystem. We cover breakthroughs, trends, and voices shaping the world of entrepreneurship.",
  "ShopNorth East is a café that brings the flavors of North-East India through traditional bakery items. It offers authentic, region-inspired treats in a modern, cozy setting.",
  "The Tribes is a café with a traditional, tribal-inspired ambience that offers a cozy and culturally rich experience. It blends ethnic decor with authentic flavors in a warm, rustic setting.",
  "“Dadi”, meaning paternal grandmother in India, is a tribute to the love, warmth, and tradition of home-cooked meals.",
];
const OurWorks = () => {
  const [imgIndex, setImgIndex] = useState(0);
  const getRandomNumber = () => Math.floor(Math.random() * 81) - 20;
  const randomAngles = useRef([]);
  useEffect(() => {
    randomAngles.current = sliderImages.map(() => getRandomNumber());
    const interval = setInterval(() => {
      setImgIndex((prev) => (prev + 1) % sliderImages.length);
    }, 3000); // 3 seconds

    return () => clearInterval(interval);
  }, [sliderImages]);

  return (
    <div className="bg-slate-200 cursor-pointer">
      <br /> <br /> <br />
      <section>
        <div className="container pt-12 pb-20 ">
          <motion.h1
            variants={FadeRight(0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-2xl font-bold text-center pb-10 uppercase"
          >
            Our{" "}
            <span className="text-4xl font-semibold text-pink-600">
              BUSINESSES
            </span>
          </motion.h1>

          <div className="grid-container ">
            {groupWorks.map((menu, index) => (
              <motion.div
                key={index}
                variants={FadeRight(0.1 * index)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid-card transition-transform duration-300 ease-in-out transform hover:scale-105"
              >
                <div className="title text-4xl font-semibold text-pink-600 ">
                  {menu.title}
                </div>
                <p className="text-xl text-blue-900 font-bold text-left ">
                  {menu.description}
                </p>
                <div className="icon">
                  <img
                    src={menu.image}
                    alt={menu.title}
                    className="w-[50px] h-[50px] object-contain"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <div className="flex items-center justify-center gap-6 flex-wrap  px-6 py-7">
        {subWorks.map((content, index) => (
          <div
            className="imgCard hover:-translate-y-3 transition-all duration-150"
            key={content.id}
          >
            <div className="img">
              <img
                src={content.image}
                alt=""
                className="img h-[170px] w-full object-fill "
              />
            </div>
            <div className="text">
              <p className="h3 text-sm text-pink-600 font-semibold">
                {content.title}
              </p>
              <p className="p text-sm font-semibold text-blue-900">{content.description} </p>
            </div>
          </div>
        ))}
      </div>
      <br /> <br /> <br />
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
      <div className="flex gap-x-24 lg:items-center lg:flex-row flex-col items-center gap-y-11 justify-center ">
        <motion.div
          variants={FadeRight(0.9)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="sm:w-[400px] sm:h-[400px] w-[300px] h-[300px] relative img-shadow"
        >
          {sliderImages.map((image, index) => (
            <img
              src={image}
              key={index}
              className={`w-full h-full absolute object-cover rounded-3xl transition-all duration-500  ${
                index == imgIndex ? "z-10 scale-110" : "z-0 opacity-80"
              }`}
              style={{
                transform: `rotate(${
                  index === imgIndex ? 0 : randomAngles.current[index]
                }deg)`,
              }}
            />
          ))}
        </motion.div>

        <motion.div
          variants={FadeLeft(0.9)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative sm:w-[400px] w-[320px] min-h-[100px] "
        >
          {descriptions.map((desc, index) => (
            <p
              key={index}
              className={`absolute left-0 right-0 top-0  text-center text-blue-900 font-semibold  text-effect text-lg transition-all duration-100 ${
                index == imgIndex ? "activeDesc z-10" : "inactiveDesc"
              }`}
            >
              {desc}
            </p>
          ))}
        </motion.div>
      </div>
      <div className="flex gap-x-5 justify-center items-center sm:mt-6">
        <button
          className="bg-gray-300 p-1.5 cursor-pointer rounded-full text-gray-600 hover:bg-gray-200"
          onClick={() =>
            setImgIndex((prev) =>
              prev === 0 ? sliderImages.length - 1 : prev - 1
            )
          }
        >
          <ArrowLeft size={18} color="black" />
        </button>
        <button
          className="bg-gray-300 p-1.5 cursor-pointer rounded-full text-gray-600 hover:bg-gray-200"
          onClick={() =>
            setImgIndex((prev) =>
              prev === sliderImages.length ? +0 : prev + 1
            )
          }
        >
          <ArrowRight size={18} />
        </button>
      </div>
      <br /> <br /> <br />
     
    </div>
  );
};

export default OurWorks;
