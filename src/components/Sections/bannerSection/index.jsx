import { BannerInfoButton } from "../../buttons";
import styles from "./styles.module.css";

import banner from "../../../assets/banner-img.png";

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
        src={banner}
        alt="imagem referente ao banner, consiste em um design de um monitor com referencias a codigos"
      />
    </section>
  );
};
