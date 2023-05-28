import styles from "./styles.module.css";

export const FooterSection = () => {
  return (
    <section className={styles.container}>
      <div className={styles.left__side}>
        <h1>Contato</h1>
        <div>
          <img src="\src\assets\whatsapp-icon.png" alt="icone do whatsapp" />
          <img src="\src\assets\linkedin-icon.png" alt="icone do linkedIn" />
          <img src="\src\assets\github-icon.png" alt="icone do GitHub" />
        </div>
      </div>
      <div className={styles.rights__container}>
        <p className={styles.right__side}>Todos os direitos reservados -</p>
        <p className={styles.right__side}>José da Silva</p>
      </div>
    </section>
  );
};
