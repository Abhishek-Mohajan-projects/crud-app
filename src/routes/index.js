import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./../pages/Home";
import Error from "./../pages/Error";
import AddMovie from "./../pages/AddMovie";
import MovieView from "./../pages/MovieView";
import Navbar from "../pages/features/Navbar";
import EditMovie from "../pages/EditMovie";

const Index = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        {" "}
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/show-movies" element={<MovieView />}></Route>
          <Route path="/add-movies" element={<AddMovie />}></Route>
          <Route path="/edit-movies" element={<EditMovie />}></Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default Index;
