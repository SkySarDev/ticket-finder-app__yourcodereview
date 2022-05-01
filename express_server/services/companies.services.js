import { readFileHelper } from "../helpers/app.helpers.js";

export const getCompanies = () => {
  return readFileHelper("db/companies.json");
};
