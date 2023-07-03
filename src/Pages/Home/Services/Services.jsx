import { motion } from "framer-motion";

const Services = () => {
  return (
    <div className="bg-gray-700 px-6 lg:px-24 py-20 section-services -mt-20">
      <div className="text-center  py-8">
        <h1 className="text-3xl text-[#4e9eff] font-sans font-bold">
          My Services
        </h1>
      </div>
      <div className="grid lg:grid-cols-3 text-white gap-8">
        <motion.div
          whileHover={{
            scale: 1.1,
            //textShadow: "0px 0px 8px rgb(255,255,255)",
            boxShadow: "0px 0px 8px rgb(255,255,255)",
          }}
          className="card card-compact w-full h-80 bg-slate-800 shadow-xl"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <figure>
            <img
              className="w-full h-96"
              src="https://i.ibb.co/ncgQby0/web-design-concept-with-drawings.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Web Design</h2>
          </div>
        </motion.div>
        <motion.div
          whileHover={{
            scale: 1.1,
            //textShadow: "0px 0px 8px rgb(255,255,255)",
            boxShadow: "0px 0px 8px rgb(255,255,255)",
          }}
          className="card card-compact w-full h-80 bg-slate-800  shadow-xl"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <figure>
            <img
              className="w-full h-96"
              src="https://i.ibb.co/1ZFQx7q/4884785.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Web Development</h2>
          </div>
        </motion.div>
        <motion.div
          whileHover={{
            scale: 1.1,
            //textShadow: "0px 0px 8px rgb(255,255,255)",
            boxShadow: "0px 0px 8px rgb(255,255,255)",
          }}
          className="card card-compact w-full h-80 bg-slate-800 shadow-xl"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <figure>
            <img
              className="w-full h-96"
              src="https://i.ibb.co/sHSynC1/326252-P9-NGJU-588.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">MERN Stack Development</h2>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
