import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { HiOutlinePhone, HiOutlineMail } from "react-icons/hi";
import {
  FaFacebook,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Abouts = () => {
  return (
    <div className="px-5 lg:px-20 w-full h-full bg-slate-800 text-white py-10 section-about -mt-36 lg:-mt-28">
      <div className="text-center py-10">
        <h1 className="text-3xl font-sans font-bold text-[#4e9eff] mt-20  lg:mt-10">
          About Me
        </h1>
      </div>
      <div className="space-y-6 lg:flex justify-between mt-8">
        <motion.img
          whileHover={{
            scale: 1,
            //textShadow: "0px 0px 8px rgb(255,255,255)",
            boxShadow: "0px 0px 8px rgb(255,255,255)",
          }}
          src="eshan_portfolio.png"
          className="w-full lg:w-80 h-full rounded-lg border-2 border-[#4e9eff] img-style"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        />

        <div
          className="lg:ms-6 w-full h-full"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <Tabs>
            <TabList>
              <Tab>Profile</Tab>
              <Tab>Skills</Tab>
              <Tab>Contact</Tab>
            </TabList>
            <TabPanel>
              <p>
                I’m Md. Shanjeed Saif, Dynamic and motivated React developer with a strong passion for front-end web development. Eager to apply my expertise in crafting visually stunning and user-friendly interfaces that elevate user experiences. Seeking a challenging opportunity to contribute my skills and drive innovation at a destination where I can thrive and make a meaningful impact.
              </p>
            </TabPanel>
            <TabPanel>
              <h2 className="text-2xl font-sans font-bold">My Skills</h2>
              <div className="px-6 py-4 lg:px-24 text-white">
                <div className="space-y-3">
                  <div>
                    <h1 className="text-xl font-sans font-bold">Expertise :</h1>
                    <div className="space-x-4 space-y-3 text-start">
                      <motion.button
                        className="border-2 text-white border-[#4e9eff] px-2 py-1 lg:px-3 lg:py-2 hover:bg-gray-500"
                        whileHover={{
                          scale: 1.2,
                          //textShadow: "0px 0px 8px rgb(255,255,255)",
                          boxShadow: "0px 0px 8px rgb(255,255,255)",
                        }}
                      >
                        HTML5
                      </motion.button>
                      <motion.button
                        className="border-2 text-white border-[#4e9eff] px-2 py-1 lg:px-3 lg:py-2 hover:bg-gray-500"
                        whileHover={{
                          scale: 1.2,
                          //textShadow: "0px 0px 8px rgb(255,255,255)",
                          boxShadow: "0px 0px 8px rgb(255,255,255)",
                        }}
                      >
                        CSS3
                      </motion.button>
                      <motion.button
                        className="border-2 text-white border-[#4e9eff] px-2 py-1 lg:px-3 lg:py-2 hover:bg-gray-500"
                        whileHover={{
                          scale: 1.2,
                          //textShadow: "0px 0px 8px rgb(255,255,255)",
                          boxShadow: "0px 0px 8px rgb(255,255,255)",
                        }}
                      >
                        Bootstrap
                      </motion.button>
                      <motion.button
                        className="border-2 text-white border-[#4e9eff] px-2 py-1 lg:px-3 lg:py-2 hover:bg-gray-500"
                        whileHover={{
                          scale: 1.2,
                          //textShadow: "0px 0px 8px rgb(255,255,255)",
                          boxShadow: "0px 0px 8px rgb(255,255,255)",
                        }}
                      >
                        Tailwind
                      </motion.button>
                      <motion.button
                        className="border-2 text-white border-[#4e9eff] px-2 py-1 lg:px-3 lg:py-2 hover:bg-gray-500"
                        whileHover={{
                          scale: 1.2,
                          //textShadow: "0px 0px 8px rgb(255,255,255)",
                          boxShadow: "0px 0px 8px rgb(255,255,255)",
                        }}
                      >
                        JavaScript
                      </motion.button>
                      <motion.button
                        className="border-2 text-white border-[#4e9eff] px-2 py-1 lg:px-3 lg:py-2 hover:bg-gray-500"
                        whileHover={{
                          scale: 1.2,
                          //textShadow: "0px 0px 8px rgb(255,255,255)",
                          boxShadow: "0px 0px 8px rgb(255,255,255)",
                        }}
                      >
                        ES6
                      </motion.button>
                      <motion.button
                        className="border-2 text-white border-[#4e9eff] px-2 py-1 lg:px-3 lg:py-2 hover:bg-gray-500"
                        whileHover={{
                          scale: 1.2,
                          //textShadow: "0px 0px 8px rgb(255,255,255)",
                          boxShadow: "0px 0px 8px rgb(255,255,255)",
                        }}
                      >
                        React JS
                      </motion.button>
                    </div>
                  </div>
                  <div>
                    <h1 className="text-xl font-sans font-bold">
                      Comfortable :{" "}
                    </h1>
                    <div className="space-x-4 text-start space-y-3">
                      <motion.button
                        className="border-2 text-white border-[#4e9eff] px-2 py-1 lg:px-3 lg:py-2 hover:bg-gray-500"
                        whileHover={{
                          scale: 1.2,
                          //textShadow: "0px 0px 8px rgb(255,255,255)",
                          boxShadow: "0px 0px 8px rgb(255,255,255)",
                        }}
                      >
                        Node JS
                      </motion.button>
                      <motion.button
                        className="border-2 text-white border-[#4e9eff] px-2 py-1 lg:px-3 lg:py-2 hover:bg-gray-500"
                        whileHover={{
                          scale: 1.2,
                          //textShadow: "0px 0px 8px rgb(255,255,255)",
                          boxShadow: "0px 0px 8px rgb(255,255,255)",
                        }}
                      >
                        Express JS
                      </motion.button>
                      <motion.button
                        className="border-2 text-white border-[#4e9eff] px-2 py-1 lg:px-3 lg:py-2 hover:bg-gray-500"
                        whileHover={{
                          scale: 1.2,
                          //textShadow: "0px 0px 8px rgb(255,255,255)",
                          boxShadow: "0px 0px 8px rgb(255,255,255)",
                        }}
                      >
                        MongoDB
                      </motion.button>
                    </div>
                  </div>
                  <div>
                    <h1 className="text-xl font-sans font-bold">
                      Familiar with :{" "}
                    </h1>
                    <div className="space-x-4 text-start space-y-3">
                      <motion.button
                        className="border-2 text-white border-[#4e9eff] px-2 py-1 lg:px-3 lg:py-2 hover:bg-gray-500"
                        whileHover={{
                          scale: 1.2,
                          //textShadow: "0px 0px 8px rgb(255,255,255)",
                          boxShadow: "0px 0px 8px rgb(255,255,255)",
                        }}
                      >
                        Next js
                      </motion.button>
                      <motion.button
                        className="border-2 text-white border-[#4e9eff] px-2 py-1 lg:px-3 lg:py-2 hover:bg-gray-500"
                        whileHover={{
                          scale: 1.2,
                          //textShadow: "0px 0px 8px rgb(255,255,255)",
                          boxShadow: "0px 0px 8px rgb(255,255,255)",
                        }}
                      >
                        MVC
                      </motion.button>
                      <motion.button
                        className="border-2 text-white border-[#4e9eff] px-2 py-1 lg:px-3 lg:py-2 hover:bg-gray-500"
                        whileHover={{
                          scale: 1.2,
                          //textShadow: "0px 0px 8px rgb(255,255,255)",
                          boxShadow: "0px 0px 8px rgb(255,255,255)",
                        }}
                      >
                        Mongoose
                      </motion.button>
                      <motion.button
                        className="border-2 text-white border-[#4e9eff] px-2 py-1 lg:px-3 lg:py-2 hover:bg-gray-500"
                        whileHover={{
                          scale: 1.2,
                          //textShadow: "0px 0px 8px rgb(255,255,255)",
                          boxShadow: "0px 0px 8px rgb(255,255,255)",
                        }}
                      >
                        Redux
                      </motion.button>
                    </div>
                  </div>
                  <div>
                    <h1 className="text-xl font-sans font-bold">Tools :</h1>
                    <div className="space-x-4 text-start space-y-3">
                      <motion.button
                        className="border-2 text-white border-[#4e9eff] px-2 py-1 lg:px-3 lg:py-2 hover:bg-gray-500"
                        whileHover={{
                          scale: 1.2,
                          //textShadow: "0px 0px 8px rgb(255,255,255)",
                          boxShadow: "0px 0px 8px rgb(255,255,255)",
                        }}
                      >
                        Visual Studio
                      </motion.button>
                      <motion.button
                        className="border-2 text-white border-[#4e9eff] px-2 py-1 lg:px-3 lg:py-2 hover:bg-gray-500"
                        whileHover={{
                          scale: 1.2,
                          //textShadow: "0px 0px 8px rgb(255,255,255)",
                          boxShadow: "0px 0px 8px rgb(255,255,255)",
                        }}
                      >
                        Chrome dev Tool
                      </motion.button>
                      <motion.button
                        className="border-2 text-white border-[#4e9eff] px-2 py-1 lg:px-3 lg:py-2 hover:bg-gray-500"
                        whileHover={{
                          scale: 1.2,
                          //textShadow: "0px 0px 8px rgb(255,255,255)",
                          boxShadow: "0px 0px 8px rgb(255,255,255)",
                        }}
                      >
                        Netlify
                      </motion.button>
                      <motion.button
                        className="border-2 text-white border-[#4e9eff] px-2 py-1 lg:px-3 lg:py-2 hover:bg-gray-500"
                        whileHover={{
                          scale: 1.2,
                          //textShadow: "0px 0px 8px rgb(255,255,255)",
                          boxShadow: "0px 0px 8px rgb(255,255,255)",
                        }}
                      >
                        Figma
                      </motion.button>
                      <motion.button
                        className="border-2 text-white border-[#4e9eff] px-2 py-1 lg:px-3 lg:py-2 hover:bg-gray-500"
                        whileHover={{
                          scale: 1.2,
                          //textShadow: "0px 0px 8px rgb(255,255,255)",
                          boxShadow: "0px 0px 8px rgb(255,255,255)",
                        }}
                      >
                        Firebase
                      </motion.button>
                      <motion.button
                        className="border-2 text-white border-[#4e9eff] px-2 py-1 lg:px-3 lg:py-2 hover:bg-gray-500"
                        whileHover={{
                          scale: 1.2,
                          //textShadow: "0px 0px 8px rgb(255,255,255)",
                          boxShadow: "0px 0px 8px rgb(255,255,255)",
                        }}
                      >
                        GitHub
                      </motion.button>
                    </div>
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <h2 className="text-2xl"> My Contact Information</h2>
              <div className="w-full h-full py-6 space-y-4">
                <div>
                  <h1 className="flex items-center text-xl">
                    <HiOutlineMail />: eshansaif1234@gmail.com{" "}
                  </h1>

                  <h1 className="flex items-center text-xl">
                    <HiOutlinePhone />: +8801821916104
                  </h1>
                </div>
                <div>
                  <h1 className="text-xl">
                    Address: 78/89, Central Road, Dhanmondi, Dhaka, Bangladesh
                  </h1>
                </div>
                <div className="flex items-center space-x-5">
                  <a href="https://www.facebook.com/shanjeed.saif.eshan/">
                    {" "}
                    <FaFacebook className="w-10 h-8"></FaFacebook>
                  </a>
                  <a href="https://github.com/eshansaif">
                    <FaGithub className="w-10 h-8"></FaGithub>
                  </a>
                  <a href="https://www.linkedin.com/in/md-shanjeed-saif-eshan-980693157/">
                    <FaLinkedinIn className="w-10 h-8"></FaLinkedinIn>
                  </a>
                </div>
              </div>
            </TabPanel>
          </Tabs>
          <div className="my-3">
            <motion.a
              whileHover={{
                scale: 1.5,
                //textShadow: "0px 0px 8px rgb(255,255,255)",
                boxShadow: "0px 0px 8px rgb(255,255,255)",
              }}
              href="Md_Shanjeed_Saif_Resume.pdf"
              download="Md_Shanjeed_Saif_Resume"
              className="py-2  px-3 bg-gradient-to-r from-cyan-400 to-sky-700 rounded shadow-sm"
            >
              Download Resume
            </motion.a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Abouts;
