import { technologies } from "../../data/technologies.js";
import styles from "./styles.module.css";

const HTML = technologies[0];
const CSS = technologies[1];
const JS = technologies[2];
const REACT = technologies[3];

export const CardHTML = () => {
  return (
    <li className={styles.card}>
      <img
        className={styles.icon}
        src={HTML.img}
        alt="icone da tecnologia HTML;"
      />
      <h2>{HTML.name}</h2>
    </li>
  );
};

export const CardCSS = () => {
  return (
    <li className={styles.card}>
      <img
        className={styles.icon}
        src={CSS.img}
        alt="icone da tecnologia CSS;"
      />
      <h2>{CSS.name}</h2>
    </li>
  );
};

export const CardJS = () => {
  return (
    <li className={styles.card}>
      <img
        className={styles.icon}
        src={JS.img}
        alt="icone da tecnologia Javascript;"
      />
      <h2>{JS.name}</h2>
    </li>
  );
};

export const CardReact = () => {
  return (
    <li className={styles.card}>
      <img
        className={styles.icon}
        src={REACT.img}
        alt="icone da tecnologia React;"
      />
      <h2>{REACT.name}</h2>
    </li>
  );
};
