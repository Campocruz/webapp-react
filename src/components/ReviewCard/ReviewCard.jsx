export default function ReviewCard({ review }) {

  return (
    <>
      <div className="card">
        <div className="card-header d-flex justify-content-between">
          <div>
            <i className="bi bi-person-circle"> </i>
            <strong>Users: </strong>
            {review.name}
          </div>
          <div>
            {review.vote}
          </div>
        </div>
        <div className="card-body">
          <figure>
            <blockquote className="blockquote">
              <p>{review.text}</p>
            </blockquote>
            <figcaption className="blockquote-footer">Update: {review.updated_at}</figcaption>
            <figcaption className="blockquote-footer">Create: {review.created_at}</figcaption>
          </figure>
        </div>
      </div>
    </>
  )
}