import { getTickets } from "../services/tickets.services.js";

export const getTicketsController = (req, res, next) => {
  const tickets = getTickets(req.query);

  if (!tickets) return next();

  res.send(tickets);
};
