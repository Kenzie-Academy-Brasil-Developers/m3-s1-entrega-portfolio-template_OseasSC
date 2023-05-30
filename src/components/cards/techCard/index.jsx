import styles from "./styles.module.css";

export const CardTechnologies = ({ name, img }) => {
  return (
    <li className={styles.card}>
      <img
        className={styles.icon}
        src={img}
        alt={`icone da tecnologia ${name}`}
      />
      <h2>{name}</h2>
    </li>
  );
};
