import "./Project.css";
import { FaGithub, FaLink } from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { motion } from "framer-motion";

import { Pagination, Navigation } from "swiper";
const Projects = () => {
  return (
    <div className="px-5 lg:px-28  bg-slate-800 text-white py-24">
      <div className="text-center">
        <h1 className="text-3xl font-sans text-[#4e9eff] font-bold py-10">
          My Projects
        </h1>
      </div>
      <div className="grid lg:grid-cols-2 gap-8">
        <div
          className="card card-compact  w-full h-96 bg-gray-700 shadow-xl"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <figure>
            <div className="image-wrap">
              <img
                className="img"
                src="https://i.ibb.co/Lg5ywHq/127-0-0-1-5173-1.png"
                alt="Shoes"
              />
            </div>
          </figure>
          <div className="card-body">
            <h2 className="card-title">Photography Institute Website</h2>
            <div className="flex space-x-3 items-center">
              <FaGithub className="w-8 h-7"></FaGithub>:{" "}
              <a href="https://github.com/Prashoman/photo-school-client">
                Client
              </a>
              <FaGithub className="w-8 h-7"></FaGithub>:{" "}
              <a href="https://github.com/Prashoman/photo-school-server">
                Server
              </a>
              <FaLink className="w-8 h-7"></FaLink>:{" "}
              <a href="https://photography-school-client.web.app/">Live</a>
            </div>
            <div className="card-actions justify-end">
              <motion.button
                whileHover={{
                  scale: 1.1,
                  textShadow: "0px 0px 8px rgb(255,255,255)",
                  boxShadow: "0px 0px 8px rgb(255,255,255)",
                }}
                onClick={() => window.my_modal_5.showModal()}
                className="py-2  px-3 bg-gradient-to-r from-cyan-400 to-sky-700 rounded shadow-sm"
              >
                Details
              </motion.button>
            </div>
          </div>
        </div>
        <div
          className="card card-compact  w-full h-96 bg-gray-700 shadow-xl"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <figure>
            <div className="image-wrap">
              <img
                className="img"
                src="https://i.ibb.co/jMkptVL/127-0-0-1-5173-2.png"
                alt="Shoes"
              />
            </div>
          </figure>
          <div className="card-body">
            <h2 className="card-title">Indian Chef Recipes Website</h2>

            <div className="flex space-x-3 items-center">
              <FaGithub className="w-8 h-7"></FaGithub>:{" "}
              <a href="https://github.com/Prashoman/indian-chef-recipe-client">
                Client
              </a>
              <FaGithub className="w-8 h-7"></FaGithub>:{" "}
              <a href="https://github.com/Prashoman/indian-chef-recipes-server">
                Server
              </a>
              <FaLink className="w-8 h-7"></FaLink>:{" "}
              <a href="https://indian-chef-recipe-client.web.app/">Live</a>
            </div>
            <div className="card-actions justify-end">
              <motion.button
                whileHover={{
                  scale: 1.1,
                  textShadow: "0px 0px 8px rgb(255,255,255)",
                  boxShadow: "0px 0px 8px rgb(255,255,255)",
                }}
                onClick={() => window.my_modal_6.showModal()}
                className="py-2  px-3 bg-gradient-to-r from-cyan-400 to-sky-700 rounded shadow-sm"
              >
                Details
              </motion.button>
            </div>
          </div>
        </div>
        <div
          className="card card-compact  w-full h-96 bg-gray-700 shadow-xl"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <figure>
            <div className="image-wrap">
              <img
                className="img"
                src="https://i.ibb.co/q75kfVP/127-0-0-1-5173-5.png"
                alt="Shoes"
              />
            </div>
          </figure>
          <div className="card-body">
            <h2 className="card-title">Animal Toys Website</h2>
            <div className="flex space-x-3 items-center">
              <FaGithub className="w-8 h-7"></FaGithub>:{" "}
              <a href="https://github.com/Prashoman/animal-toys-client">
                Client
              </a>
              <FaGithub className="w-8 h-7"></FaGithub>:{" "}
              <a href="https://github.com/Prashoman/animal-toys-server">
                Server
              </a>
              <FaLink className="w-8 h-7"></FaLink>:{" "}
              <a
                className="font-bold"
                href="https://animal-toys-client.web.app/"
              >
                Live
              </a>
            </div>
            <div className="card-actions justify-end">
              <motion.button
                whileHover={{
                  scale: 1.1,
                  textShadow: "0px 0px 8px rgb(255,255,255)",
                  boxShadow: "0px 0px 8px rgb(255,255,255)",
                }}
                onClick={() => window.my_modal_7.showModal()}
                className="py-2  px-3 bg-gradient-to-r from-cyan-400 to-sky-700 rounded shadow-sm"
              >
                Details
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* model Photography */}
      <dialog id="my_modal_5" className="modal  modal-bottom sm:modal-middle">
        <form method="dialog" className="modal-box bg-gray-700 text-white">
          <div>
            <Swiper
              pagination={{
                type: "fraction",
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div>
                  <img
                    className="w-full h-80"
                    src="https://i.ibb.co/KbkH5hN/photography-school-client-web-app-login-1.png"
                    alt=""
                  />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div>
                  <img
                    className="w-full h-80"
                    src="https://i.ibb.co/6NR1g5Z/photography-school-client-web-app-login.png"
                    alt=""
                  />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div>
                  <img
                    className="w-full h-80"
                    src="https://i.ibb.co/NyTkrYR/Screenshot-17.png"
                    alt=""
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <img
                    className="w-full h-80"
                    src="https://i.ibb.co/0KKqNW8/Screenshot-18.png"
                    alt=""
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <img
                    className="w-full h-80"
                    src="https://i.ibb.co/m8MD7hq/Screenshot-19.png"
                    alt=""
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <img
                    className="w-full h-80"
                    src="https://i.ibb.co/XY9vH3Q/Screenshot-20.png"
                    alt=""
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <img
                    className="w-full h-80"
                    src="https://i.ibb.co/tzMjQ8Y/Screenshot-21.png"
                    alt=""
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <h3 className="font-bold text-lg">PhotoGraphy Institute Website</h3>
          <div className="flex space-x-3 items-center">
            <FaGithub className="w-8 h-7"></FaGithub>:{" "}
            <a href="https://github.com/Prashoman/photo-school-client">
              Client
            </a>
            <FaGithub className="w-8 h-7"></FaGithub>:{" "}
            <a href="https://github.com/Prashoman/photo-school-server">
              Server
            </a>
            <FaLink className="w-8 h-7"></FaLink>:{" "}
            <a href="https://photography-school-client.web.app/">Live</a>
          </div>
          <div>
            <h2 className="text-xl font-sans font-bold mt-4 mb-2">Frontend:</h2>
            <ol>
              <li>
                This site basically, mada by react, tailwind, react router
                dom,firebase Authentication,axios,ten stack query.
              </li>
            </ol>
          </div>
          <div>
            <h2 className="text-xl font-sans font-bold mt-4 mb-2">Backend:</h2>
            <ol>
              <li>
                This backend site basically, mada by express JS, Node JS,
                MongoDB, JWT.
              </li>
              <li>
                Created Restful api and all frontend data comes by database.
              </li>
            </ol>
          </div>
          <div>
            <h1 className="text-xl font-sans font-bold mt-4 mb-2">Details:</h1>
            <p>
              This website three difference role as admin, instructor, student.
              Instructor can crud operation class. and by default all inserted
              class pending. admin can approved the class and all approved class
              show the frontend all classes. And all user by default student and
              admin can change the role instructor.Admin can deny the class and
              this class why deny this feedback seen this class.Student can
              select an class only one time. Student can remove class by his
              selected class. Student can Enroll class by the payment system I
              implements strip.and student can see his Enroll class and payment
              history see his enroll classes. Frontend home page Top six class
              and top six instructor base on the Enrol students.
            </p>
          </div>
          <div className="modal-action">
            {/* if there is a button in form, it will close the modal */}
            <button className="py-2  px-3 bg-gradient-to-r from-cyan-400 to-sky-700 rounded shadow-sm">
              Close
            </button>
          </div>
        </form>
      </dialog>

      {/* model Indian Chef */}
      <dialog id="my_modal_6" className="modal  modal-bottom sm:modal-middle">
        <form method="dialog" className="modal-box bg-gray-700 text-white">
          <div>
            <Swiper
              pagination={{
                type: "fraction",
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div>
                  <img
                    className="w-full h-80"
                    src="https://i.ibb.co/0qyzj5p/indian-chef-recipe-client-web-app-login.png"
                    alt=""
                  />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div>
                  <img
                    className="w-full h-80"
                    src="https://i.ibb.co/fG0RN0S/indian-chef-recipe-client-web-app-login-1.png"
                    alt=""
                  />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div>
                  <img
                    className="w-full h-80"
                    src="https://i.ibb.co/G3L2ctm/indian-chef-recipe-client-web-app-login-2.png"
                    alt=""
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <img
                    className="w-full h-80"
                    src="https://i.ibb.co/s3PVf8Y/indian-chef-recipe-client-web-app-login-3.png"
                    alt=""
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <h3 className="font-bold text-lg">Indian Chef Recipes Website</h3>
          <div className="flex space-x-3 items-center">
            <FaGithub className="w-8 h-7"></FaGithub>:{" "}
            <a href="https://github.com/Prashoman/indian-chef-recipe-client">
              Client
            </a>
            <FaGithub className="w-8 h-7"></FaGithub>:{" "}
            <a href="https://github.com/Prashoman/indian-chef-recipes-server">
              Server
            </a>
            <FaLink className="w-8 h-7"></FaLink>:{" "}
            <a href="https://indian-chef-recipe-client.web.app/">Live</a>
          </div>
          <div>
            <h2 className="text-xl font-sans font-bold mt-4 mb-2">Frontend:</h2>
            <ol>
              <li>
                This site basically, mada by react, tailwind, react router
                dom,firebase Authentication, Private route system.
              </li>
            </ol>
          </div>
          <div>
            <h2 className="text-xl font-sans font-bold mt-4 mb-2">Backend:</h2>
            <ol>
              <li>
                This backend site basically, mada by express JS.This site
                basically frontend related base made.
              </li>
            </ol>
          </div>
          <div>
            <h1 className="text-xl font-sans font-bold mt-4 mb-2">Details:</h1>
            <p>
              This is top six Indian chef recipes related website. and Using the
              private route and user not login but he/she view the details page
              redirect to the login page. A user wishlist the Recipes and there
              are top six chef added. This site focus basically, frontend
              site.Created the custom Api and Express js to rest api create then
              implements the frontend page.
            </p>
          </div>
          <div className="modal-action">
            {/* if there is a button in form, it will close the modal */}
            <button className="py-2  px-3 bg-gradient-to-r from-cyan-400 to-sky-700 rounded shadow-sm">
              Close
            </button>
          </div>
        </form>
      </dialog>

      {/* model animals Toys  */}
      <dialog id="my_modal_7" className="modal  modal-bottom sm:modal-middle">
        <form method="dialog" className="modal-box bg-gray-700 text-white">
          <div>
            <Swiper
              pagination={{
                type: "fraction",
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div>
                  <img
                    className="w-full h-80"
                    src="https://i.ibb.co/QKLqsyn/animal-toys-client-web-app-login.png"
                    alt=""
                  />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div>
                  <img
                    className="w-full h-80"
                    src="https://i.ibb.co/pbBpFK9/animal-toys-client-web-app-login-2.png"
                    alt=""
                  />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div>
                  <img
                    className="w-full h-80"
                    src="https://i.ibb.co/CVKLRvL/animal-toys-client-web-app-all-Toys.png"
                    alt=""
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <img
                    className="w-full h-80"
                    src="https://i.ibb.co/f0g1X47/animal-toys-client-web-app-all-Toys-1.png"
                    alt=""
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <img
                    className="w-full h-80"
                    src="https://i.ibb.co/FsKVy24/animal-toys-client-web-app-all-Toys-2.png"
                    alt=""
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <img
                    className="w-full h-80"
                    src="https://i.ibb.co/XxvynN8/animal-toys-client-web-app-toy-6468abd20b37e6955b909bf8.png"
                    alt=""
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <h3 className="font-bold text-lg">Animal Toys Em Website</h3>
          <div className="flex space-x-3 items-center">
            <FaGithub className="w-8 h-7"></FaGithub>:{" "}
            <a href="https://github.com/Prashoman/animal-toys-client">Client</a>
            <FaGithub className="w-8 h-7"></FaGithub>:{" "}
            <a href="https://github.com/Prashoman/animal-toys-server">Server</a>
            <FaLink className="w-8 h-7"></FaLink>:{" "}
            <a className="font-bold" href="https://animal-toys-client.web.app/">
              Live
            </a>
          </div>
          <div>
            <h2 className="text-xl font-sans font-bold mt-4 mb-2">Frontend:</h2>
            <ol>
              <li>
                This site basically, mada by react, tailwind, react router
                dom,firebase Authentication,toast.React Tab category by filter
                data of database.
              </li>
            </ol>
          </div>
          <div>
            <h2 className="text-xl font-sans font-bold mt-4 mb-2">Backend:</h2>
            <ol>
              <li>
                This backend site basically, mada by express JS, Node JS,
                MongoDB, JWT.
              </li>
              <li>
                Created Restful api and all frontend data comes by database.And
                price sorting by show frontend and implements Search option.
              </li>
            </ol>
          </div>
          <div>
            <h1 className="text-xl font-sans font-bold mt-4 mb-2">Details:</h1>
            <p>
              This is Animal Toy related website.The frontend site all toy show
              and an user crud operation toys and see the my toys page added the
              toys. Implements the sorting system by toy price and search system
              implements in all toys page.In Home page one section is React tap
              uses and category wish filter toy system implements.
            </p>
          </div>
          <div className="modal-action">
            {/* if there is a button in form, it will close the modal */}
            <button className="py-2  px-3 bg-gradient-to-r from-cyan-400 to-sky-700 rounded shadow-sm">
              Close
            </button>
          </div>
        </form>
      </dialog>
    </div>
  );
};

export default Projects;
