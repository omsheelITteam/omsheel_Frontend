import React, { useEffect, useState } from "react";
import { Routes, Route, Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// import OurWorks from "./pages/OurWorks";
// import About from "./pages/About";
// // import CareerGuidance from './pages/CareerGuidance'
// import Incubator from "./pages/Incubator";
// import Home from "./pages/Home";
// import SignUp from "./pages/SignupPage";
// import Login from "./pages/LoginPage";
// import ForgotPassword from "./pages/ForgotPassword";
// import EmailVerification from "./pages/EmailVerification";
import { ToastContainer } from "react-toastify";
import { lazy, Suspense } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import PulseLoader from "react-spinners/PulseLoader";
import GetinTouch from "./components/GetinTouch";
const Home = lazy(() => import("./pages/Home"));
const OurWorks = lazy(() => import("./pages/OurWorks"));
const About = lazy(() => import("./pages/About"));
const Incubator = lazy(() => import("./pages/Incubator"));
const SignUp = lazy(() => import("./pages/SignupPage"));
const Login = lazy(() => import("./pages/LoginPage"));
const ForgotPassword = lazy(() => import("./pages/ForgotPassword"));
const EmailVerification = lazy(() => import("./pages/EmailVerification"));
import IntroOverlay from "./components/IntroOverlay";
import LogoRotation from "./components/LogoRotation";
const App = () => {
  const [showIntro, setShowIntro] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [showMaincontent, setShowMaincontent] = useState(false);

  useEffect(() => {
    const hasSeenIntro = sessionStorage.getItem("hasSeenIntro");

    if (!hasSeenIntro) {
      setShowIntro(true);
      const timer = setTimeout(() => {
        setFadeOut(true);
        setTimeout(() => {
          setShowIntro(false);
          sessionStorage.setItem("hasSeenIntro", "true");
          setShowMaincontent(true);
        }, 5000);
      }, 3000);
      return () => clearTimeout(timer);
    } else {
      setShowMaincontent(true); // skip intro
    }
  }, []);

  return (
    <div>
      {showIntro && <IntroOverlay fadeOut={fadeOut} />}
      {showMaincontent && (
        <ThemeProvider>
          <Suspense
            fallback={
              <div className="flex justify-center items-center min-h-screen">
                <LogoRotation />
              </div>
            }
          >
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/ourworks" element={<OurWorks />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact-us" element={<GetinTouch />} />
              <Route path="/incubator" element={<Incubator />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/login" element={<Login />} />
              <Route path="/forgot_password" element={<ForgotPassword />} />
              <Route path="/verify-email" element={<EmailVerification />} />
            </Routes>
          </Suspense>
          <ToastContainer />
          <Footer />
        </ThemeProvider>
      )}
    </div>
  );
};

export default App;
