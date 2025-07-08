import React from "react";
import { cardsData } from "../assets/assests";

const OurAssociatePartners = () => {
  return (
    <div className="p-6 w-full overflow-x-auto hide-scrollbar bg-slate-50">
      <h1 className="text-3xl font-bold text-center text-blue-900 mb-8">
        Our Associates Partnes
      </h1>

      <div  className="w-max flex gap-6 animate-marquee-reverse pauseonHover">
        {cardsData.map((card) => (
          <div
            key={card.id}
            className="relative bg-black border-4 border-white rounded-lg w-full sm:w-[450px] md:w-[490px] lg:w-[520px] xl:w-[534px] cursor-pointer transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]"

          >
            <div className="flex flex-col sm:flex-row items-center gap-4 p-4">
              <div className="w-full sm:w-1/2 flex justify-center">
                <img
                  src={card.image}
                  alt={card.title}
                   className="object-contain max-h-60 rounded-md bg-amber-50 p-2"
                />
              </div>

              <div className="w-full sm:w-1/2 text-white p-4 rounded-md">
                <h2 className="text-xl font-bold mb-2">{card.title}</h2>
                 <hr className="bg-sky-300 h-1 rounded-full mb-2 shadow-lg" />
                 
               </div>
            </div>

            <div className="px-4 pb-4 pt-0 mt-2 text-left">
              <button id="button"
               className="rounded-md bg-pink-300 text-black py-2 px-4 text-sm transition-all shadow-md hover:shadow-lg hover:bg-yellow-500 font-semibold float-end"
                aria-label="Read more"
              >
                <ion-icon name="arrow-forward-outline"></ion-icon>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurAssociatePartners;