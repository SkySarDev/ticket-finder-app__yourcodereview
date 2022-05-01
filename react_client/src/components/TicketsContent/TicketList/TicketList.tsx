import React, { FC, ReactElement } from "react";

import { Ticket } from "@appTypes/tickets/ticketData.interfaces";
import { Company } from "@appTypes/companies/companyData.interfaces";
import { TicketItem, SkeletonTicketItem } from "@components/TicketsContent";
import styles from "./TicketList.module.scss";

interface Props {
  ticketList: Ticket[];
  companyList: Company[];
  loading: boolean;
}

const TicketList: FC<Props> = ({
  ticketList,
  companyList,
  loading,
}): ReactElement => {
  return (
    <div className={styles.list}>
      {loading &&
        Array.from({ length: 10 }, (_, i) => <SkeletonTicketItem key={i} />)}

      {!loading && (
        <>
          {ticketList.map((ticket) => {
            const company = companyList.find(
              ({ id }) => id === ticket.companyId
            );
            return (
              <TicketItem ticket={ticket} company={company} key={ticket.id} />
            );
          })}
        </>
      )}
    </div>
  );
};

export default TicketList;
