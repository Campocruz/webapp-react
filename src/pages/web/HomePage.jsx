// Import from react
import { useEffect, useState } from "react";

// Import context from provider
import { MoviesProvider, useMovies } from "../../contexts/MovieContext";

// Import components
import MovieCard from "../../components/web/MovieCard/MovieCard";

export default function HomePage() {

  const { movies } = useMovies();

  return (
    <>
      <MoviesProvider>
        <div className="container">
          <section>
            <div className="p-5 mb-4 bg-light rounded-3">
              <div className="container-fluid py-5">
                <h1 className="display-5 fw-bold">Movie List</h1>
                <p className="col-md-8 fs-4">
                  This section is only to view a movie list
                </p>
              </div>
            </div>
          </section>

          <section>
            <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-2">
              {movies?.map(movie =>
                <div className="col" key={movie?.id}>
                  <MovieCard movie={movie} />
                </div>
              )}
            </div>
          </section>
        </div>
      </MoviesProvider>
    </>
  )
}