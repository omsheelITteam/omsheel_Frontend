import React from "react";
import { images } from "../assets/assests";
import "./CardFlipper.css";
const CardFlipper = () => {
  return (
    <div className="flex flex-wrap justify-center px-4 py-8">
       <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front flip-card-front1">
            <div class="inner">
              <h2></h2>
              <p></p>
            </div>
          </div>
          <div class="flip-card-back flip-card-back4">
            <div class="inner">
              <img
                src={images.Branch1pic}
                alt="icon"
                className="iconSize"
                style={{ textAlign: "center" }}
              />
              <h2 style={{ color: "black" }}>MystartupTV</h2>
              <p style={{ color: "black" }}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut,
                tempora?
              </p>
              <button className="p-2 hover:bg-gray-200 rounded-full hoverBtn">
                <svg
                  width="32"
                  height="32"
                  viewBox="-12.96 -12.96 49.92 49.92"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 12H18M18 12L13 7M18 12L13 17"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front flip-card-front2 ">
            <div class="inner">
              <h2></h2>
              <p></p>
            </div>
          </div>
          <div class="flip-card-back flip-card-back2">
            <div class="inner">
              <img src={images.Branch2pic} alt="icon" class="iconSize" />
              <h2 style={{color:'black'}}>MystartupLife</h2>
              <p style={{color:'black'}}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut,
                tempora?
              </p>
             <button className="p-2 hover:bg-gray-200 rounded-full hoverBtn">
  <svg
    width="32"
    height="32"
    viewBox="-12.96 -12.96 49.92 49.92"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6 12H18M18 12L13 7M18 12L13 17"
      stroke="#000000"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
</button>

            </div>
          </div>
        </div>
      </div>
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front flip-card-front3">
            <div class="inner"></div>
          </div>
          <div class="flip-card-back flip-card-back2">
            <div class="inner">
              <img src={images.Branch9pic} alt="icon" class="iconSize" />
              <h2 style={{ color: "black" }}>MystartupHindi</h2>
              <p style={{ color: "black" }}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut,
                tempora?
              </p>
             <button className="p-2 hover:bg-gray-200 rounded-full hoverBtn">
  <svg
    width="32"
    height="32"
    viewBox="-12.96 -12.96 49.92 49.92"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6 12H18M18 12L13 7M18 12L13 17"
      stroke="#000000"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
</button>

            </div>
          </div>
        </div>
      </div>
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front flip-card-front4">
            <div class="inner">
              <h2></h2>
              <p></p>
            </div>
          </div>
          <div class="flip-card-back flip-card-back4">
            <div class="inner">
              <img
                src={images.Branch11pic}
                alt="icon"
                class="iconSize"
                style={{ textAlign: "center" }}
              />
              <h2 style={{ color: "black" }}>Mystartup <br />Podcast</h2>
              <p style={{ color: "black" }}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut,
                tempora?
              </p>
             <button className="p-2 hover:bg-gray-200 rounded-full hoverBtn">
  <svg
    width="32"
    height="32"
    viewBox="-12.96 -12.96 49.92 49.92"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6 12H18M18 12L13 7M18 12L13 17"
      stroke="#000000"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
</button>

            </div>
          </div>
        </div>
      </div>
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front flip-card-front5">
            <div class="inner">
              <h2></h2>
              <p></p>
            </div>
          </div>
          <div class="flip-card-back flip-card-back5">
            <div class="inner">
              <img
                src={images.Branch10pic}
                alt="icon"
                class="iconSize"
                style={{ textAlign: "center" }}
              />
              <h2 style={{ color: "black" }}>Mystartup Regional</h2>
              <p style={{ color: "black" }}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut,
                tempora?
              </p>
              <button className="p-2 hover:bg-gray-200 rounded-full hoverBtn">
                <svg
                  width="32"
                  height="32"
                  viewBox="-12.96 -12.96 49.92 49.92"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 12H18M18 12L13 7M18 12L13 17"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
       <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front flip-card-front6">
            <div class="inner">
              <h2></h2>
              <p></p>
            </div>
          </div>
          <div class="flip-card-back flip-card-back6">
            <div class="inner">
              <img
                src={images.Branch8pic}
                alt="icon"
                class="iconSize"
                style={{ textAlign: "center" }}
              />
              <h2 style={{ color: "black" }}>Mystartup OTT</h2>
              <p style={{ color: "black" }}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut,
                tempora?
              </p>
              <button className="p-2 hover:bg-gray-200 rounded-full hoverBtn">
                <svg
                  width="32"
                  height="32"
                  viewBox="-12.96 -12.96 49.92 49.92"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 12H18M18 12L13 7M18 12L13 17"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front flip-card-front7">
            <div class="inner">
              <h2></h2>
              <p></p>
            </div>
          </div>
          <div class="flip-card-back flip-card-back7">
            <div class="inner">
              <img
                src={images.Branch12pic}
                alt="icon"
                class="iconSize"
                style={{ textAlign: "center" }}
              />
              <h2 style={{ color: "black" }}>Mystartup NEWS</h2>
              <p style={{ color: "black" }}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut,
                tempora?
              </p>
              <button className="p-2 hover:bg-gray-200 rounded-full hoverBtn">
                <svg
                  width="32"
                  height="32"
                  viewBox="-12.96 -12.96 49.92 49.92"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 12H18M18 12L13 7M18 12L13 17"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front flip-card-front8">
            <div class="inner">
              <h2></h2>
              <p></p>
            </div>
          </div>
          <div class="flip-card-back flip-card-back8">
            <div class="inner">
              <img
                src={images.Branch3pic}
                alt="icon"
                class="iconSize"
                style={{ textAlign: "center" }}
              />
              <h2 style={{ color: "black" }}>Shop North East</h2>
              <p style={{ color: "black" }}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut,
                tempora?
              </p>
              <button className="p-2 hover:bg-gray-200 rounded-full hoverBtn">
                <svg
                  width="32"
                  height="32"
                  viewBox="-12.96 -12.96 49.92 49.92"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 12H18M18 12L13 7M18 12L13 17"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front flip-card-front9">
            <div class="inner">
              <h2></h2>
              <p></p>
            </div>
          </div>
          <div class="flip-card-back flip-card-back9">
            <div class="inner">
              <img
                src={images.Branch6pic}
                alt="icon"
                class="iconSize"
                style={{ textAlign: "center" }}
              />
              <h2 style={{ color: "black" }}>the tribes</h2>
              <p style={{ color: "black" }}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut,
                tempora?
              </p>
              <button className="p-2 hover:bg-gray-200 rounded-full hoverBtn">
                <svg
                  width="32"
                  height="32"
                  viewBox="-12.96 -12.96 49.92 49.92"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 12H18M18 12L13 7M18 12L13 17"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front flip-card-front10">
            <div class="inner">
              <h2></h2>
              <p></p>
            </div>
          </div>
          <div class="flip-card-back flip-card-back10">
            <div class="inner">
              <img
                src={images.Branch4pic}
                alt="icon"
                class="iconSize"
                style={{ textAlign: "center" }}
              />
              <h2 style={{ color: "black" }}>DADI</h2>
              <p style={{ color: "black" }}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut,
                tempora?
              </p>
              <button className="p-2 hover:bg-gray-200 rounded-full hoverBtn">
                <svg
                  width="32"
                  height="32"
                  viewBox="-12.96 -12.96 49.92 49.92"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 12H18M18 12L13 7M18 12L13 17"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardFlipper;
