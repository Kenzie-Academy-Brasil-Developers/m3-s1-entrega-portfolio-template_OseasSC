import { Project1, Project2, Project3, Project4 } from "../../projects";
import styles from "./styles.module.css";

export const ProjectSection = () => {
  return (
    <section className={styles.container}>
      <h1>Projetos</h1>
      <ul className={styles.mini__container}>
        <Project1 />
        <Project2 />
        <Project3 />
        <Project4 />
      </ul>
    </section>
  );
};
