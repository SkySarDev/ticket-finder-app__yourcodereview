import React, { FC, ReactElement } from "react";

import { CompanyFilterItem } from "@appTypes/tickets/ticketFilters.interfaces";
import styles from "./TicketCompaniesFilterItem.module.scss";

interface Props {
  filterItem: CompanyFilterItem;
  selectedCompany: string;
  onChangeFilter: (id: string) => void;
}

const TicketCompaniesFilterItem: FC<Props> = ({
  filterItem,
  selectedCompany,
  onChangeFilter,
}): ReactElement => {
  const { id, name } = filterItem;

  const onChangeHandler = () => {
    onChangeFilter(id);
  };

  return (
    <div className={styles.companyItem}>
      <input
        type="radio"
        id={`company-filter-radio-${id}`}
        checked={id === selectedCompany}
        onChange={onChangeHandler}
      />
      <label htmlFor={`company-filter-radio-${id}`}>{name}</label>
    </div>
  );
};

export default TicketCompaniesFilterItem;
