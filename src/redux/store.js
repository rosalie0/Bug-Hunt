import { configureStore } from "@reduxjs/toolkit";

// import reducers from each slice
import gameReducer from "./gameSlice";

export const store = configureStore({
  reducer: {
    game: gameReducer,
  },
});
