import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface MyType {
  NRICNumber: string;
  department: string;
  name: string;
  passportNumber: string;
  position: string;
  staffId: string;
}

const initialState: MyType = {
  NRICNumber: "",
  department: "",
  name: "",
  passportNumber: "",
  position: "",
  staffId: "",
};

export const sectionASlice = createSlice({
  name: "sectionA",
  initialState,
  reducers: {
    setSectionAData: (state, action: PayloadAction<MyType>) => ({
      ...state,
      ...action.payload,
    }),
  },
});

export const { setSectionAData } = sectionASlice.actions;

export default sectionASlice.reducer;
