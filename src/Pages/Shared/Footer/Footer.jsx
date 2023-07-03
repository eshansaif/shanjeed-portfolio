import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import {
  FaFacebook,
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  const date = new Date().getFullYear;
  return (
    <div className="bg-gray-700 w-full px-6 lg:px-24 py-6  text-white">
      <div className="lg:flex justify-between items-center space-y-3">
        <Link>
          {" "}
          <img
            className="w-24 h-12"
            src="https://i.ibb.co/j4gw6wb/logo-no-background.png"
            alt=""
          />{" "}
        </Link>
        <div>
          <p className="lg:text-xl font-sans">
            © {date} Prashoman Chakrabarti. All Rights Reserved.
          </p>
        </div>
        <div className="flex items-center space-x-5">
          <motion.a
            whileHover={{
              scale: 1.1,
              textShadow: "0px 0px 8px rgb(255,255,255)",
              boxShadow: "0px 0px 8px rgb(255,255,255)",
            }}
            href="https://www.facebook.com/prashmon.chakroborty"
            className="bg-gradient-to-r px-1 py-1 cursor-pointer  rounded-full from-cyan-400 to-sky-700  shadow-sm"
          >
            <FaFacebook className="w-10 h-8"></FaFacebook>
          </motion.a>
          <motion.a
            whileHover={{
              scale: 1.1,
              textShadow: "0px 0px 8px rgb(255,255,255)",
              boxShadow: "0px 0px 8px rgb(255,255,255)",
            }}
            href="https://github.com/Prashoman"
            className="bg-gradient-to-r px-1 py-1 cursor-pointer rounded-full from-cyan-400 to-sky-700  shadow-sm"
          >
            <FaGithub className="w-10 h-8"></FaGithub>
          </motion.a>
          <motion.a
            whileHover={{
              scale: 1.1,
              textShadow: "0px 0px 8px rgb(255,255,255)",
              boxShadow: "0px 0px 8px rgb(255,255,255)",
            }}
            href="https://www.linkedin.com/in/prashoman-chakrabarti-2b827423b/"
            className="bg-gradient-to-r px-1 py-1 cursor-pointer rounded-full from-cyan-400 to-sky-700  shadow-sm"
          >
            <FaLinkedinIn className="w-10 h-8"></FaLinkedinIn>
          </motion.a>
          <motion.a
            whileHover={{
              scale: 1.1,
              textShadow: "0px 0px 8px rgb(255,255,255)",
              boxShadow: "0px 0px 8px rgb(255,255,255)",
            }}
            href="https://www.instagram.com/badhon_chakrabarti_/"
            className="bg-gradient-to-r px-1 py-1 cursor-pointer rounded-full from-cyan-400 to-sky-700  shadow-sm"
          >
            <FaInstagram className="w-10 h-8"></FaInstagram>
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
