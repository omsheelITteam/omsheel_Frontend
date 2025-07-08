import axios from "axios";
import React, { useContext, useEffect, useRef, useState } from "react";
import { AppContext } from "../context/AppContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
// import { ClipLoader } from "react-icons";
import { FaSpinner } from "react-icons/fa";
import { FadeDown } from "../Utils/Animation";
import { motion } from "framer-motion";
const EmailVerification = () => {
  const [isLoading, setIsLoading] = useState(false);
  axios.defaults.withCredentials = true;
  const { backendURL, isLoggedin, userData, getUserData } =
    useContext(AppContext);
  const navigate = useNavigate();
  const inputrefs = useRef([]);
  const handleInput = (e, index) => {
    if (e.target.value.length > 0 && index < inputrefs.current.length - 1) {
      inputrefs.current[index + 1].focus();
    }
  };
  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && e.target.value === "" && index > 0) {
      inputrefs.current[index - 1].focus();
    }
  };
  const handlePaste = (e) => {
    const paste = e.clipboardData.getData("text");
    const pasteArray = paste.split("");
    pasteArray.forEach((char, index) => {
      if (inputrefs.current[index]) {
        inputrefs.current[index].value = char;
      }
    });
  };
  const onsubmitHandler = async (e) => {
    try {
      e.preventDefault();
      setIsLoading(true);
      const otpArray = inputrefs.current.map((e) => e.value);
      const otp = otpArray.join("");
      const { data } = await axios.post(backendURL + "/api/auth/verify-email", {
        code: otp,
      });
      if (data.success) {
        toast.success(data.message);
        getUserData();
        navigate("/");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    isLoggedin && userData && userData.isAccountVerified && navigate("/");
  }, [isLoggedin, userData]);
  return (
    <motion.div 
      variants={FadeDown(0.9)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
    className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-md text-center">
        <div className="mb-4 flex justify-center">
          <div className="bg-purple-100 p-4 rounded-full">
            <i className="fas fa-envelope text-blue-600 text-2xl"></i>
          </div>
        </div>
        <h1 className="text-slate-900 text-2xl font-semibold text-center mb-4">
          Email Verify OTP
        </h1>
        <p className="text-slate-700 mb-6 text-center">
          Enter the 6-digit code sent to your Email
        </p>
        <form
          className=" p-8 rounded-lg shadow-lg w-96 text-sm"
          onSubmit={onsubmitHandler}
        >
          <div className="flex justify-between mb-8" onPaste={handlePaste}>
            {Array(6)
              .fill(0)
              .map((_, index) => (
                <input
                  type="text"
                  maxLength="1"
                  key={index}
                  className="w-12 h-12 border border-blue-300 rounded text-center text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ref={(e) => (inputrefs.current[index] = e)}
                  onInput={(e) => handleInput(e, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                />
              ))}
          </div>
          <button
            disabled={isLoading}
            className="w-full py-3 bg-blue-600 rounded-full text-white hover:scale-105 transition-all duration-100"
          >
            {isLoading ? (
              <span className="flex items-center justify-center gap-2">
                <FaSpinner />
              </span>
            ) : (
              "VERIFY EMAIL"
            )}
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default EmailVerification;
