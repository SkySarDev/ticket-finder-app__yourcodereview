import { Router } from "express";

import { getTicketsController } from "../controllers/tickets.controllers.js";
import { getCompaniesController } from "../controllers/companies.controllers.js";

const router = Router();

router
  .get("/tickets", getTicketsController)
  .get("/companies", getCompaniesController);

export default router;
