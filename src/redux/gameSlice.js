import { createSlice } from "@reduxjs/toolkit";

// set up initial state
const initialState = {
  points: 0,
  flyCounter: 0,
  butterflyCounter: 0,
  selectedLocation: "",
  level: 1,
};

export const gameSlice = createSlice({
  name: "points",
  initialState,
  reducers: {
    // Actions to affect our inital state pieces go here
    addPoints: (state, action) => {
      const pointsToAdd = action.payload;
      state.points += pointsToAdd;
    },
    subtractPoints: (state) => {
      state.points--;
    },
    resetPoints: (state) => {
      state.points = 0;
    },

    // Increment the counter keeping track of this model's clicks
    addFlyCounter: (state) => {
      state.flyCounter++;
    },

    // Increment the counter keeping track of this model's clicks
    addButterflyCounter: (state) => {
      state.butterflyCounter++;
    },
  },
});

// export each action
export const {
  addPoints,
  subtractPoints,
  resetPoints,
  addFlyCounter,
  addButterflyCounter,
} = gameSlice.actions;

// export the reducer for the store to import
export default gameSlice.reducer;
