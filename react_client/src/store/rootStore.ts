import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

import ticketsReducer from "@store/reducers/tickets.reducers";
import companiesReducer from "@store/reducers/companies.reducers";

export const rootStore = configureStore({
  reducer: {
    tickets: ticketsReducer,
    companies: companiesReducer,
  },
});

export type AppDispatch = typeof rootStore.dispatch;
export type RootState = ReturnType<typeof rootStore.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
