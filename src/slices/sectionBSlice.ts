import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface EmployeeBusiness {
  name: string;
  businessRegistrationNumber: string;
  oldBusinessRegistrationNumber: string | null;
  position: string;
  shareholder: string;
}

const initialState: EmployeeBusiness[] | null = [
  {
    name: "",
    businessRegistrationNumber: "",
    oldBusinessRegistrationNumber: null,
    position: "",
    shareholder: "",
  },
];

export const sectionBSlice = createSlice({
  name: "sectionB",
  initialState,
  reducers: {
    setSectionBData: (state, action: PayloadAction<EmployeeBusiness[]>) => ({
      ...state,
      ...action.payload,
    }),
    setSectionBDataInitial: () => initialState,
  },
});

export const { setSectionBData, setSectionBDataInitial } =
  sectionBSlice.actions;

export default sectionBSlice.reducer;
