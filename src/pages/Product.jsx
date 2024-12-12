import { useEffect, useState } from "react";
import Filter from "../components/Filter";
import axios from "axios";
import Card from "../components/Card";
import { useNavigate, useSearchParams } from "react-router-dom";

const Product = () => {
  const navigate = useNavigate();

  //kitap verileri yönetme
  const [books, setBooks] = useState([]);

  //url deki parametre eriş ve api istek at
  const [searchParam] = useSearchParams();
  useEffect(() => {
    const params = {
      q: searchParam.get("search"),
      _sort: "title",
      _order: searchParam.get("sort") === "z-a" ? "desc" : "asc",
    };

    axios
      .get("http://localhost:5151/books", { params })
      .then((res) => setBooks(res.data))
      .catch((err) => navigate("/notfound"));
  }, [searchParam]);
  return (
    <div className="container my-5">
      {books.length === 0 ? (
        <h3 className="bg-danger p-3 rounded fs-2 text-center">
          Aratılan Kitap Bulunamadı !!
        </h3>
      ) : (
        <h3>{books.length} kitap bulundu</h3>
      )}
      <Filter />
      <div className="cards-container my-4">
        {books.map((book) => (
          <Card key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Product;
