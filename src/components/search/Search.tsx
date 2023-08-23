import { useEffect, useState } from "react";
import "./search.css";
import { GoSearch } from "react-icons/go";
import axios from "../../axios/axios";
import Loading from "../loading/Loading";
import SearchItem from "./SearchItem";
import { ProductType } from "../../redux/features/shop/shopSlice";
const Search = () => {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState<ProductType[]>([]);

  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");
  const handleSearch = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (search) {
      fetchProduct();
      if (!searchResults.length) fetchBrand();
    }
  };

  async function fetchBrand() {
    setStatus("pending");
    try {
      const response = await axios.get(`?brand=${search}`);
      setSearchResults(response.data);
      setTimeout(() => {
        setStatus("success");
      }, 2000);

      return response;
    } catch (error) {
      setStatus("failed");
      setError(error as string);
    }
  }

  async function fetchProduct() {
    setStatus("pending");

    try {
      const response = await axios.get(`?product_type=${search}`);
      setSearchResults(response.data);

      setTimeout(() => {
        setStatus("success");
      }, 2000);

      return response;
    } catch (error) {
      setStatus("failed");
      setError(error as string);
    }
  }

  useEffect(() => {
    if (!search) {
      setStatus("idle");
      setSearchResults([]);
    }
  }, [search]);

  let content;

  if (status === "success")
    if (!searchResults.length)
      content = <p className="unfound">No Items Found</p>;
    else
      content = (
        <ul className="search__list">
          {searchResults?.map((product) => (
            <li key={product.id}>
              <SearchItem {...product} />
            </li>
          ))}
        </ul>
      );
  else if (status === "pending") content = <Loading />;
  else content = <p>{error}</p>;

  return (
    <div className="search__container">
      {/* search Input */}

      <form className="search__form" onSubmit={handleSearch}>
        <input
          className="search__input"
          type="text"
          name="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="search for a produt or a brand..."
        />

        <button
          type="submit"
          className={`${search && "black-bg"} search__btn  btn--clear   `}
        >
          <GoSearch />
        </button>
      </form>

      <div className="search__results">
        <h1 className="search__title"> products</h1>

        {content}
      </div>

      {/* search Results */}
    </div>
  );
};

export default Search;
