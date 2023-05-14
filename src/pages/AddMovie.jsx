import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMovie } from "./movie/MovieSlice";
import { useNavigate } from "react-router-dom";

const AddMovie = () => {
  const [title, setTitle] = useState("");
  const [director, setDirector] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const numberofMovie = useSelector(
    (state) => state.moviesReducer.movies.length
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    const movie = { id: numberofMovie + 1, title, director };
    dispatch(addMovie(movie));
    navigate("/show-movies", { replace: true });
  };

  return (
    <div>
      <h2>Add Your Favourite Movie</h2>

      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="title">Title : </label>
          <input
            type="text"
            name="title"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="form-field">
          <label htmlFor="director">Director : </label>
          <input
            type="text"
            name="director"
            value={director}
            onChange={(e) => setDirector(e.target.value)}
          />
        </div>

        <button className="btn" type="submit">
          Add Movie
        </button>
      </form>
    </div>
  );
};

export default AddMovie;
