import { projects } from "../Constant";
import styles, { layout } from "../style";
import ProjectCards from "./ProjectCard";



const Projects = (props) =>  (
  <section id="projects" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>Projects</h2>
      <ProjectCards />
    </div>
  </section>
);

export default Projects;
