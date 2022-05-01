import React, { FC, ReactElement } from "react";

import { TicketSortsBlock } from "@components/TicketSorts";
import {
  TicketListContainer,
  TicketsPaginationContainer,
} from "@containers/Tickets";
import styles from "./TicketsContent.module.scss";

const TicketsContent: FC = (): ReactElement => {
  return (
    <div className={styles.grid}>
      <TicketSortsBlock />
      <TicketListContainer />
      <TicketsPaginationContainer />
    </div>
  );
};

export default TicketsContent;
