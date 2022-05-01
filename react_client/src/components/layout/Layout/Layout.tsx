import React, { FC, ReactNode } from "react";

import { Header } from "@components/layout";
import styles from "./Layout.module.scss";

interface IProps {
  children: ReactNode;
}

const Layout: FC<IProps> = ({ children }) => {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.grid}>{children}</div>
    </div>
  );
};

export default Layout;
