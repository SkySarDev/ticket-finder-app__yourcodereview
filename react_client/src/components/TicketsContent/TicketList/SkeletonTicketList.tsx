import React, { FC, ReactElement } from "react";

import { SkeletonTicketItem } from "@components/TicketsContent";

const SkeletonTicketList: FC = (): ReactElement => {
  return (
    <>
      {Array.from({ length: 10 }, (_, i) => (
        <SkeletonTicketItem key={i} />
      ))}
    </>
  );
};

export default SkeletonTicketList;
