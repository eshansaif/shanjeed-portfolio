import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import Abouts from "../Pages/Home/Abouts/Abouts";
import SkillsSection from "../Pages/Home/SkillsSection/SkillsSection";
import Projects from "../Pages/Home/Projects/Projects";
import Services from "../Pages/Home/Services/Services";
import Contact from "../Pages/Home/Contact/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <Abouts></Abouts>,
      },
      {
        path: "/skills",
        element: <SkillsSection></SkillsSection>,
      },
      {
        path: "/projects",
        element: <Projects></Projects>,
      },
      {
        path: "/services",
        element: <Services></Services>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
    ],
  },
]);
export default router;
