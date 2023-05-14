import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteMovie } from "./movie/MovieSlice";
import { Link } from "react-router-dom";

const MovieView = () => {
  const movies = useSelector((state) => state.moviesReducer.movies);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteMovie(id));
  };
  return (
    <div>
      <h2>Your Favourite Movie List</h2>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Director</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {movies &&
            movies.map((movie) => {
              const { id, title, director } = movie;
              return (
                <tr key={id}>
                  <td>{id}</td>
                  <td>{title}</td>
                  <td>{director}</td>
                  <td>
                    <Link to="/edit-movies" state={{ id, title, director }}>
                      <button>Edit</button>
                    </Link>
                    <button onClick={() => handleDelete(id)}>Delete</button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default MovieView;
