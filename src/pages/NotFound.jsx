import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="text-center container mx-auto p-5 d-flex flex-column gap-4">
      <h1 className="text-warning">Sayfa Bulunamadı.. :(</h1>
      <img
        src="/notFound.gif"
        className="w-100 img-responsive rounded not-found"
        alt="notFound-img"
      />
      <p className="fs-1">
        <Link to="/">Ana Sayfa</Link>'ya gidiniz.
      </p>
    </div>
  );
};

export default NotFound;
