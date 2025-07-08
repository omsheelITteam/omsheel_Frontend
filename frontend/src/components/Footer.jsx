import React from "react";
import { motion } from "framer-motion";
import { FadeDown, FadeUp } from "../Utils/Animation";
import Chatbot from "./ChatBot/Chatbot";
const Footer = () => {
  return (
    <motion.footer
      variants={FadeUp(0.9)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="relative  pt-8 pb-6 bg-white"
    >
      <div className="container mx-auto px-4 cursor-pointer ">
        <div className="flex flex-wrap text-left lg:text-left">
          <div className="w-full lg:w-6/12 px-4">
            <h2 className="text-4xl font-semibold text-pink-700 hover:translate-x-1 transition-all duration-150 hover:text-pink-500">
              Omsheel Groups
            </h2>
            <br />
            <h4 className="text-3xl font-semibold text-blueGray-700 hover:translate-x-1 transition-all duration-150 hover:text-pink-500">
              Let's keep in touch!
            </h4>
            <h5 className="text-lg mt-0 mb-2 text-blueGray-600 hover:translate-x-1 transition-all duration-150 hover:text-pink-500">
              Find us on any of these platforms, we respond within business
              days.
            </h5>
            <div className="mt-6 lg:mb-0 mb-6 flex">
              <button
                className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 flex items-center justify-center rounded-full outline-none focus:outline-none mr-2 hover:-translate-y-1 transition-all duration-150 hover:bg-blue-500 hover:text-white"
                type="button"
                onClick={() =>
                  window.open("https://x.com/mystartuptvin/", "_blank")
                }
              >
                <i className="fab fa-twitter" />
              </button>
              <button
                className="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 flex items-center justify-center rounded-full outline-none focus:outline-none mr-2 hover:-translate-y-1 transition-all duration-150 hover:bg-blue-800 hover:text-white"
                type="button"
                onClick={() =>
                  window.open(
                    "https://www.facebook.com/mystartuptvin/",
                    "_blank"
                  )
                }
              >
                <i className="fab fa-facebook-square" />
              </button>
              <button
                className="bg-white text-red-600 shadow-lg font-normal h-10 w-10 flex items-center justify-center rounded-full outline-none focus:outline-none mr-2 hover:-translate-y-1 transition-all duration-150 hover:bg-black "
                type="button"
                onClick={() =>
                  window.open(
                    "https://www.youtube.com/@MyStartupTVHindi",
                    "_blank"
                  )
                }
              >
                <i className="fab fa-youtube" />
              </button>
              <button
                className="bg-white text-pink-500 shadow-lg font-normal h-10 w-10 flex items-center justify-center rounded-full outline-none focus:outline-none mr-2 hover:-translate-y-1 transition-all duration-150 hover:bg-black hover:text-pink-600"
                type="button"
                onClick={() =>
                  window.open(
                    "https://www.instagram.com/mystartuptvin/?hl=en",
                    "_blank"
                  )
                }
              >
                <i className="fab fa-instagram" />
              </button>
              <button
                className="bg-white text-red-800 shadow-lg font-normal h-10 w-10 flex items-center justify-center rounded-full outline-none focus:outline-none mr-2 hover:-translate-y-1 transition-all duration-150 hover:bg-slate-300 hover:text-red-600"
                type="button"
                onClick={() =>
                  (window.location.href = "mailto:sunil.s@Omsheelgroup.in")
                }
              >
                <i className="fas fa-envelope" />
              </button>
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="flex flex-wrap items-top mb-6">
              <div className="w-full lg:w-4/12 px-4 ml-auto">
                <ul className="list-unstyled">
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm hover:translate-x-1 transition-all duration-150 hover:text-pink-500"
                      href="/"
                      rel="noreferrer"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm hover:translate-x-1 transition-all duration-150 hover:text-pink-500"
                      href="/ourworks"
                    >
                      Our Works
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm hover:translate-x-1 transition-all duration-150 hover:text-pink-500"
                      href="/about"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm hover:translate-x-1 transition-all duration-150 hover:text-pink-500"
                      href="/incubator"
                    >
                      Incubator
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <ul className="list-unstyled">
                  {/* <li>
                    <a
                      className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm hover:translate-x-1 transition-all duration-150 hover:text-pink-500"
                      href="#"
                    >
                      Incubator
                    </a>
                  </li> */}
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm hover:translate-x-1 transition-all duration-150 hover:text-pink-500"
                      href="#"
                    >
                      Terms &amp; Conditions
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm hover:translate-x-1 transition-all duration-150 hover:text-pink-500"
                      href="#"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm hover:translate-x-1 transition-all duration-150 hover:text-pink-500"
                      href="/contact-us"
                    >
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className=" right-15 top-50">
              <Chatbot />
            </div>
          </div>
        </div>
        <hr className="my-6 border-blueGray-300" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-blueGray-500 font-semibold py-1 ">
              {new Date().getFullYear()} ©
              <a
                href="https://www.Omsheelgroup.in/"
                className="text-pink-500 hover:text-green-800 text-1xl"
                target="_blank"
                rel="noreferrer"
              >
                Omsheel Groups
              </a>
              
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
