import { CardTechnologies } from "../../cards/techCard/index.jsx";
import { technologies } from "../../../data/technologies";
import styles from "./styles.module.css";

export const TechSection = () => {
  const techs = technologies;

  const hyperTextMarkupLanguage = techs[0];
  const cascandingStyleSheet = techs[1];
  const javaScript = techs[2];
  const react = techs[3];

  return (
    <section className={styles.container}>
      <h1>Tecnologias</h1>
      <ul className={styles.mini__container}>
        <CardTechnologies {...hyperTextMarkupLanguage} />
        <CardTechnologies {...cascandingStyleSheet} />
        <CardTechnologies {...javaScript} />
        <CardTechnologies {...react} />
      </ul>
    </section>
  );
};
