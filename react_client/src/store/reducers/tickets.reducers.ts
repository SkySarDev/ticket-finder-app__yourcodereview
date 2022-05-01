import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "@store/rootStore";
import {
  Ticket,
  TicketApiResponse,
} from "@appTypes/tickets/ticketData.interfaces";
import { fetchTickets } from "@services/api/tickets.services";

export interface TicketsState {
  tickets: Ticket[];
  pages: number;
  currentPage: number;
  loading: boolean;
  error: boolean;
}

const initialState: TicketsState = {
  tickets: [],
  pages: 0,
  currentPage: 1,
  loading: false,
  error: false,
};

export const ticketsReducer = createSlice({
  name: "tickets",
  initialState,
  reducers: {
    switchTicketListPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTickets.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        fetchTickets.fulfilled,
        (state, action: PayloadAction<TicketApiResponse>) => {
          const { tickets, pages } = action.payload;
          state.loading = false;
          state.error = false;
          state.tickets = tickets;
          state.pages = pages;
        }
      )
      .addCase(fetchTickets.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export const selectTickets = (state: RootState) => state.tickets;
export const { switchTicketListPage } = ticketsReducer.actions;

export default ticketsReducer.reducer;
