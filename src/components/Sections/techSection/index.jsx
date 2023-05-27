import { CardCSS, CardHTML, CardJS, CardReact } from "../../cards";

export const TechSection = () => {
  return (
    <section>
      <h1>Tecnologias</h1>
      <div>
        <CardHTML />
        <CardCSS />
        <CardJS />
        <CardReact />
      </div>
    </section>
  );
};
