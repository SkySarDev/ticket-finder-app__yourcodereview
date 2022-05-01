import React, { FC, ReactElement } from "react";

import { Ticket } from "@appTypes/tickets/ticketData.interfaces";
import { Company } from "@appTypes/companies/companyData.interfaces";
import { TicketItem, TicketListMessage } from "@components/TicketsContent";
import styles from "./TicketList.module.scss";

interface Props {
  ticketList: Ticket[];
  companyList: Company[];
}

const TicketList: FC<Props> = ({ ticketList, companyList }): ReactElement => {
  return (
    <>
      {ticketList.length ? (
        <div className={styles.list}>
          {ticketList.map((ticket) => {
            const company = companyList.find(
              ({ id }) => id === ticket.companyId
            );
            return (
              <TicketItem ticket={ticket} company={company} key={ticket.id} />
            );
          })}
        </div>
      ) : (
        <TicketListMessage message={"Билеты не найдены"} />
      )}
    </>
  );
};

export default TicketList;
