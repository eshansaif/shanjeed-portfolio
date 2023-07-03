import Lottie from "lottie-react";
import profile from "../../../assets/profile.json";
import "./MenuBar.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ReactTypingEffect from "react-typing-effect";

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
            <span className="text-center text-base">Welcome</span>{" "}
            <br />
            <span className="text-2xl lg:text-4xl  font-bold">
              I'm Md. Shanjeed Saif
            </span>
          </h1>
          {/* <div className="animated-text">
            <h1>A MERN STACK DEVELOPER</h1>
            <h1>A FRONT END DEVELOPER</h1>
            <h1>A WEB DEVELOPER</h1>
          </div> */}

          <ReactTypingEffect
            text={["Full-Stack Web Developer ", "Specialized in MERN Stack ", "React.js Developer ", "Front-end Web Developer "]}
            cursorRenderer={cursor => <h1 className=' text-3xl'>{cursor}</h1>}
            displayTextRenderer={(text, i) => {
              return (
                <h1>
                  {text.split('').map((char, i) => {
                    const key = `${i}`;
                    return (
                      <span
                        className='text-3xl lg:text-5xl font-bold text-[#1fc9e7]'
                        key={key}
                      // style={i % 2 === 0 ? { color: 'magenta' } : {}}
                      >{char}</span>
                    );
                  })}
                </h1>
              );
            }}
            speed={50}
            startDelay={50}
          />

          <p className="py-6">
            Passionate about web development and skilled in the MERN Stack. I have
            completed my Bachelor program in Business Information Technology (BIT) and completing my Masters in Software Engineering. I'm a Fresher developer ready to make an impact. With expertise in HTML, CSS, JavaScript, React, Express.js and Node.js I enjoy building user-friendly web applications.
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
              See All Projects
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
