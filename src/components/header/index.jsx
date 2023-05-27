import { HeaderButton } from "../buttons";
import styles from "./styles.module.css";

export const Header = () => {
  return (
    <header>
      <img
        src="\src\assets\portfolio.png"
        alt="Logo do portfolio que é uma escrita na cor branco"
      />

      <div>
        <p>Sobre</p>
        <p>Stack</p>
        <p>Projeto</p>
      </div>

      <HeaderButton>Contato</HeaderButton>
    </header>
  );
};
