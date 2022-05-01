import React from "react";

import logo from "@app/images/logo.png";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <img src={logo} alt="Logo" className={styles.logoImg} />
    </header>
  );
};

export default Header;
