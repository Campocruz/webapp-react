import { Link } from "react-router";

export default function MovieCard({ movie }) {

  return (
    <>
      <div className="card" style={{ height: 700 }}>
        <div className="card-header">
          <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
        </div>
        <div className="card-body">
          <img src={`http://127.0.0.1:3000/static/images/${movie.image}`} alt={movie.image} className="card-img-top" style={{ height: 400 }} />
          <hr />
          <section>
            <strong>Description:</strong>
            <p>{movie.abstract}</p>
          </section>
        </div>
        <div className="card-footer">
          <Link to={`/movies/${movie.id}`} className="btn btn-primary">Detail</Link>
        </div>
      </div >
    </>
  )
}