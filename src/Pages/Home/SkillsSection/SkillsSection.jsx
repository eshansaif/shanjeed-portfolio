import {
  FaBootstrap,
  FaCss3Alt,
  FaHtml5,
  FaReact,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiDaisyui,
  SiExpress,
  SiFirebase,
  SiMongodb,
  SiMysql,
  SiTailwindcss,
  SiTypescript,
  SiRedux,
  SiReactquery,
  SiAxios,
} from "react-icons/si";
import { RiJavascriptFill } from "react-icons/ri";
import { BiLogoNodejs } from "react-icons/bi";

const SkillsSection = () => {
  const skills = [
    { icon: <FaHtml5 size={150} className="text-orange-500" />, name: "HTML5" },
    { icon: <FaCss3Alt size={150} className="text-blue-500" />, name: "CSS3" },
    {
      icon: <FaBootstrap size={150} className="text-purple-500" />,
      name: "Bootstrap",
    },
    {
      icon: <SiTailwindcss size={150} className="text-teal-400" />,
      name: "Tailwind CSS",
    },
    {
      icon: <SiDaisyui size={150} className="text-orange-400" />,
      name: "DaisyUI",
    },
    {
      icon: <RiJavascriptFill size={150} className="text-yellow-400" />,
      name: "JavaScript",
    },
    {
      icon: <SiTypescript size={150} className="text-blue-400" />,
      name: "TypeScript",
    },
    {
      icon: <BiLogoNodejs size={150} className="text-green-600" />,
      name: "Node.js",
    },
    {
      icon: <SiExpress size={150} className="text-gray-300" />,
      name: "Express.js",
    },
    {
      icon: <FaReact size={150} className="text-teal-500" />,
      name: "React.js",
    },
    {
      icon: <SiRedux size={150} className="text-purple-600" />,
      name: "Redux Toolkit",
    },
    {
      icon: <SiReactquery size={150} className="text-orange-400" />,
      name: "React Query",
    },
    {
      icon: <SiMongodb size={150} className="text-green-600" />,
      name: "MongoDB",
    },
    {
      icon: <SiMysql size={150} className="text-emerald-400" />,
      name: "MySQL",
    },
    {
      icon: <SiFirebase size={150} className="text-amber-400" />,
      name: "Firebase",
    },
    { icon: <SiAxios size={150} className="text-blue-300" />, name: "Axios" },
    { icon: <FaGitAlt size={150} className="text-red-500" />, name: "Git" },
  ];

  return (
    <div className="bg-gray-700 py-20 w-full h-auto">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-sans font-bold text-[#4e9eff]">
          My Skills
        </h1>
      </div>

      <section
        data-aos="fade-up"
        data-aos-duration="3000"
        className="text-white grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
      >
        {skills.map((skill, idx) => (
          <div
            key={idx}
            className="p-8 shadow-2xl flex flex-col items-center hover:scale-105 transition-transform duration-300"
          >
            {skill.icon}
            <h3 className="text-center mt-4 font-medium">{skill.name}</h3>
          </div>
        ))}
      </section>
    </div>
  );
};

export default SkillsSection;
