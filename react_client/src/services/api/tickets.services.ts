import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { API_URL } from "@helpers/constants/api.constants";

interface FetchTicketsArguments {
  page: number;
  search?: string;
}

export const fetchTickets = createAsyncThunk(
  "tickets/fetchTickets",
  async (query: FetchTicketsArguments) => {
    try {
      const { page, search } = query;
      const searchParams = search ? search.slice(1, search.length) : "";

      const response = await axios.get(
        `${API_URL}/tickets?page=${page}&${searchParams}`
      );
      return response.data;
    } catch (err) {
      throw err;
    }
  }
);
