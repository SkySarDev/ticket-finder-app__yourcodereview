import React, { FC, ReactElement } from "react";

import styles from "./TicketSortsItem.module.scss";

interface Props {
  title: string;
  type: string;
  isActive: boolean;
  changeSortType: (type: string) => void;
}

const TicketSortsItem: FC<Props> = ({
  title,
  type,
  isActive,
  changeSortType,
}): ReactElement => {
  const onClickHandler = () => {
    changeSortType(type);
  };

  return (
    <li
      className={`${styles.sortItem} ${isActive ? styles.active : ""}`}
      onClick={onClickHandler}
    >
      {title}
    </li>
  );
};

export default TicketSortsItem;
