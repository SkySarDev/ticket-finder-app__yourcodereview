import React, { FC, ReactElement } from "react";
import { useLocation } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "@hooks/redux";
import {
  selectTickets,
  switchTicketListPage,
} from "@store/reducers/tickets.reducers";
import { fetchTickets } from "@services/api/tickets.services";
import { TicketsPagination } from "@components/TicketsContent";

const TicketsPaginationContainer: FC = (): ReactElement => {
  const dispatch = useAppDispatch();
  const { pages, currentPage } = useAppSelector(selectTickets);
  const { search } = useLocation();

  const switchPage = (page: number): void => {
    dispatch(switchTicketListPage(page));
    dispatch(fetchTickets({ page, search }));
  };

  return (
    <>
      {pages > 1 && (
        <TicketsPagination
          pages={pages}
          currentPage={currentPage}
          switchPage={switchPage}
        />
      )}
    </>
  );
};

export default TicketsPaginationContainer;
