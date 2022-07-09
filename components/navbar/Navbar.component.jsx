import React from "react";
import Link from "next/link";

// styles
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <nav role="navigation" aria-label="main" className={styles.navbar}>
      <div className={styles.logo}>
        <h2>TheUnicornDesigns</h2>
      </div>
      <ul className={styles.menu}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/">About</Link>
        </li>
        <li>
          <Link href="/">Creations</Link>
        </li>
        <li>
          <Link href="/">Designs</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
