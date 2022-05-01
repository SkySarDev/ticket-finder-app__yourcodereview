import React, { FC, ReactElement } from "react";

import { Company } from "@appTypes/companies/companyData.interfaces";
import { Error, SidebarBlock } from "@shared/ui";
import SkeletonFilterItem from "./TicketCompaniesFilterItem/SkeletonFilterItem";
import TicketCompaniesFilterItem from "./TicketCompaniesFilterItem/TicketCompaniesFilterItem";

interface Props {
  companies: Company[];
  selectedCompany: string;
  onChangeFilter: (id: string) => void;
  loading: boolean;
  error: boolean;
}

const TicketCompaniesFilter: FC<Props> = ({
  companies,
  selectedCompany,
  onChangeFilter,
  loading,
  error,
}): ReactElement => {
  return (
    <SidebarBlock title={"Компания"}>
      {error && <Error message={"Ошибка получения данных"} />}

      {loading &&
        Array.from({ length: 3 }, (_, i) => <SkeletonFilterItem key={i} />)}

      {!error &&
        !loading &&
        companies.map((filterItem) => {
          return (
            <TicketCompaniesFilterItem
              filterItem={filterItem}
              selectedCompany={selectedCompany}
              onChangeFilter={onChangeFilter}
              key={filterItem.id}
            />
          );
        })}
    </SidebarBlock>
  );
};

export default TicketCompaniesFilter;
