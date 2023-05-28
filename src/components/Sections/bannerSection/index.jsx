import { BannerInfoButton } from "../../buttons";
import styles from "./styles.module.css";

export const Banner = () => {
  return (
    <section className={styles.container}>
      <div className={styles.banner__info}>
        <h3>JOSEDASILVA</h3>

        <h1>Bem Vindo ao meu portfólio</h1>

        <p>Uma frase interessante sobre mim</p>

        <BannerInfoButton>Saiba Mais</BannerInfoButton>
      </div>

      <img
        className={styles.banner__img}
        src="\src\assets\banner-img.png"
        alt="imagem referente ao banner, consiste em um design de um monitor com referencias a codigos"
      />
    </section>
  );
};
