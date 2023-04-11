import React from "react";
import { NavLink } from "react-router-dom";
import { useGlobal } from "./Context";

const Movies = () => {
  const { ismovie } = useGlobal();
  return (
    <>
      {console.log(ismovie)}
      <h1>my movies</h1>
      <section className="movie-page">
        <div className="grid grid-4-col">
          {ismovie.map(curmovie => {
            return (
              <NavLink to={`movie/${curmovie.imdbID}`}>
                <div className="card">
                  <div className="card-info">
                    <h2>{curmovie.Title}</h2>
                    <img src={curmovie.Poster} alt="imdb" />
                  </div>
                </div>
              </NavLink>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Movies;
