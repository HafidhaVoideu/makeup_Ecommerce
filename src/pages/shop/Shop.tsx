import "./shop.css";
import Product from "../../components/product/Product";
import { SHOP_PRODUCTS } from "../../data/data";
import Sort from "../../components/sort/Sort";
import SortList from "../../components/sortList/SortList";
import Services from "../../components/services/Services";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProductByBrandTagRating,
  getBrand,
  getCategory,
  getError,
  getMaxPrice,
  getMinPrice,
  getProductType,
  getProducts,
  getRating,
  getStatus,
  getTag,
  resetProducts,
  setMaxPrice,
  setMinPrice,
} from "../../redux/features/shop/shopSlice";
import { useEffect, useState } from "react";
import { AppDispatch } from "../../redux/store";

import { AiFillCloseCircle } from "react-icons/ai";
import Pagination from "../../components/pagination/Pagination";
import Loading from "../../components/loading/Loading";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";

const Shop = () => {
  const dispatch = useDispatch<AppDispatch>();

  const status = useSelector(getStatus);
  const error = useSelector(getError);
  const products = useSelector(getProducts);

  const brand = useSelector(getBrand);
  const tag = useSelector(getTag);
  const rating = useSelector(getRating);

  const type = useSelector(getProductType);
  const category = useSelector(getCategory);
  const maxPrice = useSelector(getMaxPrice);
  const minPrice = useSelector(getMinPrice);

  const [isMenu, setIsMenu] = useState(false);
  const shopProducts = useSelector(getProducts);
  const [page, setPage] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  });
  useEffect(() => {
    if (brand || tag || rating || type || category || maxPrice || minPrice)
      dispatch(
        fetchProductByBrandTagRating({
          brand,
          tag,
          rating,
          type,
          category,
          minPrice,
          maxPrice,
        })
      );
    else dispatch(resetProducts());

    setPage(0);
  }, [brand, tag, rating, type, category, maxPrice, minPrice]);

  const handleMaxPrice = (value: string) => {
    dispatch(setMinPrice(value));
  };

  const handleMinPrice = (value: string) => {
    dispatch(setMaxPrice(value));
  };

  let content;
  const maxProducts = 9;

  if (status === "loading") content = <Loading />;
  else if (status === "failed") content = <p> {error} </p>;
  else if (status === "success") {
    content = (
      <div className="shop__products">
        {shopProducts
          ?.slice(page * maxProducts, page * maxProducts + maxProducts)
          .map(
            ({
              id,
              brand,
              category,
              description,
              image_link,
              price,
              count,
              api_featured_image,
            }) => (
              <Product
                api_featured_image={api_featured_image}
                id={id}
                category={category}
                key={id}
                brand={brand}
                description={description}
                image_link={image_link}
                price={price}
                count={count}
              />
            )
          )}
      </div>
    );
  }

  return (
    <section className=" section  shop">
      <section className={`shop__content `}>
        {/* shop__main */}
        <div className="shop__main">
          {/* filters*/}
          <div className="shop__filters-container">
            <Sort sortName="brands" option={brand} />
            <Sort sortName="tags" option={tag} />
            <Sort sortName="rating" option={rating || ""} />
          </div>

          {content}

          {/* ******************* pagination *********** */}

          <Pagination
            page={page}
            setPage={setPage}
            totalCount={products.length}
            pageSize={9}
          />
        </div>

        {/* shop sidebar */}

        <button
          onClick={() => setIsMenu(true)}
          className={`shop__sorting__menu-btn  btn--clear ${isMenu && "hide"}`}
        >
          <MdKeyboardDoubleArrowLeft />
        </button>
        <div className={`shop__sorting ${isMenu && "show__menu"}`}>
          <button
            className="btn--clear shop__close"
            onClick={() => setIsMenu(false)}
          >
            <AiFillCloseCircle />
          </button>

          {/* Price Range */}
          <div className="shop__sortbyprice">
            <span className="shop__sortbyprice__title"> Select price </span>

            <div className="shop__sortbyprice__container">
              <div className="shop__sortbyprice-min">
                <label htmlFor="min">min</label>
                <input
                  id="min"
                  type="number"
                  name="min-price"
                  onChange={(e) => handleMinPrice(e.target.value)}
                />
              </div>

              <div className="shop__divider" />
              <div className="shop__sortbyprice-max">
                <label htmlFor="max">max</label>
                <input
                  id="max"
                  type="number"
                  name="max-price"
                  onChange={(e) => handleMaxPrice(e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Sort by category */}

          <div className="shop__sortbycategory">
            {SHOP_PRODUCTS.map(({ id, listName, list }) => (
              <SortList key={id} list={list} listName={listName} />
            ))}
          </div>
        </div>
      </section>
      <Services />
    </section>
  );
};

export default Shop;
