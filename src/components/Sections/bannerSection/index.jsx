import { AboutMeButton } from "../../buttons";

export const Banner = () => {
  return (
    <section>
      <div>
        <p>JOSEDASILVA</p>

        <h1>Bem Vindo ao meu portfólio</h1>

        <p>Uma frase interessante sobre mim</p>

        <AboutMeButton>Saiba Mais</AboutMeButton>
      </div>
      <div>
        <img
          src="\src\assets\banner-img.png"
          alt="imagem referente ao banner, consiste em um design de um monitor com referencias a codigos"
        />
      </div>
    </section>
  );
};
