import { useEffect, useState } from "react";
import Product from "../../components/product/Product";
import Services from "../../components/services/Services";
import "./itemDetail.css";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ProductType } from "../../redux/features/shop/shopSlice";
import { AppDispatch } from "../../redux/store";
import { addFavoriteItem } from "../../redux/features/favorites/favoriteSlice";
import { addItem } from "../../redux/features/cart/cartSlice";
import Loading from "../../components/loading/Loading";
import axiosOriginal from "../../axios/axios";

import axios from "axios";

const ItemDetails = () => {
  const { itemid } = useParams();
  const dispatch = useDispatch<AppDispatch>();

  // ******************Handlers *************************

  const [category, setCategory] = useState("Vegan");
  const [recProducts, setRecProducts] = useState<ProductType[]>([]);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  const [allProducts, setAllProducts] = useState<ProductType[]>();

  const fetchAllProducts = async () => {
    setStatus("pending");

    try {
      const response = await axios.get(
        "http://makeup-api.herokuapp.com/api/v1/products.json"
      );
      setAllProducts(response.data);

      return response;
    } catch (error) {}
  };

  let content;

  const handleCategory = (category: string) => {
    setCategory(category);
  };

  const fetchCategory = async () => {
    setStatus("loading");

    try {
      const response = await axiosOriginal.get(`?product_tags=${category}`);
      setRecProducts(response.data);
      setStatus("success");
      return response;
    } catch (error) {
      setStatus("failed");
      setError(error as string);
    }
  };

  useEffect(() => {
    fetchAllProducts();
  }, []);
  useEffect(() => {
    fetchCategory();
  }, [category]);

  if (status === "loading") content = <Loading />;
  else if (status === "failed") content = <p> {error} </p>;
  else if (status === "success") {
    content = content = recProducts
      .slice(0, 8)
      ?.map(
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
      );
  }

  const item = allProducts?.find(({ api_featured_image }) =>
    api_featured_image
      ?.split("/")
      .join("")
      .includes(itemid || "")
  );



  const rating = !item?.rating ? 1 : Math.floor(item?.rating);

  return (
    <section className="section  item-details ">
      {item ? (
        <div className="item-details__content">
          <div className="item-details__img">
            <img
              src={item.api_featured_image || item.image_link}
              alt="product"
            />
          </div>
          <div className="item-details__info">
            {/* favorite button */}

            <button
              className="item-details__fav btn--clear"
              onClick={() =>
                dispatch(
                  addFavoriteItem({
                    item: {
                      id: item?.id,
                      brand: item?.brand,
                      description: item?.description,
                      price: item?.price,
                      count: item?.count || 1,
                      image_link: item?.image_link,
                    },
                  })
                )
              }
            >
              <span className="item-details__fav__icon">
                <AiFillHeart />
              </span>
              <span className="item-details__fav__add"> Add to favorites</span>
            </button>

            {/* product name */}

            <h2 className="item-details__cat">{}</h2>
            <h2 className="item-details__product">{item?.name}</h2>

            {/* rating */}
            <div className="item-details__rating__container">
              {Array.from(Array(5).keys()).map((key) => {
                if (key + 1 <= rating) return <AiFillStar key={key} />;
                else if ((item?.rating || 0) - rating !== 0) {
                  return <AiFillStar key={key} />;
                } else return <AiOutlineStar key={key} />;
              })}
            </div>

            {/* price & quantity */}

            <div className="item-details__price__container">
              <span className="item-details__price">${item?.price}</span>

              <button
                onClick={() =>
                  dispatch(
                    addItem({
                      item: {
                        id: item?.id,
                        brand: item?.brand,
                        description: item?.description,
                        price: item?.price,
                        count: item?.count,
                        image_link: item?.image_link,
                      },
                    })
                  )
                }
                className=" btn--clear item-details__add"
              >
                add to bag
              </button>
            </div>

            <article className="item-details__des">
              <h1 className="item-details__des__title">{item?.product_type}</h1>

              {/************** colors ******************** */}

              <div className="item-details__colors">
                {item?.product_colors?.map(({ hex_value }, index) => (
                  <div
                    key={index}
                    className="item-details__color"
                    style={{ background: hex_value }}
                  />
                ))}
              </div>
            </article>
            <article className="item-details__des">
              <h1 className="item-details__des__title"> description</h1>
              <p>{item?.description}</p>
            </article>
          </div>
        </div>
      ) : (
        <Loading />
      )}

      {/* Recommendations Section */}

      <div className="item-details__rec">
        <h1 className="item-details__rec-title"> You Might Also like </h1>

        <div className="item-details__rec-filter">
          {["Vegan", "Natural", "Organic"].map(cat => (
            <button
              key={cat}
              className={`item-details__btn  btn--clear ${
                category === cat && "active-btn"
              }`}
              onClick={() => handleCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="item-details__rec-products">{content}</div>
      </div>

      <Services />
    </section>
  );
};

export default ItemDetails;
