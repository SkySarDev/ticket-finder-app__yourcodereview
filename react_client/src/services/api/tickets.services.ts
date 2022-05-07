import { createAsyncThunk } from "@reduxjs/toolkit";

import { api } from "@services/api/baseApi";

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

      const response = await api.get(`/tickets?page=${page}&${searchParams}`);
      return response.data;
    } catch (err) {
      throw err;
    }
  }
);
