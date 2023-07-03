import Lottie from "lottie-react";
import profile from "../../../assets/profile.json";
import "./MenuBar.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const MenuBar = () => {
  return (
    <div className="hero w-full min-h-screen bg-gray-700 text-white px-5 lg:px-20 section-style">
      <div className="w-full lg:flex justify-between items-center">
        <div
          className="w-full  lg:w-1/2"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <h1 className="text-xl lg:text-3xl font-bold">
            Hi I Am{" "}
            <span className="text-2xl lg:text-4xl  font-bold">
              Prashoman Chakrabarti
            </span>
          </h1>
          <div className="animated-text">
            <h1>A MERN STACK DEVELOPER</h1>
            <h1>A FRONT END DEVELOPER</h1>
            <h1>A WEB DEVELOPER</h1>
          </div>

          <p className="py-6">
            I am a MERN Stack Developer. I from Dhaka, Bangladesh. I have
            completed my diploma course with computer technology from cumilla
            polytechnic institute in 2022.Recently, I have completed Mern stack
            course from Programming hero.
          </p>
          <Link to="/projects">
            <motion.button
              whileHover={{
                scale: 1.2,
                //textShadow: "0px 0px 8px rgb(255,255,255)",
                boxShadow: "0px 0px 8px rgb(255,255,255)",
              }}
              className="py-2  px-3 bg-gradient-to-r from-cyan-400 to-sky-700 rounded shadow-sm"
            >
              See More Project
            </motion.button>
          </Link>
        </div>
        <div
          className="w-full lg:w-1/2"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <Lottie animationData={profile} loop={true} />
        </div>
      </div>
    </div>
  );
};

export default MenuBar;
