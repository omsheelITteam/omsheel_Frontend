import React from "react";
import { motion } from "framer-motion";
import { FadeDown, FadeUp } from "../Utils/Animation";
const CompanyMap = () => {
  return (
    <motion.div
      variants={FadeUp(0.9)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="w-full h-screen"
    >
      <h2 className="text-4xl font-semibold text-center text-zinc-900 mb-4">
        Strategically <span className="text-5xl text-blue-900">Located,</span>{" "}
        Globally <span className="text-5xl text-blue-900">Connected</span>
      </h2>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.400686563504!2d78.53675317516726!3d17.48837608341605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9b9937912bf3%3A0xbdb207250f2d3e2d!2sMy%20Startup%20TV!5e0!3m2!1sen!2sin!4v1750759692274!5m2!1sen!2sin"
        className="w-full h-full border-0"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </motion.div>
  );
};

export default CompanyMap;
