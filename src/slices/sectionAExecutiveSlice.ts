import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface MyType {
  authorityLim: string;
  creditMan: string;
  headOM: string;
  isCommMember: string;
  whichComm: string;
}

const initialState: MyType = {
  authorityLim: "",
  creditMan: "",
  headOM: "",
  isCommMember: "",
  whichComm: "",
};

export const sectionAExecutiveSlice = createSlice({
  name: "sectionA",
  initialState,
  reducers: {
    setSectionAExecutiveData: (state, action: PayloadAction<MyType>) => ({
      ...state,
      ...action.payload,
    }),
  },
});

export const { setSectionAExecutiveData } = sectionAExecutiveSlice.actions;

export default sectionAExecutiveSlice.reducer;
