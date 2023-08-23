import { useState } from "react";
import "./product.css";

import { AiFillHeart } from "react-icons/ai";
import { BsBagPlus } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { addItem } from "../../redux/features/cart/cartSlice";
import { addFavoriteItem } from "../../redux/features/favorites/favoriteSlice";
import { ProductType } from "../../redux/features/shop/shopSlice";
import { useNavigate } from "react-router-dom";

const Product = ({
  id,
  brand,
  description,
  price,
  count,
  image_link,
  api_featured_image,
  category,
}: ProductType) => {
  const [isHover, setIsHover] = useState(false);
  const dispatch = useDispatch<AppDispatch>();

  const navigate = useNavigate();

  const imageUrl = api_featured_image || image_link;

  return (
    <article
      className="product"
      onClick={() => navigate(`/item/${imageUrl?.split("/").join("")}`)}
      onMouseOver={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <button
        onClick={() =>
          dispatch(
            addFavoriteItem({
              item: {
                id,
                brand,
                description,
                price,
                count,
                image_link,
                api_featured_image,
              },
            })
          )
        }
        className={` product__favorite  btn--clear   ${isHover && "show-btn"}`}
      >
        <AiFillHeart fill="red" />
      </button>
      <button
        onClick={() =>
          dispatch(
            addItem({
              item: {
                id,
                brand,
                description,
                price,
                count,
                image_link,
                api_featured_image,
                category,
              },
            })
          )
        }
        className={`product__cart  btn--clear   ${isHover && "show-btn"}`}
      >
        <BsBagPlus fill="#fdcc58" />
      </button>

      <div className="product__img">
        <img
          src={api_featured_image || image_link}
          alt={`${brand}-${category}`}
        />
      </div>

      <div className="product__info">
        <h1 className="product__category"> {brand} </h1>

        <p className="product__des">
          {description.length
            ? description?.length > 70
              ? ` ${description.substring(0, 70)}...more`
              : description
            : "Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor incididunt..more "}
        </p>

        <h2 className="product__price"> ${price}</h2>
      </div>
    </article>
  );
};

export default Product;
