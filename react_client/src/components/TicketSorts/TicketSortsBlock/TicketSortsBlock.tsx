import React, { FC, ReactElement, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { sortTypeList } from "@helpers/constants/lists.constants";
import TicketSortsItem from "./TicketSortsItem/TicketSortsItem";
import styles from "./TicketSortsBlock.module.scss";

const TicketSortsBlock: FC = (): ReactElement => {
  const [sortType, setSortType] = useState("cheaper");
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const sortQuery = searchParams.get("sort");

    if (sortQuery) {
      setSortType(sortQuery);
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const changeSortType = (type: string): void => {
    setSortType(type);
    searchParams.set("sort", type);
    setSearchParams(searchParams);
  };

  return (
    <ul className={styles.sortingPanel}>
      {sortTypeList.map(({ type, title }) => (
        <TicketSortsItem
          type={type}
          title={title}
          isActive={sortType === type}
          changeSortType={changeSortType}
          key={type}
        />
      ))}
    </ul>
  );
};

export default TicketSortsBlock;
