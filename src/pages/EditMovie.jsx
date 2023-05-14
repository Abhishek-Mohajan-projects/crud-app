import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { updateMovie } from "./movie/MovieSlice";

const EditMovie = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [id, setId] = useState(location.state.id);
  const [title, setTitle] = useState(location.state.title);
  const [director, setDirector] = useState(location.state.director);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateMovie({ id, title, director }));
    navigate("/show-movies", { replace: true });
  };
  return (
    <div>
      <h2>Edit Your Movie</h2>

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

export default EditMovie;
