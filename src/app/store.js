import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "../pages/movie/MovieSlice";

const store = configureStore({
  reducer: {
    moviesReducer: moviesReducer,
  },
});

export default store;
