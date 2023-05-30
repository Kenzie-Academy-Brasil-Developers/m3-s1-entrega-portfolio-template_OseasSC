import styles from "./styles.module.css";
import whatsapp from "../../assets/whatsapp-icon.png";
import linkedIn from "../../assets/linkedin-icon.png";
import gitHub from "../../assets/github-icon.png";

export const FooterSection = () => {
  return (
    <section className={styles.container}>
      <div className={styles.left__side}>
        <h1>Contato</h1>
        <div>
          <img src={whatsapp} alt="icone do whatsapp" />
          <img src={linkedIn} alt="icone do linkedIn" />
          <img src={gitHub} alt="icone do GitHub" />
        </div>
      </div>
      <div className={styles.rights__container}>
        <p className={styles.rights}>Todos os direitos reservados -</p>
        <p className={styles.name}>José da Silva</p>
      </div>
    </section>
  );
};
