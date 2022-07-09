import React from "react";

// styles
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__content}>
        <h4>Let's Connect</h4>
        <div className={styles.social__links}>
          <div className={styles.icon}>
            <a href="https://github.com/NjohPrince">Github</a>
          </div>
          <div className={styles.icon}>
            <a href="https://twitter.com/NjohNoh">Twitter</a>
          </div>
          <div className={styles.icon}>
            <a href="https://linkedin.com/">LinkedIn</a>
          </div>
        </div>
      </div>
      <div className={styles.footer__mark}>
        <h4>TheUnicornDesigns &copy; {new Date().getFullYear()}</h4>
      </div>
    </footer>
  );
};

export default Footer;
