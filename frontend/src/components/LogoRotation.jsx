import React from "react";
import { images } from "../assets/assests";

const LogoRotation = () => {
  return (
    <div>
      <style>
        {`
          @keyframes spinClockwise {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          .animate-spin-clockwise {
            animation: spinClockwise 1s linear infinite;
          }
        `}
      </style>
      <img
        src={images.omsheel}
        alt="Omsheel"
        className="w-full md:max-w-[360px] h-52 sm:h-56 md:h-60 lg:h-52 xl:h-60 object-contain rounded-full animate-spin-clockwise"
      />
    </div>
  );
};

export default LogoRotation;
