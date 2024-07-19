import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface StepperChecklistSliceTypes {
  activeStep?: number;
  reviewing?: boolean;
}

const initialState: StepperChecklistSliceTypes = {
  activeStep: 1,
  reviewing: true,
};

export const StepperChecklistSlice = createSlice({
  name: "checklistStepper",
  initialState,
  reducers: {
    setOffset: (state, action: PayloadAction<StepperChecklistSliceTypes>) => {
      state.activeStep = action.payload.activeStep;
      state.reviewing = action.payload.reviewing;
    },
  },
});

export const { setOffset } = StepperChecklistSlice.actions;

export default StepperChecklistSlice.reducer;
