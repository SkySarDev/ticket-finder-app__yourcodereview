import React, { FC, ReactElement } from "react";

import { Ticket } from "@appTypes/tickets/ticketData.interfaces";
import { Company } from "@appTypes/companies/companyData.interfaces";
import { BlockWrapper } from "@shared/ui";
import { TicketSegmentItem } from "@components/TicketsContent";
import styles from "./TicketItem.module.scss";

interface Props {
  ticket: Ticket;
  company?: Company;
}

const TicketItem: FC<Props> = ({ ticket, company }): ReactElement => {
  const { price, segments } = ticket;

  return (
    <BlockWrapper>
      <div className={styles.inner}>
        <div className={styles.header}>
          <h3 className={styles.price}>{`${price.toLocaleString("ru")} Р`}</h3>
          <img
            src={require(`@app/images/companies/${
              company?.logo || "no-logo.png"
            }`)}
            width={110}
            height={36}
            alt={`${company?.name || "Unknown"}`}
          />
        </div>

        {segments.map((segment) => (
          <TicketSegmentItem segment={segment} key={segment.id} />
        ))}
      </div>
    </BlockWrapper>
  );
};

export default TicketItem;
