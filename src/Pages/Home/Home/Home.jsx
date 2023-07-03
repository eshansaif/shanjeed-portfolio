import Abouts from "../Abouts/Abouts";
import Contact from "../Contact/Contact";
import MenuBar from "../MenuBar/MenuBar";
import Projects from "../Projects/Projects";
import Services from "../Services/Services";
import SkillsSection from "../SkillsSection/SkillsSection";

//import { motion, useScroll } from "framer-motion";

const Home = () => {
  //const { scrollYProgress } = useScroll();
  return (
    <div>
      <MenuBar></MenuBar>
      <Abouts></Abouts>
      <SkillsSection></SkillsSection>
      <Projects></Projects>
      <Services></Services>
      <Contact></Contact>
    </div>
  );
};

export default Home;
