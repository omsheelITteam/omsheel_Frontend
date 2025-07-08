import React from "react";
import "../App.css";
import { images } from "../assets/assests";
const EmptyComponent = () => {
  return (
    <>
   <div className="flex flex-wrap justify-center gap-12 px-4 md:px-12 cursor-pointer">

      <div className="card card3">
        <div className="imgBx">
          <img src={images.secondFounder} alt="Card" />
        </div>
        <div className="content">
          <h2 className="text-2xl font-bold text-black mb-1 text-center">
            {" "}
        Jitesh 
          </h2>
          <span className="inline-block mb-3 text-sm text-white bg-secondary px-3 py-1 rounded-full">
            Founder & Editor-in-Chief
          </span>
          <p>
            This is some short content. On hover, this area expands to show more
            information. You can customize this section as needed.
          </p>
        </div>
      </div>
      <div className="card card4">
        <div className="imgBx">
          <img src={images.fourthFounder} alt="Card" />
        </div>
        <div className="content">
          <h2 className="text-2xl font-bold text-black mb-1 text-center">
            {" "}
            Founder & Editor-in-Chief
          </h2>
          <span className="inline-block mb-3 text-sm text-white bg-secondary px-3 py-1 rounded-full">
            Founder & Editor-in-Chief
          </span>
        </div>
      </div>
       <div className="card card4">
        <div className="imgBx">
          <img src={images.fourthFounder} alt="Card" />
        </div>
        <div className="content">
          <h2 className="text-2xl font-bold text-black mb-1 text-center">
            {" "}
            Founder & Editor-in-Chief
          </h2>
          <span className="inline-block mb-3 text-sm text-white bg-secondary px-3 py-1 rounded-full">
            Founder & Editor-in-Chief
          </span>
        </div>
      </div>
     
    </div>
     <br />
      <br />
      <br />
      <br /> <br /> <br /> <br />
    </>
  );
};

export default EmptyComponent;
