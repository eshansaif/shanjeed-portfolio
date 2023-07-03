import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";

const SkillsSection = () => {
  return (
    <div className="bg-gray-700 py-20 w-full h-auto">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-sans font-bold text-[#4e9eff]">
          My Skills
        </h1>
      </div>
      <Marquee>
        <div className=" space-x-4">
          <motion.button className="border-2 text-white border-[#4e9eff] px-4 py-3 hover:bg-gray-500">
            HTML5
          </motion.button>
          <motion.button className="border-2 text-white border-[#4e9eff] px-4 py-3 hover:bg-gray-500">
            CSS3
          </motion.button>
          <motion.button className="border-2 text-white border-[#4e9eff] px-4 py-3 hover:bg-gray-500">
            Bootstrap
          </motion.button>
          <motion.button className="border-2 text-white border-[#4e9eff] px-4 py-3 hover:bg-gray-500">
            Tailwind
          </motion.button>
          <motion.button className="border-2 text-white border-[#4e9eff] px-4 py-3 hover:bg-gray-500">
            JavaScript
          </motion.button>
          <motion.button className="border-2 text-white border-[#4e9eff] px-4 py-3 hover:bg-gray-500">
            React JS
          </motion.button>
          <motion.button className="border-2 text-white border-[#4e9eff] px-4 py-3 hover:bg-gray-500">
            Node JS
          </motion.button>
          <motion.button className="border-2 text-white border-[#4e9eff] px-4 py-3 hover:bg-gray-500">
            Express JS
          </motion.button>
          <motion.button className="border-2 text-white border-[#4e9eff] px-4 py-3 hover:bg-gray-500">
            MongoDB
          </motion.button>
          <motion.button className="border-2 text-white border-[#4e9eff] px-4 py-3 hover:bg-gray-500">
            Mongoose
          </motion.button>
          <motion.button className="border-2 text-white border-[#4e9eff] px-4 py-3 hover:bg-gray-500">
            MVC
          </motion.button>
        </div>
      </Marquee>

      <div
        className="px-6 py-4 lg:px-24 text-white"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
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
            <h1 className="text-xl font-sans font-bold">Comfortable : </h1>
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
            <h1 className="text-xl font-sans font-bold">Familiar with : </h1>
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
    </div>
  );
};

export default SkillsSection;
