import "./sidebar.css";
import { useDisableBodyScroll } from "../../../hooks/useDisableBodyScroll";
import { AiOutlineClose } from "react-icons/ai";
import CartItem from "../../../components/cart/CartItem";
import {
  addItem,
  countTotalItems,
  getCartItems,
  getTotal,
  isCartOpen,
  setIsCartOpen,
} from "../../../redux/features/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../../redux/store";

import { useEffect } from "react";
import {
  getFavoriteItems,
  isfavorites,
  removeFavoriteItem,
  setIsFavorite,
} from "../../../redux/features/favorites/favoriteSlice";

import FavoriteItem from "../../../components/favoriteItem/FavoriteItem";
const Sidebar = () => {
  //*****  cart ***

  const cartItems = useSelector(getCartItems);
  const isOpen = useSelector(isCartOpen);
  const total = useSelector(getTotal);
  const dispatch = useDispatch<AppDispatch>();

  //*****  favorites ***

  const favoriteItems = useSelector(getFavoriteItems);
  const isFavoritesOpen = useSelector(isfavorites);
  useDisableBodyScroll(isOpen || isFavoritesOpen);
  const ItemsList = isFavoritesOpen
    ? favoriteItems.map(
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
          <FavoriteItem
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
      )
    : cartItems.map(
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
          <CartItem
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

  useEffect(() => {
    dispatch(countTotalItems());
  });

  return (
    <div className="sidebar">
      <div
        onClick={() => {
          if (isFavoritesOpen) dispatch(setIsFavorite());

          if (isOpen) dispatch(setIsCartOpen());
        }}
        className={`${!isOpen && !isFavoritesOpen && "hide"} overlay`}
      />
      <aside
        className={`${(isOpen || isFavoritesOpen) && "show"}  sidebar__content`}
      >
        {/* sidebar Header */}

        <header className="sidebar__header">
          <h1 className="sidebar__header__title">
            {!isFavoritesOpen ? "Shopping bag" : "Favorites"}
          </h1>
          <button
            onClick={() => {
              if (isFavoritesOpen) dispatch(setIsFavorite());
              else if (isOpen) dispatch(setIsCartOpen());
            }}
            className="sidebar__header__btn  btn--clear"
          >
            <AiOutlineClose />
          </button>
        </header>

        {/* sidebar Items */}

        <div className="sidebar__items">{ItemsList}</div>

        {/* checkout */}

        <footer>
          <div className="sidebar__divider" />

          {isFavoritesOpen ? (
            <button
              disabled={!favoriteItems.length}
              onClick={() => {
                favoriteItems.forEach((item: any) =>
                  dispatch(addItem({ item }))
                );
                favoriteItems.forEach(({ id }) =>
                  dispatch(removeFavoriteItem({ id }))
                );
              }}
              className="sidebar__total-btn  btn--clear"
            >
              ADD ALL TO CART
            </button>
          ) : (
            <>
              <div className="sidebar__total">
                <p> Subtotal</p>
                <span>${total.toFixed(2)}</span>
              </div>
              <button
                disabled={!cartItems.length}
                className="sidebar__total-btn  btn--clear"
              >
                CHECKOUT
              </button>
            </>
          )}
        </footer>
      </aside>
    </div>
  );
};

export default Sidebar;
