import { CardCSS, CardHTML, CardJS, CardReact } from "../../cards";
import styles from "./styles.module.css";

export const TechSection = () => {
  return (
    <section className={styles.container}>
      <h1>Tecnologias</h1>
      <ul className={styles.mini__container}>
        <CardHTML />
        <CardCSS />
        <CardJS />
        <CardReact />
      </ul>
    </section>
  );
};
