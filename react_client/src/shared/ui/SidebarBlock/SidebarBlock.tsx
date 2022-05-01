import React, { FC, ReactElement, ReactNode } from "react";

import { BlockWrapper } from "@shared/ui";
import styles from "./SidebarBlock.module.scss";

interface Props {
  title: string;
  children: ReactNode;
}

const SidebarBlock: FC<Props> = ({ title, children }): ReactElement => {
  return (
    <BlockWrapper>
      <div className={styles.inner}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.content}>{children}</div>
      </div>
    </BlockWrapper>
  );
};

export default SidebarBlock;
