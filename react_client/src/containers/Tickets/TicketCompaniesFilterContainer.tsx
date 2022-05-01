import React, { FC, ReactElement, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "@hooks/redux";
import { selectCompanies } from "@store/reducers/companies.reducers";
import { fetchCompanies } from "@services/api/companies.services";
import { TicketCompaniesFilter } from "@components/TicketFilters";

const TicketCompaniesFilterContainer: FC = (): ReactElement => {
  const dispatch = useAppDispatch();
  const { companies, loading, error } = useAppSelector(selectCompanies);
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCompany, setSelectedCompany] = useState("all");

  useEffect(() => {
    const companyId = searchParams.get("company");
    setSelectedCompany(companyId || "all");
    dispatch(fetchCompanies());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const onChangeFilter = (id: string): void => {
    if (id === "all") {
      searchParams.delete("company");
    } else {
      searchParams.set("company", id);
    }
    setSelectedCompany(id);
    setSearchParams(searchParams);
  };

  return (
    <TicketCompaniesFilter
      companies={companies}
      selectedCompany={selectedCompany}
      onChangeFilter={onChangeFilter}
      loading={loading}
      error={error}
    />
  );
};

export default TicketCompaniesFilterContainer;
