import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { images } from "../assets/assests";
// import useAuthStore from "../store/authStore";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import { FaSpinner } from "react-icons/fa";
const SignUp = () => {
  // const { register, error } = useAuthStore();
  const [name, setname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showpassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { backendURL, setIsLoggedin } = useContext(AppContext);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      // await register(name,email,password)
      axios.defaults.withCredentials = true;
      const { data } = await axios.post(backendURL + "/api/auth/register", {
        name,
        email,
        password,
      });
      if (data.success) {
        setIsLoggedin(true);
        navigate("/verify-email");
      } else {
        toast.error(data.message);
      }
      //  console.log("Otp sended")
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
    // if (password !== confirmPassword) {
    //   alert("Passwords do not match!");
    //   setIsLoading(false);
    //   return;
    // }

    setTimeout(() => {
      // console.log("SignUp attempt:", { username, email, password });
      // alert("Signed up with email :"` ${email}`);
      setIsLoading(false);
      // navigate("/login");
    }, 1000);
  };

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      {/* Right Sign Up Form */}
      <div className="min-h-screen w-full flex items-center justify-center bg-slate-100 p-4">
        <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-md">
          <div className="text-center mb-6">
            <h1 className="text-4xl font-semibold text-cyan-500">
              Connect With Us !
            </h1>
          </div>

          <h2 className="text-xl font-semibold text-center text-blue-500 mb-6">
            To make a step closer to us
          </h2>
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-black mb-2">Welcome</h1>
            <img
              src={images.omsheel}
              alt="Logo"
              className="w-20 mx-auto mb-2"
            />
            <h2 className="text-xl font-semibold text-black">OMSHEEL GROUP</h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div className="relative">
              <i className="fa fa-user absolute left-3 top-7 transform -translate-y-1/2 text-cyan-500"></i>
              <input
                type="text"
                value={name}
                onChange={(e) => setname(e.target.value)}
                placeholder="Name"
                className="w-full pl-10 border-b border-gray-300 py-2 text-black bg-transparent focus:outline-none focus:border-cyan-500 placeholder-gray-500"
              />
            </div>

            {/* Email */}
            <div className="relative">
              <i className="fa fa-envelope absolute left-3 top-7 transform -translate-y-1/2 text-cyan-500"></i>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                className="w-full pl-10 border-b border-gray-300 py-2 text-black bg-transparent focus:outline-none focus:border-cyan-500 placeholder-gray-500"
              />
            </div>

            {/* Password */}
            <div className="relative">
              <i className="fa fa-key absolute left-3 top-7 transform -translate-y-1/2 text-cyan-500"></i>
              <input
                type={showpassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full pl-10 pr-10 border-b border-gray-300 py-2 text-black bg-transparent focus:outline-none focus:border-cyan-500 placeholder-gray-500"
              />
              <i
                className={`fa-solid ${
                  showpassword ? "fa-eye-slash" : "fa-eye"
                } text-cyan-500 absolute right-3 top-7 transform -translate-y-1/2 cursor-pointer`}
                onClick={() => setShowPassword(!showpassword)}
              ></i>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-blue-500 text-white py-2 rounded-full font-semibold tracking-wide shadow-md  transition-transform duration-300 ease-in-out transform hover:scale-105"
            >
              {isLoading ? (
                <span className="flex justify-center items-center">
                  <FaSpinner className="animate-spin text-white text-2xl" />
                </span>
              ) : (
                "CREATE ACCOUNT"
              )}
            </button>
          </form>

          <div className="text-center mt-4">
            <button
              type="button"
              onClick={handleLogin}
              className="text-blue-500 text-sm hover:text-blue-600 hover:underline transition"
            >
              Already have an account? Login
            </button>
          </div>
          <div class="mt-8 flex items-center justify-center gap-4">
            {/* <!-- Instagram --> */}
            <a
              href="https://www.instagram.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <div class="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 shadow-lg hover:scale-110 transition-transform duration-300">
                <svg
                  class="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.75 2A5.75 5.75 0 002 7.75v8.5A5.75 5.75 0 007.75 22h8.5A5.75 5.75 0 0022 16.25v-8.5A5.75 5.75 0 0016.25 2h-8.5zM4.5 7.75A3.25 3.25 0 017.75 4.5h8.5a3.25 3.25 0 013.25 3.25v8.5a3.25 3.25 0 01-3.25 3.25h-8.5a3.25 3.25 0 01-3.25-3.25v-8.5zM12 8a4 4 0 100 8 4 4 0 000-8zm0 1.5a2.5 2.5 0 110 5 2.5 2.5 0 010-5zm4.75-.75a.75.75 0 100-1.5.75.75 0 000 1.5z" />
                </svg>
              </div>
            </a>

            {/* <!-- Facebook --> */}
            <a
              href="https://www.facebook.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <div class="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 hover:scale-110 transition-transform duration-300">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0H1.325C.593 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.325 24h11.495v-9.294H9.69v-3.622h3.13V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.466.099 2.797.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.324-.593 1.324-1.326V1.326C24 .593 23.407 0 22.675 0z" />
                </svg>
              </div>
            </a>

            {/* <!-- LinkedIn --> */}
            <a
              href="https://www.linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <div class="w-10 h-10 flex items-center justify-center rounded-full bg-blue-200 text-white shadow-lg hover:bg-blue-200 hover:scale-110 transition-transform duration-300">
                <svg
                  width="64px"
                  height="64px"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <rect
                      x="2"
                      y="2"
                      width="28"
                      height="28"
                      rx="14"
                      fill="#1275B1"
                    ></rect>{" "}
                    <path
                      d="M12.6186 9.69215C12.6186 10.6267 11.8085 11.3843 10.8093 11.3843C9.81004 11.3843 9 10.6267 9 9.69215C9 8.7576 9.81004 8 10.8093 8C11.8085 8 12.6186 8.7576 12.6186 9.69215Z"
                      fill="white"
                    ></path>{" "}
                    <path
                      d="M9.24742 12.6281H12.3402V22H9.24742V12.6281Z"
                      fill="white"
                    ></path>{" "}
                    <path
                      d="M17.3196 12.6281H14.2268V22H17.3196C17.3196 22 17.3196 19.0496 17.3196 17.2049C17.3196 16.0976 17.6977 14.9855 19.2062 14.9855C20.911 14.9855 20.9008 16.4345 20.8928 17.5571C20.8824 19.0244 20.9072 20.5219 20.9072 22H24V17.0537C23.9738 13.8954 23.1508 12.4401 20.4433 12.4401C18.8354 12.4401 17.8387 13.1701 17.3196 13.8305V12.6281Z"
                      fill="white"
                    ></path>{" "}
                  </g>
                </svg>
              </div>
            </a>

            {/* <!-- Twitter --> */}
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <div class="w-10 h-10 flex items-center justify-center rounded-full bg-blue-400 text-white shadow-lg hover:bg-blue-500 hover:scale-110 transition-transform duration-300">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775a4.935 4.935 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184A4.92 4.92 0 0016.616 3c-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.126 1.124-4.09-.205-7.719-2.166-10.148-5.144a4.822 4.822 0 00-.664 2.475c0 1.71.87 3.216 2.188 4.099a4.903 4.903 0 01-2.228-.616v.062a4.918 4.918 0 003.946 4.827 4.996 4.996 0 01-2.224.085 4.937 4.937 0 004.604 3.417A9.868 9.868 0 010 19.54a13.936 13.936 0 007.548 2.209c9.142 0 14.307-7.721 13.995-14.646a9.935 9.935 0 002.46-2.534z" />
                </svg>
              </div>
            </a>

            <a
              href="https://youtube.com/yourchannel"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <div class="w-10 h-10 flex items-center justify-center rounded-full bg-red-600 text-white shadow-lg hover:bg-red-700 hover:scale-110 transition-transform duration-300">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a2.946 2.946 0 00-2.075-2.08C19.633 3.5 12 3.5 12 3.5s-7.633 0-9.423.606a2.946 2.946 0 00-2.075 2.08C0 8.017 0 12 0 12s0 3.983.502 5.814a2.946 2.946 0 002.075 2.08C4.367 20.5 12 20.5 12 20.5s7.633 0 9.423-.606a2.946 2.946 0 002.075-2.08C24 15.983 24 12 24 12s0-3.983-.502-5.814zM9.75 15.5V8.5l6.5 3.5-6.5 3.5z" />
                </svg>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* </div> */}
    </motion.div>
  );
};

export default SignUp;
