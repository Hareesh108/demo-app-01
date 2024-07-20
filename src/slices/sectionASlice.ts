import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface MyType {
  NRICNumber: string;
  department: string;
  name: string;
  passportNumber: string;
  position: string;
  staffId: string;
  executiveOfficer: string;
}

const initialState: MyType = {
  NRICNumber: "",
  department: "",
  name: "",
  passportNumber: "",
  position: "",
  staffId: "",
  executiveOfficer: "",
};

export const sectionASlice = createSlice({
  name: "sectionA",
  initialState,
  reducers: {
    setSectionAData: (state, action: PayloadAction<MyType>) => ({
      ...state,
      ...action.payload,
    }),
    setSectionADataInitial: () => initialState,
  },
});

export const { setSectionAData, setSectionADataInitial } =
  sectionASlice.actions;

export default sectionASlice.reducer;
