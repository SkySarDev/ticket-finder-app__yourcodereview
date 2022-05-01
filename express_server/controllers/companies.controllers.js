import { getCompanies } from "../services/companies.services.js";

export const getCompaniesController = (req, res, next) => {
  const companies = getCompanies();

  if (!companies) return next();

  res.send(companies);
};
