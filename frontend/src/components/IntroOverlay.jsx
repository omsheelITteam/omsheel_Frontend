"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { images } from "../assets/assests";

function IntroOverlay({ onFinish }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [showIntro, setShowIntro] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect screen width on mount
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth < 500);
    }
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowIntro(false);
      if (onFinish) onFinish();
    }, 7000);
    return () => clearTimeout(timeout);
  }, [onFinish]);

  const words = isMobile
    ? "Welcome To OmsheelGroup".split(" ") // word-by-word for mobile
    : "Welcome To OmsheelGroup".split(""); // character-by-character otherwise

  const pullupVariant = {
    initial: { y: 40, opacity: 0, filter: "blur(4px)" },
    animate: (i) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.12,
        duration: 0.4,
        ease: "easeOut",
      },
    }),
  };

  return (
    <AnimatePresence>
      {showIntro && (
        <motion.div
          ref={ref}
          className="fixed inset-0 z-50 bg-white flex items-center justify-center overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 6.6, duration: 0.6 }}
        >
          {/* Background Gradient Layer */}
          <div className="absolute w-full h-full z-0" />

          {/* 1. Cinematic Animated Text */}
          <motion.div
            className="absolute z-10 text-center"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ delay: 2.6, duration: 1.1 }}
          >
            <div className="flex flex-wrap justify-center items-center">
              {words.map((charOrWord, i) => (
                <motion.span
                  key={i}
                  initial={{
                    opacity: 0,
                    y: 60,
                    scale: 0.8,
                    filter: "blur(6px)",
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    filter: "blur(0px)",
                    transition: {
                      delay: i * 0.1,
                      duration: 0.6,
                      ease: "easeOut",
                    },
                  }}
                  className="text-pink-600 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold px-1 tracking-wide drop-shadow-[0_0_10px_rgba(0,0,0,0.2)]"
                >
                  {charOrWord === " " ? "\u00A0" : charOrWord}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* 2. Rotating Logo */}
          <motion.img
            src={images.omsheel}
            alt="Omsheel Logo"
            initial={{ scale: 0.5, opacity: 0, rotate: 0 }}
            animate={{ scale: 1.1, opacity: 1, rotate: 360 }}
            transition={{ delay: 2.6, duration: 1.2, ease: "easeInOut" }}
            className="absolute z-20 h-[6rem] sm:h-[7rem] md:h-[8rem] lg:h-[9rem] xl:h-[10rem] drop-shadow-[0_0_30px_rgba(0,0,0,0.3)] pointer-events-none"
          />

          {/* 3. Final Brand Name */}
          <motion.p
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 5.3, duration: 0.6 }}
            className="absolute text-black text-2xl sm:text-3xl md:text-4xl font-bold tracking-wider z-30 animate-pulse"
          >
            <span className="drop-shadow-[0_0_10px_rgba(0,0,0,0.4)]">
              OmsheelGroup
            </span>
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default IntroOverlay;