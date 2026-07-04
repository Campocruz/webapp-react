import { useEffect, useState } from "react";
import { useParams } from "react-router"
import ReviewCard from "../components/ReviewCard/ReviewCard";

export default function MovieDetail() {
  const { id } = useParams();
  const url = `http://127.0.0.1:3000/api/v1/mobies/${id}`;
  const [movie, setMovie] = useState({});

  function fetchData(url) {
    fetch(url)
      .then(response => response.json())
      .then(data => setMovie(data))
      .catch(err => console.log(err))
  }

  useEffect(() => {
    fetchData(url);
  }, [])

  return (
    <>
      <div className="container">
        <section>
          <div className="p-5 mb-4 bg-light rounded-3">
            <div className="container-fluid py-5">
              <div className="row">
                <div className="col">
                  <img src={`http://127.0.0.1:3000/static/images/${movie.image}`} alt="" style={{ height: 400 }} />
                </div>
                <div className="col">
                  <h2 className="text-center">{movie.title}</h2>
                  <hr />
                  <ul>
                    <li>Genre: {movie.genre}</li>
                    <li>Year: {movie.release_year}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="row">
            {
              movie?.reviews?.map(review => (
                <div className="col-12 g-2" key={review.id}>
                  <ReviewCard review={review} />
                </div>
              ))
            }
          </div>
        </section>
      </div>
    </>
  )
}