import styles from "./footer.module.css"

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Hugo Test</div>
      <div className={styles.text}>
        Hugo creative thoughts agency © All rights reserved.
      </div>
    </div>
  );
};

export default Footer;