import React, { FC, ReactElement } from "react";

import { SkeletonLine } from "@shared/ui";
import styles from "./TicketCompaniesFilterItem.module.scss";

const SkeletonFilterItem: FC = (): ReactElement => {
  return (
    <div className={styles.skeletonItem}>
      <SkeletonLine />
    </div>
  );
};

export default SkeletonFilterItem;
