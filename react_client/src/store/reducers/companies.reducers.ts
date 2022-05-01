import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "@store/rootStore";
import { Company } from "@appTypes/companies/companyData.interfaces";
import { fetchCompanies } from "@services/api/companies.services";

export interface CompaniesState {
  companies: Company[];
  loading: boolean;
  error: boolean;
}

const initialState: CompaniesState = {
  companies: [],
  loading: false,
  error: false,
};

const defaultCompanyItem = [
  {
    id: "all",
    name: "Все",
    logo: "no-image.png",
  },
];

export const companiesReducer = createSlice({
  name: "companies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCompanies.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        fetchCompanies.fulfilled,
        (state, action: PayloadAction<Company[]>) => {
          state.loading = false;
          state.error = false;
          state.companies = [...defaultCompanyItem, ...action.payload];
        }
      )
      .addCase(fetchCompanies.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export const selectCompanies = (state: RootState) => state.companies;

export default companiesReducer.reducer;
