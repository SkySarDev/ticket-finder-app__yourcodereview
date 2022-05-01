import React, { FC, ReactElement } from "react";

import styles from "./SkeletonLine.module.scss";

const SkeletonLine: FC = (): ReactElement => {
  return <div className={styles.skeleton}>.</div>;
};

export default SkeletonLine;
