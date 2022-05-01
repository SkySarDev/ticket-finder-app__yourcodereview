import React, { FC, ReactElement } from "react";

import { BlockWrapper, SkeletonLine } from "@shared/ui";
import styles from "./TicketItem.module.scss";

const SkeletonTicketItem: FC = (): ReactElement => {
  return (
    <BlockWrapper>
      <div className={styles.inner}>
        <div className={styles.header}>
          <div className={styles.skeletonHeader}>
            <SkeletonLine />
          </div>
          <div className={styles.skeletonHeader}>
            <SkeletonLine />
          </div>
        </div>

        <div className={styles.skeletonSegment}>
          {Array.from({ length: 3 }, (_, i) => {
            return (
              <div className={styles.skeletonContent} key={i}>
                <SkeletonLine />
              </div>
            );
          })}
        </div>
      </div>
    </BlockWrapper>
  );
};

export default SkeletonTicketItem;
