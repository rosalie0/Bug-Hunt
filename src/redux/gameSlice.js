import { createSlice } from "@reduxjs/toolkit";

// set up initial state
const initialState = {
  points: 0,
};

export const gameSlice = createSlice({
  name: "points",
  initialState,
  reducers: {
    // Actions to affect our inital state pieces go here
    addPoints: (state) => {
      state.points++;
    },
    subtractPoint: (state) => {
      state.points--;
    },
    resetPoints: (state) => {
      state.points = 0;
    },
  },
});

// export each action
export const { addPoint, subtractPoint, resetPoints } = gameSlice.actions;

// export the reducer for the store to import
export default gameSlice.reducer;
