import { useEffect, useState } from "react";
import "./search.css";
import { GoSearch } from "react-icons/go";
import { AiFillCloseCircle } from "react-icons/ai";
import axios from "../../axios/axios";

import SearchItem from "./SearchItem";
import { ProductType } from "../../redux/features/shop/shopSlice";
const Search = () => {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState<ProductType[]>([]);

  const handleSearch = (e: React.SyntheticEvent) => {
    e.preventDefault();
  };

  async function fetchBrand() {
    try {
      const response = await axios.get(`?brand=${search}`);
      setSearchResults(response.data);
      return response;
    } catch (error) {}
  }

  async function fetchProduct() {
    try {
      const response = await axios.get(`?product_type=${search}`);
      setSearchResults(response.data);
      return response;
    } catch (error) {}
  }
  useEffect(() => {
    if (search) {
      fetchProduct();
      if (!searchResults.length) fetchBrand();
    }
  }, [search]);

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

        {search && (
          <button
            onClick={() => setSearch("")}
            className="search__btn-close  btn--clear"
          >
            <AiFillCloseCircle />
          </button>
        )}

        <button
          type="submit"
          className={`${search && "black-bg"} search__btn  btn--clear   `}
        >
          <GoSearch />
        </button>
      </form>

      {/* search Results */}

      {searchResults.length !== 0 && (
        <div className="search__results">
          <h1 className="search__title"> products</h1>
          <ul className="search__list">
            {searchResults?.map((product) => (
              <li key={product.id}>
                <SearchItem {...product} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Search;
