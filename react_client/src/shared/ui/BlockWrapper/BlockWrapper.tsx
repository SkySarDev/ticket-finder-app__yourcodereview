import React, { FC, ReactElement, ReactNode } from "react";

import styles from "./BlockWrapper.module.scss";

interface Props {
  children: ReactNode;
}

const BlockWrapper: FC<Props> = ({ children }): ReactElement => {
  return <div className={styles.wrapper}>{children}</div>;
};

export default BlockWrapper;
