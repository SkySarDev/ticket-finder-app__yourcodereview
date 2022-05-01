import React, { FC, ReactElement } from "react";

import {
  getDuration,
  getTime,
  routeStops,
} from "@helpers/utils/ticketItem.utils";
import { Segment } from "@appTypes/tickets/ticketData.interfaces";
import styles from "./TicketSegmentItem.module.scss";

interface Props {
  segment: Segment;
}

const TicketSegmentItem: FC<Props> = ({ segment }): ReactElement => {
  const { origin, destination, dateStart, dateEnd, duration, stops } = segment;

  return (
    <div className={styles.segment}>
      <div>
        <div className={styles.title}>
          {origin} – {destination}
        </div>
        <div className={styles.content}>
          {getTime(dateStart)} – {getTime(dateEnd)}
        </div>
      </div>
      <div>
        <div className={styles.title}>В пути</div>
        <div className={styles.content}>{getDuration(duration)}</div>
      </div>
      <div>
        <div className={styles.title}>{routeStops(stops.length)}</div>
        <div className={styles.content}>{stops.join(", ")}</div>
      </div>
    </div>
  );
};

export default TicketSegmentItem;
