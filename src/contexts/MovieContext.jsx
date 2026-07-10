import { createContext, useContext, useState, useEffect } from "react";

const MoviesContext = createContext();

function MoviesProvider({ children }) {

  const url = 'http://127.0.0.1:3000/api/v1/mobies';
  const [movies, setMovies] = useState();
  const [load, setLoad] = useState(true)

  function fetchData(url) {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setMovies(data)
        setLoad(false)
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    fetchData(url)
  }, [])

  return (
    <>
      <MoviesContext.Provider value={{ movies, setMovies, load }}>
        {children}
      </MoviesContext.Provider>
    </>
  )
}

function useMovies() {
  const context = useContext(MoviesContext);
  return context;
}

export { MoviesProvider, useMovies }