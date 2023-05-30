import { RepoCard } from "../../cards/repoCard/index.jsx";
import { projects } from "../../../data/projects.js";
import styles from "./styles.module.css";

export const ProjectSection = () => {
  const project1 = projects[0];
  const project2 = projects[1];
  const project3 = projects[2];
  const project4 = projects[3];

  return (
    <section className={styles.container}>
      <h1>Projetos</h1>
      <ul className={styles.mini__container}>
        <RepoCard {...project1} />
        <RepoCard {...project2} />
        <RepoCard {...project3} />
        <RepoCard {...project4} />
      </ul>
    </section>
  );
};
