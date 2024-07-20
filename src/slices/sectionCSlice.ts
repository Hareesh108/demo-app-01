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

interface Business {
  name: string;
  businessRegistrationNumber: string;
  oldBusinessRegistrationNumber: string | null;
  position: string;
  shareholder: string;
}

interface Person {
  fullName: string;
  nationalId: string;
  oldNationalId: string | null;
  passportNumber: string | null;
  countryCode: string | null;
  businesses: Business[];
  relationship: string;
}

const initialState: Person[] | null = [
  {
    fullName: "",
    nationalId: "",
    oldNationalId: null,
    passportNumber: null,
    countryCode: null,
    businesses: [
      {
        name: "",
        businessRegistrationNumber: "",
        oldBusinessRegistrationNumber: null,
        position: "",
        shareholder: "",
      },
    ],
    relationship: "",
  },
];

export const sectionCSlice = createSlice({
  name: "sectionC",
  initialState,
  reducers: {
    setSectionCData: (state, action: PayloadAction<MyType>) => ({
      ...state,
      ...action.payload,
    }),
    setSectionCDataInitial: () => initialState,
  },
});

export const { setSectionCData, setSectionCDataInitial } =
  sectionCSlice.actions;

export default sectionCSlice.reducer;
