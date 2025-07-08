// src/components/ThemeToggle.jsx
import React from "react";
import { useTheme } from "../context/ThemeContext"; // path is correct
import './Navbar.css'; // contains the toggle styles

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <label className="switch">
      <input
        id="input"
        type="checkbox"
        checked={isDark}
        onChange={toggleTheme}
      />
      <div className="slider round">
        <div className="sun-moon">
          {/* Moon Dots */}
          {[1, 2, 3].map(i => (
            <svg key={i} id={`moon-dot-${i}`} className="moon-dot" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="50" />
            </svg>
          ))}

          {/* Light Rays */}
          {[1, 2, 3].map(i => (
            <svg key={i} id={`light-ray-${i}`} className="light-ray" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="50" />
            </svg>
          ))}

          {/* Clouds */}
          {[1, 2, 3].map(i => (
            <svg key={i} id={`cloud-${i}`} className="cloud-dark" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="50" />
            </svg>
          ))}
          {[4, 5, 6].map(i => (
            <svg key={i} id={`cloud-${i}`} className="cloud-light" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="50" />
            </svg>
          ))}
        </div>

        <div className="stars">
          {[1, 2, 3, 4].map(i => (
            <svg key={i} id={`star-${i}`} className="star" viewBox="0 0 20 20">
              <path d="M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z" />
            </svg>
          ))}
        </div>
      </div>
    </label>
  );
}
