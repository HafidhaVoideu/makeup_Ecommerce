import { useState, useEffect } from "react";
import "./header.css";
import logo from "../../../assets/logo.png";
import { HiSearch } from "react-icons/hi";
import { AiTwotoneHeart } from "react-icons/ai";
import { BsFillBagFill } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { GrClose } from "react-icons/gr";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { AppDispatch } from "../../../redux/store";
import {
  getCartItems,
  setIsCartOpen,
} from "../../../redux/features/cart/cartSlice";
import { setIsFavorite } from "../../../redux/features/favorites/favoriteSlice";
import { getFavoriteItems } from "../../../redux/features/favorites/favoriteSlice";

import Search from "../../../components/search/Search";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const [isModal, setIsModal] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const favoriteItems = useSelector(getFavoriteItems);
  const carItems = useSelector(getCartItems);

  const navItems = ["", "shop", "blog", "about"].map((nav, index) => (
    <li key={index} onClick={() => navigate(`/${nav}`)}>
      {!nav ? "home" : nav}
    </li>
  ));
  const { pathname } = useLocation();
  useEffect(() => {
    setToggle(false);
    setIsModal(false);
  }, [pathname]);

  return (
    <header className="header">
      {isModal && (
        <>
          <div className="overlay" onClick={() => setIsModal(false)} />
          <Search />
        </>
      )}

      <img
        className="header__logo"
        src={logo}
        alt="logo"
        onClick={() => navigate("/")}
      />

      <nav className="header__nav">
        <ul className="header__nav__list">{navItems}</ul>
      </nav>

      <div className="header__icons  flex--center ">
        <div onClick={() => setIsModal(true)} className="header__icon">
          <span></span>

          <HiSearch />
        </div>
        <div onClick={() => dispatch(setIsFavorite())} className="header__icon">
          <span></span>
          {favoriteItems.length ? <i className="badge"></i> : undefined}

          <AiTwotoneHeart />
        </div>
        <div onClick={() => dispatch(setIsCartOpen())} className="header__icon">
          <span></span>

          {carItems.length ? <i className="badge"></i> : undefined}

          <BsFillBagFill />
        </div>
      </div>

      {/* Mobile NavBar */}

      <nav className={`header__nav--mobile`}>
        <button
          onClick={() => setToggle(true)}
          className="header__menu-btn   clear--btn "
        >
          <RxHamburgerMenu />
        </button>

        {toggle && (
          <div className="slide-bottom header__nav--mobile__overlay">
            <button
              onClick={() => setToggle(false)}
              className="header__close-btn  clear--btn "
            >
              <GrClose />
            </button>
            <ul className="header__nav__list--mobile">{navItems}</ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
