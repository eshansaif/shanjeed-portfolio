import { HiOutlinePhone, HiOutlineMail } from "react-icons/hi";
import {
  FaFacebook,
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import contact from "../../../assets/contact.json";

const Contact = () => {
  return (
    <div className="w-full h-auto bg-slate-800 px-6 lg:px-24 text-white py-10">
      <div className="py-10">
        <h1 className="text-3xl font-sans text-[#4e9eff] font-bold text-center">
          Contact Us
        </h1>
      </div>
      <div className="lg:flex w-full items-center">
        <div className="w-full lg:w-1/2">
          <div
            className="w-full lg:w-1/2"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <Lottie animationData={contact} loop={true} />
          </div>
          <div
            className="w-full h-full py-6 space-y-4"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <div>
              <h1 className="flex items-center text-xl lg:text-2xl">
                <HiOutlineMail /> : prashomanchakrabarti1@gmail.com{" "}
              </h1>

              <h1 className="flex items-center text-xl lg:text-2xl">
                <HiOutlinePhone /> : +8801940617911
              </h1>
            </div>
            <div>
              <h1 className="text-xl lg:text-2xl">
                Address: Mirpur, Dhaka, Bangladesh
              </h1>
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
        <div
          className="w-full lg:w-1/2"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <form action="">
            <div className="form-control w-full">
              <label className="label">
                <span className="text-xl text-white">Name</span>
              </label>
              <input
                type="text"
                placeholder="Example"
                className="input input-bordered bg-gray-700  input-info w-full"
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="text-xl text-white">Email</span>
              </label>
              <input
                type="email"
                placeholder="example@gmail.com"
                className="input input-bordered bg-gray-700  input-info w-full"
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="text-xl text-white">Phone</span>
              </label>
              <input
                type="test"
                placeholder="+88018**********"
                className="input input-bordered bg-gray-700  input-info w-full"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="text-xl text-white">Message</span>
              </label>
              <textarea
                className="textarea textarea-bordered bg-gray-700  textarea-info w-full h-24"
                placeholder="Some text..."
              ></textarea>
            </div>
            <div className="w-full mt-4">
              <motion.button
                whileHover={{
                  scale: 1,
                  textShadow: "0px 0px 8px rgb(255,255,255)",
                  boxShadow: "0px 0px 8px rgb(255,255,255)",
                }}
                className="py-2 w-full px-2 bg-gradient-to-r from-cyan-400 to-sky-700 rounded shadow-sm"
              >
                Send
              </motion.button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
