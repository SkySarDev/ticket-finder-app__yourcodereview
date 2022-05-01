import { useSearchParams } from "react-router-dom";

import { StopsFilterItem } from "@appTypes/tickets/ticketFilters.interfaces";

export const useStopsFilter = () => {
  const stopsFilterInit: StopsFilterItem[] = [
    { value: "all", title: "Все", checked: true },
    { value: "0", title: "Без пересадок", checked: false },
    { value: "1", title: "1 пересадка", checked: false },
    { value: "2", title: "2 пересадки", checked: false },
    { value: "3", title: "3 пересадки", checked: false },
  ];
  const [searchParams] = useSearchParams();

  return (stops?: string[]): StopsFilterItem[] => {
    if (stops) {
      if (!stops.length) return stopsFilterInit;

      return stopsFilterInit.map((item) => {
        item.checked = stops.includes(item.value);
        return item;
      });
    }

    const stopsQuery = searchParams.get("stops");

    if (!stopsQuery) return stopsFilterInit;

    return stopsFilterInit.map((item) => {
      item.checked = stopsQuery.split(",").includes(item.value);
      return item;
    });
  };
};
