import { createSlice } from "@reduxjs/toolkit";

// set up initial state
const initialState = {
  playerWon: false,
  level: 1,
  points: 0,
  flyCounter: 0,
  butterflyCounter: 0,
  // An object where the keys are the level, and the value is how many points are needed to complete that level.
  // Level 1 needs 3 points to complete.
  // Level 2 needs 10 points to complete.
  pointsNeededPerLevel: {
    1: 3,
    2: 10,
  },
};

export const gameSlice = createSlice({
  name: "points",
  initialState,
  reducers: {
    // Updates state to advance to the next level.
    advanceToNextLevel: (state) => {
      state.level++; // Increment our level
      // Reset points & all counters
      state.points = 0;
      state.flyCounter = 0;
      state.butterflyCounter = 0;
    },
    // makes the playerWon bool true, sets level to 0 (so level1 doesn't render)
    winGame: (state) => {
      state.playerWon = true;
      state.level = 0;
    },
    // Used for when a player wants to 'play again' after winning
    // Basically, reset everything to initialState's values.
    resetGame: (state) => {
      state.playerWon = false;
      state.level = 1;
      state.points = 0;
      state.flyCounter = 0;
      state.butterflyCounter = 0;
    },

    // POINT REDUCERS:
    // Actions to affect our inital state pieces go here
    addPoints: (state, action) => {
      const pointsToAdd = action.payload;
      state.points += pointsToAdd;
    },
    subtractPoints: (state) => {
      state.points--;
    },

    // FLY COUNTER REDUCERS:
    // Increment the counter keeping track of this model's clicks
    addFlyCounter: (state) => {
      state.flyCounter++;
    },
    resetFlyCounter: (state) => {
      state.flyCounter = 0;
    },

    // BUTTERFLY COUNTER REDUCERS:
    // Increment the counter keeping track of this model's clicks
    addButterflyCounter: (state) => {
      state.butterflyCounter++;
    },
    resetButterflyCounter: (state) => {
      state.butterflyCounter = 0;
    },
  },
});

// export each action
export const {
  advanceToNextLevel,
  winGame,
  resetGame,
  addPoints,
  subtractPoints,
  addFlyCounter,
  resetFlyCounter,
  addButterflyCounter,
  resetButterflyCounter,
} = gameSlice.actions;

// export the reducer for the store to import
export default gameSlice.reducer;
