import { createSlice } from "@reduxjs/toolkit";

const initialMovies = {
  movies: [
    { id: 1, title: "Avengers", director: "Joss Whedon" },
    { id: 2, title: "Justice League", director: "Zack Snyder" },
  ],
};

export const movieSlice = createSlice({
  name: "movie",
  initialState: initialMovies,
  reducers: {
    showMovie: (state) => state,
    addMovie: (state, action) => {
      state.movies.push(action.payload);
    },
    deleteMovie: (state, action) => {
      const id = action.payload;
      state.movies = state.movies.filter((movie) => movie.id !== id);
    },
    updateMovie: (state, action) => {
      const { id, title, director } = action.payload;
      const isMovieExist = state.movies.filter((movie) => movie.id === id);
      if (isMovieExist) {
        isMovieExist[0].title = title;
        isMovieExist[0].director = director;
      }
    },
  },
});

export const { showMovie, addMovie, deleteMovie, updateMovie } =
  movieSlice.actions;

export default movieSlice.reducer;
