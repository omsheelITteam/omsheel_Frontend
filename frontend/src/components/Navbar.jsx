import React, { useContext, useState } from "react";
import { images } from "../assets/assests";
import { NavLink, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";


const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { backendURL, setIsLoggedin, setUserData, userData } =
    useContext(AppContext);

  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      axios.defaults.withCredentials = true;
      const { data } = await axios.post(backendURL + "/api/auth/logout");
      data.success && setIsLoggedin(false);
      data.success && setUserData(false);
      navigate("/");
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="container mx-auto flex justify-between items-center py-4 px-6"
      >
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={images.OmSheellogo}
            alt="Omsheel Logo"
            className="h-15 w-20 cursor-pointer"
            onClick={() => navigate("/")}
          />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 text-blue-950 font-bold">
          <li className="group">
            <NavLink to="/" className="hover:text-pink-500">
              Home
              <hr className="mt-1 h-1 w-10 bg-cyan-500 border-none rounded opacity-0 group-hover:opacity-100 transition-all duration-300" />
            </NavLink>
          </li>

          <li className="group">
            <NavLink to="/ourworks" className="hover:text-pink-500">
              Our Works
              <hr className="mt-1 h-1 w-22 bg-cyan-500 border-none rounded opacity-0 group-hover:opacity-100 transition-all duration-300" />
            </NavLink>
          </li>

          <li className="group">
            <NavLink to="/about" className="hover:text-pink-500">
              About
              <hr className="mt-1 h-1 w-11 bg-cyan-500 border-none rounded opacity-0 group-hover:opacity-100 transition-all duration-300" />
            </NavLink>
          </li>


          <li className="group">
            <NavLink to="/incubator" className="hover:text-pink-500">
              Incubator
              <hr className="mt-1 h-1 w-18 bg-cyan-500 border-none rounded opacity-0 group-hover:opacity-100 transition-all duration-300" />
            </NavLink>
          </li>
          <li className="group">
            <NavLink to="/contact-us" className="hover:text-pink-500">
               Contact Us
              <hr className="mt-1 h-1 w-18 bg-cyan-500 border-none rounded opacity-0 group-hover:opacity-100 transition-all duration-300" />
            </NavLink>
          </li>

        </ul>

        <div className="items-center gap-3 hidden md:flex">
          {userData ? (
            <div className=" items-center gap-3 hidden md:flex">
              <div className="w-8 h-8 flex justify-center items-center rounded-full text-white bg-pink-500">
                {userData?.name?.[0]?.toUpperCase()}
              </div>
              {userData?.isAccountVerified && <span></span>}
              <button
                onClick={handleLogout}
                className="text-white border border-white rounded-md px-4 py-1 ml-2 hover:bg-red-600 transition"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="text-blue-950 border border-secondary rounded-md hover:bg-secondary hover:text-primary transition px-6 py-2 font-bold">
              <NavLink to="/signup">Signup</NavLink>
            </div>
          )}
        </div>

        {/* Hamburger Icon */}
        <div
          className="md:hidden text-white ml-4"
          onClick={() => setShowMenu(!showMenu)}
        >
          <Menu className="text-black h-8 w-10"/>
          {/* <img src={images.menuLogo} alt="Menu" className="" /> */}
        </div>
      </motion.div>

      {/* Mobile Menu */}
      {showMenu && (
        <div className="md:hidden flex flex-col items-end gap-4 pb-4 text-white bg-black font-medium px-4 pt-4">
          {/* ✅ User avatar on top right */}
          <div className="w-8 h-8 flex justify-center items-center rounded-full text-white bg-pink-500 self-end">
            {userData?.name?.[0]?.toUpperCase()}
            <span className="text-sm text-gray-500">{userData.name}</span>
          </div>

          {/* Navigation links */}
          <NavLink to="/" onClick={() => setShowMenu(false)}>
            <p className="px-4 py-2 hover:text-primary">Home</p>
          </NavLink>
          <NavLink to="/ourworks" onClick={() => setShowMenu(false)}>
            <p className="px-4 py-2 hover:text-primary">Our Works</p>
          </NavLink>
          <NavLink to="/about" onClick={() => setShowMenu(false)}>
            <p className="px-4 py-2 hover:text-primary">About</p>
          </NavLink>

          <NavLink to="/incubator" onClick={() => setShowMenu(false)}>
            <p className="px-4 py-2 hover:text-primary">Incubator</p>
          </NavLink>
           <NavLink to="/contact-us" onClick={() => setShowMenu(false)}>
            <p className="px-4 py-2 hover:text-primary">Contact Us</p>
          </NavLink>

          {/* User controls */}
          {userData ? (
            <div className="flex flex-col items-end gap-2 w-full">
              {userData?.isAccountVerified && <></>}
              <button
                onClick={handleLogout}
                className="text-white border border-white rounded-md px-4 py-1 hover:bg-red-600 transition self-end"
              >
                Logout
              </button>
            </div>
          ) : (
            <div
              className="text-white border border-secondary rounded-md hover:bg-secondary hover:text-primary transition px-6 py-2 font-bold self-end"
              onClick={() => setShowMenu(false)}
            >
              <NavLink to="/signup">Signup</NavLink>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
