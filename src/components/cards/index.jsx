import { technologies } from "../../data/technologies.js";

const HTML = technologies[0];
const CSS = technologies[1];
const JS = technologies[2];
const REACT = technologies[3];

export const CardHTML = () => {
  return (
    <div>
      <img src={HTML.img} alt="icone da tecnologia HTML;" />
      <h2>{HTML.name}</h2>
    </div>
  );
};

export const CardCSS = () => {
  return (
    <div>
      <img src={CSS.img} alt="icone da tecnologia CSS;" />
      <h2>{CSS.name}</h2>
    </div>
  );
};

export const CardJS = () => {
  return (
    <div>
      <img src={JS.img} alt="icone da tecnologia Javascript;" />
      <h2>{JS.name}</h2>
    </div>
  );
};

export const CardReact = () => {
  return (
    <div>
      <img src={REACT.img} alt="icone da tecnologia React;" />
      <h2>{REACT.name}</h2>
    </div>
  );
};
