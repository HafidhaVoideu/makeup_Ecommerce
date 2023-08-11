import "./cartItem.css";
import { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import {
  countTotalItems,
  decreaseCount,
  increaseCount,
  removeItem,
} from "../../redux/features/cart/cartSlice";
import { AppDispatch } from "../../redux/store";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { ProductType } from "../../redux/features/shop/shopSlice";

const CartItem = ({
  id,
  brand,
  description,
  price,
  count,
  image_link,
  api_featured_image,
}: ProductType) => {
  const [counter, setCounter] = useState(count);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(countTotalItems());
  }, [counter]);

  return (
    <article className="cartItem">
      <div className="cartItem__img">
        <img src={image_link || api_featured_image} alt="product" />
      </div>

      <div className="cartItem__content">
        <header className="cartItem__content__header">
          <h1 className="cartItem__content__title">{brand}</h1>
          <button
            onClick={() => dispatch(removeItem({ id }))}
            className="carItem__close-btn  btn--clear"
          >
            <AiOutlineClose />
          </button>
        </header>

        <p className="cartItem__content__des">
          {!description
            ? "Lorem ipsum dolor sit amet consectetur adipisicing elit solutaiste ...more "
            : description.length > 40
            ? ` ${description.substring(0, 40)}...more`
            : description}
        </p>

        {/* Quantity */}
        <div className="cartItem__content__quantity">
          <div className="cartItem__content__container">
            <button
              onClick={() => {
                setCounter((prev) => (prev = Math.max(1, prev - 1)));
                dispatch(
                  decreaseCount({
                    id,
                  })
                );
              }}
              className="btn--clear  item__btn"
            >
              <AiOutlineMinus />
            </button>
            <span className="item__count">{counter}</span>
            <button
              className="btn--clear  item__btn"
              onClick={() => {
                setCounter((prev) => (prev = prev + 1));
                dispatch(increaseCount({ id }));
              }}
            >
              <AiOutlinePlus />
            </button>
          </div>

          <span className="cartitem__price">
            {" "}
            ${(parseFloat(price ? price : "") * counter).toFixed(2)}
          </span>
        </div>
      </div>
    </article>
  );
};

export default CartItem;
