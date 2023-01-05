import { configureStore } from "@reduxjs/toolkit";

// import reducers from each slice
import gameReducer from "./gameSlice";
import timeReducer from "./timerSlice";

export const store = configureStore({
  reducer: {
    game: gameReducer,
    timer: timeReducer,
  },
});
