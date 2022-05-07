import { useSearchParams } from "react-router-dom";

import { StopsFilterItem } from "@appTypes/tickets/ticketFilters.interfaces";
import { stopsFilterList } from "@helpers/constants/lists.constants";

export const useStopsFilter = () => {
  const [searchParams] = useSearchParams();

  return (stops?: string[]): StopsFilterItem[] => {
    if (stops) {
      if (!stops.length) return stopsFilterList;

      return stopsFilterList.map((item) => {
        item.checked = stops.includes(item.value);
        return item;
      });
    }

    const stopsQuery = searchParams.get("stops");

    if (!stopsQuery) return stopsFilterList;

    return stopsFilterList.map((item) => {
      item.checked = stopsQuery.split(",").includes(item.value);
      return item;
    });
  };
};
