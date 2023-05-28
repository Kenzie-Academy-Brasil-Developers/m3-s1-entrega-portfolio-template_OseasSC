import styles from "./styles.module.css";

export const AboutMe = () => {
  return (
    <section className={styles.container}>
      <div className={styles.aboutme}>
        <h1>Sobre Mim</h1>
      </div>
      <div className={styles.aboutme__text}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum
          molestias quaerat aspernatur voluptas tempora consequuntur excepturi
          mollitia officiis ducimus pariatur debitis quod eius aliquam porro,
          ratione a quas ut magnam.
        </p>
      </div>
    </section>
  );
};
