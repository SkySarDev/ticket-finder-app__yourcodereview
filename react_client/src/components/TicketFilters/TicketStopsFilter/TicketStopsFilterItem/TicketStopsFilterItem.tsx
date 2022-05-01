import React, { FC, ReactElement } from "react";

import { StopsFilterItem } from "@appTypes/tickets/ticketFilters.interfaces";
import styles from "./TicketStopsFilterItem.module.scss";

interface Props {
  onFilterChange: (filterValue: string) => void;
  filterItem: StopsFilterItem;
}

const TicketStopsFilterItem: FC<Props> = ({
  filterItem,
  onFilterChange,
}): ReactElement => {
  const onChangeFilter = (): void => {
    onFilterChange(filterItem.value);
  };

  return (
    <div className={styles.stopsItem}>
      <input
        type="checkbox"
        id={`stops-filter-checkbox-${filterItem.value}`}
        checked={filterItem.checked}
        onChange={onChangeFilter}
      />
      <label htmlFor={`stops-filter-checkbox-${filterItem.value}`}>
        {filterItem.title}
      </label>
    </div>
  );
};

export default TicketStopsFilterItem;
