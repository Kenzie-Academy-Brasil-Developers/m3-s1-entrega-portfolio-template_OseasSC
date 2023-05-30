import { projects } from "../../../data/projects.js";
import styles from "./styles.module.css";
import gitIcon from "../../../assets/git-icon.png";

export const RepoCard = ({ name, description }) => {
  return (
    <li className={styles.li__container}>
      <div className={styles.div__container}>
        <h3>{name}</h3>

        <p className={styles.description}>{description}</p>

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
