import { useEffect, useState } from "react";
import { useParams } from "react-router"
import ReviewCard from "../../components/web/ReviewCard/ReviewCard";

export default function MovieDetail() {

  const initialObj = {
    name: '',
    vote: '',
    text: ''
  }

  const { id } = useParams();
  const url = `http://127.0.0.1:3000/api/v1/mobies/${id}`;
  const [movie, setMovie] = useState({});
  const [inputForm, setInputForm] = useState(initialObj)

  function fetchData(url) {
    fetch(url)
      .then(response => response.json())
      .then(data => setMovie(data))
      .catch(err => console.log(err))
  }

  function handleSubmit(e) {
    e.preventDefault()
    console.log(inputForm);
    fetch(url + '/reviews', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(inputForm)
    })
      .then(response => response.json())
      .then(data => setInputForm(initialObj))
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
          <div className="accordion" id="accordion">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                  Add Your Comment
                </button>
              </h2>
              <div id="collapseOne" className="accordion-collapse collapse " data-bs-parent="#accordion">
                <div className="accordion-body">
                  <form className="row g-3" onSubmit={handleSubmit}>
                    <div className="col-md-6">
                      <label htmlFor="name" className="form-label">Username</label>
                      <input type="text" className="form-control" id="name" name="name" value={inputForm.name} onChange={(e) => setInputForm({ ...inputForm, name: e.target.value })} />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="inputState" className="form-label">Rating</label>
                      <select id="inputState" defaultValue={null} className="form-select" onChange={(e) => setInputForm({ ...inputForm, vote: parseInt(e.target.value) })}>
                        <option value={null}>...</option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                      </select>
                    </div>
                    <textarea className="form-control" value={inputForm.text} onChange={(e) => setInputForm({ ...inputForm, text: e.target.value })}></textarea>
                    <div className="col-12">
                      <button type="submit" className="btn btn-primary">ADD</button>
                    </div>
                  </form>
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