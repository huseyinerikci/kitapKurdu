import { Link } from "react-router-dom";

const Card = ({ book }) => {
  return (
    <div className="card shadow p-2">
      <img src={book.image} className="rounded" alt="card-img" />
      <div className="card-body">
        <h4>{book.title}</h4>
        <h3>{book.author}</h3>
      </div>
      <Link to={`/detay/${book.id}`} className="btn btn-primary w-100">
        Detay Gör
      </Link>
    </div>
  );
};

export default Card;
