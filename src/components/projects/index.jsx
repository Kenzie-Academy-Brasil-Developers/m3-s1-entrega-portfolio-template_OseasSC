import { projects } from "../../data/projects.js";
import styles from "./styles.module.css";
import gitIcon from "../../assets/git-icon.png";

const project1 = projects[0];
const project2 = projects[1];
const project3 = projects[2];
const project4 = projects[3];

export const Project1 = () => {
  return (
    <li className={styles.li__container}>
      <div className={styles.div__container}>
        <h3>{project1.name}</h3>

        <p className={styles.description}>{project1.description}</p>

        <p className={styles.link}>Saiba Mais</p>
      </div>

      <img
        className={styles.git__icon}
        src={gitIcon}
        alt="icone do GitHub, é a propria logo do GitHub."
      />
    </li>
  );
};
export const Project2 = () => {
  return (
    <li className={styles.li__container}>
      <div className={styles.div__container}>
        <h3>{project2.name}</h3>

        <p className={styles.description}>{project2.description}</p>

        <p className={styles.link}>Saiba Mais</p>
      </div>

      <img
        className={styles.git__icon}
        src={gitIcon}
        alt="icone do GitHub, é a propria logo do GitHub."
      />
    </li>
  );
};
export const Project3 = () => {
  return (
    <li className={styles.li__container}>
      <div className={styles.div__container}>
        <h3>{project3.name}</h3>

        <p className={styles.description}>{project3.description}</p>

        <p className={styles.link}>Saiba Mais</p>
      </div>

      <img
        className={styles.git__icon}
        src={gitIcon}
        alt="icone do GitHub, é a propria logo do GitHub."
      />
    </li>
  );
};
export const Project4 = () => {
  return (
    <li className={styles.li__container}>
      <div className={styles.div__container}>
        <h3>{project4.name}</h3>

        <p className={styles.description}>{project4.description}</p>

        <p className={styles.link}>Saiba Mais</p>
      </div>

      <img
        className={styles.git__icon}
        src={gitIcon}
        alt="icone do GitHub, é a propria logo do GitHub."
      />
    </li>
  );
};
