import express from "express";
import cors from "cors";

import { errorsMiddleware } from "./middlewares/errors.middlewares.js";
import ticketFinderAppRouters from "./routers/ticketFinderApp.routers.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
app.use("/api/ticket-finder-app", ticketFinderAppRouters);
app.use(errorsMiddleware);

app.get("*", (req, res) => {
  res.sendStatus(404);
});

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at ${PORT} port`);
});
