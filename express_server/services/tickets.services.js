import { readFileHelper } from "../helpers/app.helpers.js";
import { calcSegmentsDuration } from "../helpers/tickets.helpers.js";

const getTicketsData = () => {
  const tickets = readFileHelper("db/tickets.json");
  const segments = readFileHelper("db/segments.json");

  if (!tickets || !segments) {
    return null;
  }

  return { tickets, segments };
};

const filterTickets = (tickets, segments, company, stops) => {
  return tickets.filter((ticket) => {
    if (company && company !== ticket.companyId) {
      return false;
    }

    if (stops) {
      const ticketSegments = segments.filter(({ id }) =>
        ticket.segments.includes(id)
      );
      const stopsAmount = ticketSegments
        .map(({ stops }) => stops)
        .flat().length;

      if (!stops.includes(stopsAmount)) {
        return false;
      }
    }

    return true;
  });
};

const completeTickets = (tickets, segments) => {
  return tickets.map((ticket) => {
    ticket.segments = ticket.segments.map((segment) =>
      segments.find(({ id }) => id === segment)
    );

    return ticket;
  });
};

const sortTickets = (tickets, sortBy = "cheaper") => {
  if (sortBy === "cheaper") {
    tickets.sort((a, b) => a["price"] - b["price"]);
  }

  if (sortBy === "faster") {
    tickets.sort((a, b) => {
      const durationA = calcSegmentsDuration(a.segments);
      const durationB = calcSegmentsDuration(b.segments);
      return durationA - durationB;
    });
  }

  if (sortBy === "optimal") {
    tickets.sort((a, b) => {
      const durationA = calcSegmentsDuration(a.segments);
      const durationB = calcSegmentsDuration(b.segments);
      const ratioA = durationA / a.price;
      const ratioB = durationB / b.price;

      return ratioB - ratioA;
    });
  }

  return tickets;
};

const sliceTickets = (data, page, itemPerPage) => {
  const currentPage = page - 1 || 0;
  const start = currentPage * itemPerPage;

  return data.slice(start, start + itemPerPage);
};

export const getTickets = (query) => {
  const { company, stops, sort, page } = query;
  const stopsAmount = stops ? stops.split(",").map(Number) : null;
  const itemPerPage = 10;
  const data = getTicketsData();

  if (!data) {
    return null;
  }

  const { tickets, segments } = data;
  const filteredData = filterTickets(tickets, segments, company, stopsAmount);
  const ticketsData = completeTickets(filteredData, segments);
  const sortedData = sortTickets(ticketsData, sort);
  const slicedData = sliceTickets(sortedData, page, itemPerPage);
  const pages = Math.ceil(filteredData.length / itemPerPage);

  return {
    tickets: slicedData,
    pages,
  };
};
