import { ProductType } from "../../redux/features/shop/shopSlice";

import { useNavigate } from "react-router-dom";
const SearchItem = ({
  brand,
  description,
  image_link,
  api_featured_image,
  price,
}: ProductType) => {
  const navigate = useNavigate();
  return (
    <article
      className="cartItem "
      onClick={() =>
        navigate(`/item/${api_featured_image?.split("/").join("")}`)
      }
    >
      <div className="cartItem__img">
        <img src={api_featured_image || image_link} alt="product" />
      </div>

      <div className="cartItem__content">
        <h1 className="cartItem__content__title">{brand}</h1>

        <p className="cartItem__content__des">
          {!description
            ? "Lorem ipsum dolor sit amet consectetur adipisicing elit solutaiste ...more "
            : description.length > 40
            ? ` ${description.substring(0, 40)}...more`
            : description}
        </p>
      </div>
      <span className="cartitem__price">${price}</span>
    </article>
  );
};

export default SearchItem;
