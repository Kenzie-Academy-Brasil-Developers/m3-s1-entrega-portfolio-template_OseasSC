import styles from "./styles.module.css";

export const HeaderButton = (props) => {
  return (
    <>
      <button className={styles.header__button}>{props.children}</button>
    </>
  );
};

export const BannerInfoButton = (props) => {
  return (
    <button className={styles.bannerinfo__button}>{props.children}</button>
  );
};
