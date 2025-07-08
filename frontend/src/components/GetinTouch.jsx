import { Mail, MapIcon, PhoneCall } from "lucide-react";
import React, { useContext, useState } from "react";
import { FaMap } from "react-icons/fa";
import { FaSpinner } from "react-icons/fa";
import { motion } from "framer-motion";
import { FadeLeft, FadeRight, FadeUp } from "../Utils/Animation";
import { AppContext } from "../context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";
const GetinTouch = () => {
  const { backendURL } = useContext(AppContext);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true)
    try {
      const { data } = await axios.post(backendURL + "/api/auth/contact-us", {
        firstName,
        lastName,
        email,
        phone,
        message,
      });
      if (data.success) {
        setFirstName("");
        setLastName("");
        setEmail("");
        setPhone("");
        setMessage("");
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
     finally
     {
      setIsLoading(false)
     }
  };
  return (
    <div className="px-6 py-12 bg-yellow-500/10 cursor-pointer " id="contact-us">
      <motion.div
        variants={FadeUp(0.9)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center mb-10 "
      >
        <h1 className="font-semibold text-4xl mb-3">
          Get in <span className="text-gray-600 text-5xl">Touch</span> With Us
          Today
        </h1>
        <p className="text-lg text-gray-600 font-medium">
          Let’s build something great together. Reach out now to start the
          conversation.
        </p>
      </motion.div>

      <div className="flex flex-col md:flex-row gap-8 justify-center items-start">
        {/* Contact Info */}
        <motion.div
          variants={FadeRight(0.9)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-white text-blue-950 rounded-lg p-6 md:w-2/3 h-[500px] shadow-md flex flex-col gap-5 "
        >
          <h2 className="text-2xl font-semibold mb-3 hover:translate-x-1 transition-all duration-150 hover:text-blue-600">
            Contact Info
          </h2>
          <hr className="border-2 rounded bg-blue-950" />
          <p className="text-sm font-medium mb-6 hover:translate-x-1 transition-all duration-150 hover:text-blue-600">
            We’re just a message away. Let’s connect and create something
            impactful together.
          </p>

          {/* Address */}
          {/* Address */}
          <div className="relative flex items-start gap-4 mb-6">
            <MapIcon className="bg-slate-700 text-white h-12 w-12 p-3 rounded-full hover:scale-105 transition-all duration-150 hover:bg-green-700 " />
            <div className="text-sm font-semibold hover:translate-x-1 transition-all duration-150 hover:text-green-700">
              <p className="">Plot 128,Defence Colony,Sainikpuri</p>
              <p>Hyderabad,Secunderabad,Telangana-500094</p>
            </div>
          </div>

          {/* Phone */}
          <div className="relative flex items-start gap-4 mb-6">
            <PhoneCall className="bg-slate-700 text-white h-12 w-12 p-3 rounded-full hover:scale-105 transition-all duration-150 hover:bg-blue-700 " />
            <p className="text-sm font-semibold mt-3 hover:translate-x-1 transition-all duration-150 hover:text-blue-700">
              +91 7337 2233 75
            </p>
          </div>

          {/* Email */}
          <div className="relative flex items-start gap-4">
            <Mail className="bg-slate-700 text-white h-12 w-12 p-3 rounded-full hover:scale-105 transition-all duration-150 hover:bg-white hover:text-red-600 " />
            <p className="text-sm font-semibold mt-3 hover:translate-x-1 transition-all duration-150 hover:text-red-600">
              contact@omsheelgroup.com
            </p>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          variants={FadeLeft(0.9)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="w-full md:w-2/3 bg-white p-6 rounded-lg shadow-md"
        >
          <h1 className="text-3xl font-semibold mb-2">
            Get in <span className="text-blue-950 text-4xl">Touch</span>{" "}
          </h1>
          <p className="text-sm font-medium mb-6 text-gray-600">
            We’re here to listen, collaborate, and grow with you — reach out
            today.
          </p>

          <form onSubmit={handleSubmit}>
            {/* First/Last Name */}
            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              <div className="w-full">
                <label
                  htmlFor="firstName"
                  className="block mb-1 font-semibold text-sm text-gray-700"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  value={firstName}
                  onChange={(event) => setFirstName(event.target.value)}
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="lastName"
                  className="block mb-1 font-semibold text-sm text-gray-700"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  value={lastName}
                  onChange={(event) => setLastName(event.target.value)}
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
                />
              </div>
            </div>

            {/* Email/Phone */}
            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              <div className="w-full">
                <label
                  htmlFor="email"
                  className="block mb-1 font-semibold text-sm text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="phone"
                  className="block mb-1 font-semibold text-sm text-gray-700"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
                />
              </div>
            </div>

            {/* Message */}
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block mb-1 font-semibold text-sm text-gray-700"
              >
                Your Message
              </label>
              <textarea
                id="message"
                rows="4"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
              ></textarea>
            </div>

            {/* Submit */}

<button
  type="submit"
  disabled={isLoading}
  className={`px-6 py-2 rounded text-white font-medium transition-colors duration-300
    ${isLoading ? "bg-blue-500 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-500"}
  `}
>
  {isLoading ? (
    <span className="flex items-center gap-2 px-5 py-1">
      <FaSpinner className="animate-spin" />
      
    </span>
  ) : (
    "Submit"
  )}
</button>



          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default GetinTouch;
