import axios from "axios";

import { API_URL } from "@helpers/constants/api.constants";

export const api = axios.create({
  baseURL: API_URL,
});
