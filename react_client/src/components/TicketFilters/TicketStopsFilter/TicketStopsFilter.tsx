import React, { FC, ReactElement, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { StopsFilterItem } from "@appTypes/tickets/ticketFilters.interfaces";
import { useStopsFilter } from "@hooks/tickets/useStopsFilter";
import { SidebarBlock } from "@shared/ui";
import TicketStopsFilterItem from "./TicketStopsFilterItem/TicketStopsFilterItem";

const TicketStopsFilter: FC = (): ReactElement => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [stopsFilterList, setStopsFilterList] = useState<
    StopsFilterItem[] | []
  >([]);
  const getStopsFilter = useStopsFilter();

  useEffect(() => {
    setStopsFilterList(getStopsFilter());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const onFilterChange = (filter: string) => {
    const allFilters = "all";

    if (filter === allFilters) {
      searchParams.delete("stops");
      setStopsFilterList(getStopsFilter([]));
    } else {
      const stopsAmount: string[] = [];

      stopsFilterList.forEach(({ value, checked }) => {
        if (value === allFilters) checked = false;
        if (filter === value) checked = !checked;
        if (checked) stopsAmount.push(value);
      });

      if (!stopsAmount.length) {
        searchParams.delete("stops");
      } else {
        searchParams.set("stops", stopsAmount.join(","));
      }

      setStopsFilterList(getStopsFilter(stopsAmount));
    }

    setSearchParams(searchParams);
  };

  return (
    <SidebarBlock title={"Количество пересадок"}>
      {stopsFilterList.map((filterItem) => (
        <TicketStopsFilterItem
          onFilterChange={onFilterChange}
          filterItem={filterItem}
          key={filterItem.value}
        />
      ))}
    </SidebarBlock>
  );
};

export default TicketStopsFilter;
