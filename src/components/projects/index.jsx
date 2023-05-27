import { projects } from "../../data/projects.js";

const project1 = projects[0];
const project2 = projects[1];
const project3 = projects[2];
const project4 = projects[3];

export const Project1 = () => {
  return (
    <>
      <div>
        <h3>{project1.name}</h3>

        <p>{project1.description}</p>

        <p>Saiba Mais</p>
      </div>

      <img
        src="\src\assets\git-icon.png"
        alt="icone do GitHub, é a propria logo do GitHub."
      />
    </>
  );
};
export const Project2 = () => {
  return (
    <>
      <div>
        <h3>{project2.name}</h3>

        <p>{project2.description}</p>

        <p>Saiba Mais</p>
      </div>

      <img
        src="\src\assets\git-icon.png"
        alt="icone do GitHub, é a propria logo do GitHub."
      />
    </>
  );
};
export const Project3 = () => {
  return (
    <>
      <div>
        <h3>{project3.name}</h3>

        <p>{project3.description}</p>

        <p>Saiba Mais</p>
      </div>

      <img
        src="\src\assets\git-icon.png"
        alt="icone do GitHub, é a propria logo do GitHub."
      />
    </>
  );
};
export const Project4 = () => {
  return (
    <>
      <div>
        <h3>{project4.name}</h3>

        <p>{project4.description}</p>

        <p>Saiba Mais</p>
      </div>

      <img
        src="\src\assets\git-icon.png"
        alt="icone do GitHub, é a propria logo do GitHub."
      />
    </>
  );
};
