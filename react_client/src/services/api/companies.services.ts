import { createAsyncThunk } from "@reduxjs/toolkit";

import { api } from "@services/api/baseApi";

export const fetchCompanies = createAsyncThunk(
  "companies/fetchCompanies",
  async () => {
    try {
      const response = await api.get("/companies");
      return response.data;
    } catch (err) {
      throw err;
    }
  }
);
