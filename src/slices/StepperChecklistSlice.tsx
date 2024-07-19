import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface StepperChecklistSliceTypes {
  step?: number;
  activeStep?: number;
  reviewing?: boolean;
}

const initialState: StepperChecklistSliceTypes = {
  step: 0,
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
    setLeftBarProgress: (
      state,
      action: PayloadAction<StepperChecklistSliceTypes>
    ) => {
      state.step = action.payload.step;
    },
  },
});

export const { setOffset, setLeftBarProgress } = StepperChecklistSlice.actions;

export default StepperChecklistSlice.reducer;
