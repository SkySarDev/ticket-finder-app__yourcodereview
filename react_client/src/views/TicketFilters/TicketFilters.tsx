import React, { FC, ReactElement } from "react";

import { TicketStopsFilter } from "@components/TicketFilters";
import { TicketCompaniesFilterContainer } from "@containers/Tickets";
import styles from "./TicketFilters.module.scss";

const TicketFilters: FC = (): ReactElement => {
  return (
    <div className={styles.grid}>
      <TicketStopsFilter />
      <TicketCompaniesFilterContainer />
    </div>
  );
};

export default TicketFilters;
