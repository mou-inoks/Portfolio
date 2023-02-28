import { projects } from "../Constant";
import styles, { layout } from "../style";
import ProjectCards from "./ProjectCard";
import { Container, Row, Col } from "react-bootstrap";

const Projects = () => (
  <section id="projects" className={layout.section}>
    <div className="flex flex-row justify-between items-center w-full">
      <h1 className="flex-1 font-poppins font-thin ss:text-[62px] text-white leading-[75px] text-center absolute inset-x-0 top-full">
        Projects
      </h1>
      <ProjectCards/>
    </div>
  </section>
);

export default Projects;
