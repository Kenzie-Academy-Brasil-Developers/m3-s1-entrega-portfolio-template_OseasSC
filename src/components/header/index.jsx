import { HeaderButton } from "../buttons";
import styles from "./styles.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <img
        src="../../assets/portfolio.png"
        alt="Logo do portfolio que é uma escrita na cor branco"
      />

      <div className={styles.navigation}>
        <p>Sobre</p>
        <p>Stack</p>
        <p>Projeto</p>
      </div>

      <HeaderButton>Contato</HeaderButton>
    </header>
  );
};
