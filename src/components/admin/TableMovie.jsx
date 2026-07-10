import { Link } from "react-router"

export default function Table() {

  return (
    <>
      <div className="container">

        <div className="d-flex justify-content-between align-items-center mb-2">
          <h2 className="fs-5">Movie List</h2>
          <Link className="btn btn-sm btn-primary mb-2" to="/admin/books/create">Add New Book</Link>
        </div>
        <p className="text-muted">List of all movie in the database.</p>

        <div className="table-responsive">
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Title</th>
                <th scope="col">Author</th>
                <th scope="col">Genre</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>


              {/* {movies.map((movie, index) => (
                <tr key={movie.id}>
                  <th scope="row">{index + 1}</th>
                  <td>{movie.title}</td>
                  <td>{movie.author}</td>
                  <td>{movie.genre}</td>
                  <td>
                    <button className="btn btn-sm btn-primary me-2">
                      <i className="bi bi-eye"></i>
                    </button>
                    <button className="btn btn-sm btn-primary me-2">
                      <i className="bi bi-pencil"></i>
                    </button>
                    <button className="btn btn-sm btn-danger">
                      <i className="bi bi-trash"></i>
                    </button>
                  </td>
                </tr>
              ))} */}

            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}