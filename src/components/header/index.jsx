import { HeaderButton } from "../buttons";
import styles from "./styles.module.css";

import portfolio from "../../assets/portfolio.png";

export const Header = () => {
  return (
    <header className={styles.header}>
      <img
        src={portfolio}
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
