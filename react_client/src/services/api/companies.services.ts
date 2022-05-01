import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { API_URL } from "@helpers/constants/api.constants";

export const fetchCompanies = createAsyncThunk(
  "companies/fetchCompanies",
  async () => {
    try {
      const response = await axios.get(`${API_URL}/companies`);
      return response.data;
    } catch (err) {
      throw err;
    }
  }
);
