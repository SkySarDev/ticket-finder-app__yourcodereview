import { useSearchParams } from "react-router-dom";

import { StopsFilterItem } from "@appTypes/tickets/ticketFilters.interfaces";
import { stopsFilterList } from "@helpers/constants/lists.constants";

const getInitFilter = () =>
  stopsFilterList.map((item) => ({ ...item, checked: true }));

export const useStopsFilter = () => {
  const [searchParams] = useSearchParams();

  return (stops?: string[]): StopsFilterItem[] => {
    if (stops) {
      if (!stops.length) return getInitFilter();

      return stopsFilterList.map((item) => ({
        ...item,
        checked: stops.includes(item.value),
      }));
    }

    const stopsQuery = searchParams.get("stops");

    if (!stopsQuery) return getInitFilter();

    return stopsFilterList.map((item) => ({
      ...item,
      checked: stopsQuery.split(",").includes(item.value),
    }));
  };
};
