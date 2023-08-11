import { useDispatch } from "react-redux";
import { addItem } from "../../redux/features/cart/cartSlice";
import "./favoriteItem.css";
import { AiOutlineClose } from "react-icons/ai";
import { AppDispatch } from "../../redux/store";
import { removeFavoriteItem } from "../../redux/features/favorites/favoriteSlice";
import { ProductType } from "../../redux/features/shop/shopSlice";

const FavoriteItem = ({
  id,
  brand,
  description,
  price,
  count,
  image_link,
  api_featured_image,
}: ProductType) => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <article className="cartItem">
      <div className="cartItem__img">
        <img
          src={!image_link ? api_featured_image : image_link}
          alt="product"
        />
      </div>
      <div className="cartItem__content">
        <header className="cartItem__content__header">
          <h1 className="cartItem__content__title">{brand}</h1>
          <button
            onClick={() => dispatch(removeFavoriteItem({ id }))}
            className="carItem__close-btn  btn--clear"
          >
            <AiOutlineClose />
          </button>
        </header>

        <p className="cartItem__content__des">
          {description.length > 40
            ? ` ${description.substring(0, 40)}...more`
            : description}
        </p>

        <div className="favoriteitem__container">
          <button
            className="favoriteitem__btn  btn--clear"
            onClick={() => {
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
                  },
                })
              );
              dispatch(removeFavoriteItem({ id }));
            }}
          >
            add to cart
          </button>
          <span className="favoriteItem__price">
            {" "}
            ${parseFloat(price ? price : "").toFixed(2)}
          </span>
        </div>
      </div>
    </article>
  );
};

export default FavoriteItem;
