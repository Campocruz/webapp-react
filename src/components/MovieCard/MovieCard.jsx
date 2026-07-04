import { Link } from "react-router";

export default function MovieCard({ movie }) {

  return (
    <>
      <div className="card">
        <div className="card-header">
          <Link>{movie.title}</Link>
        </div>
        <div className="card-body">
          <img src={`http://127.0.0.1:3000/static/images/${movie.image}`} alt={movie.image} className="card-img-top" />
          <hr />
          <section>
            <strong>Description:</strong>
            <p>{movie.abstract}</p>
          </section>
          <Link to={`/api/v1/mobies/${movie.id}`} className="btn btn-primary">Detail</Link>
        </div>
      </div >
    </>
  )
}