import { useSearchParams } from "react-router-dom";

const Filter = () => {
  //url'deki parametrelere erişme ve paramtreleri yönetme
  const [searchParam, setSearchParam] = useSearchParams();
  //Aratma fonksiyonu
  const handleSubmit = (e) => {
    e.preventDefault();
    const text = e.target[0].value;
    //url ye paramtreyi ve değeri settle
    searchParam.set("search", text);
    setSearchParam(searchParam);
  };
  //Sıralama fonksiyonu
  const handleChange = (e) => {
    // select  alanındaki değere eriş
    const text = e.target.value;
    searchParam.set("sort", text);
    setSearchParam(searchParam);
  };
  return (
    <div className="d-flex justify-content-between align-items-center my-4 gap-3">
      <div>
        <select onChange={handleChange} className="form-select">
          <option value="">sırala</option>
          <option value="a-z">a-z</option>
          <option value="z-a">z-a</option>
        </select>
      </div>
      <form onSubmit={handleSubmit} className="d-flex gap-2">
        <input
          type="text"
          className="form-control"
          placeholder="Kitap ismi giriniz..."
        />
        <button type="submit" className="btn btn-primary">
          Ara
        </button>
      </form>
    </div>
  );
};

export default Filter;
