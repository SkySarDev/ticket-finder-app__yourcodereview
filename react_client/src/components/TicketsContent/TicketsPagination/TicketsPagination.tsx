import React, { FC, ReactElement } from "react";

import styles from "./TicketsPagination.module.scss";

interface Props {
  pages: number;
  currentPage: number;
  switchPage: (page: number) => void;
}

const TicketsPagination: FC<Props> = ({
  pages,
  currentPage,
  switchPage,
}): ReactElement => {
  const pageList = Array.from({ length: pages }, (_, i) => ++i);

  return (
    <div className={styles.field}>
      {pageList.map((page) => (
        <button
          className={styles.pageBtn}
          onClick={() => switchPage(page)}
          disabled={currentPage === page}
          key={page}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default TicketsPagination;
