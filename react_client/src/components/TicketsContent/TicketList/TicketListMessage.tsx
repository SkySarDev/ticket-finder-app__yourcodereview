import React, { FC, ReactElement } from "react";

import { BlockWrapper } from "@shared/ui";
import styles from "./TicketList.module.scss";

interface Props {
  message: string;
  type?: "text" | "error";
}

const TicketListMessage: FC<Props> = ({
  message,
  type = "text",
}): ReactElement => {
  return (
    <BlockWrapper>
      <div className={styles.listMessage}>
        <p className={styles[type]}>{message}</p>
      </div>
    </BlockWrapper>
  );
};

export default TicketListMessage;
