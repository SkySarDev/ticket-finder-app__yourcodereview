import React, { FC, ReactElement, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "@hooks/redux";
import {
  selectTickets,
  switchTicketListPage,
} from "@store/reducers/tickets.reducers";
import { selectCompanies } from "@store/reducers/companies.reducers";
import { fetchTickets } from "@services/api/tickets.services";
import {
  SkeletonTicketList,
  TicketList,
  TicketListMessage,
} from "@components/TicketsContent";

const TicketListContainer: FC = (): ReactElement => {
  const dispatch = useAppDispatch();
  const { search } = useLocation();
  const { tickets, loading, error } = useAppSelector(selectTickets);
  const { companies, loading: companiesLoading } =
    useAppSelector(selectCompanies);

  useEffect(() => {
    const page = 1;
    dispatch(switchTicketListPage(page));
    dispatch(fetchTickets({ page, search }));
  }, [dispatch, search]);

  return (
    <>
      {error ? (
        <TicketListMessage message={"Ошибка получения данных"} type={"error"} />
      ) : loading || companiesLoading ? (
        <SkeletonTicketList />
      ) : (
        <TicketList ticketList={tickets} companyList={companies} />
      )}
    </>
  );
};

export default TicketListContainer;
