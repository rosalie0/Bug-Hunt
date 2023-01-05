import { createSlice } from "@reduxjs/toolkit";

// set up initial state
const initialState = {
  timeInSeconds: 0,
};

export const timerSlice = createSlice({
  name: "timer",
  initialState,
  reducers: {
    reset: (state) => {
      state.timeInSeconds = 0;
    },
    addOneSecond: (state) => {
      console.log("inside addonesecond");
      state.timeInSeconds += 1;
    },
  },
});

// export each action
export const { reset, addOneSecond } = timerSlice.actions;

// export the reducer for the store to import
export default timerSlice.reducer;
