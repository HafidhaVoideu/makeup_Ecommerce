import "./carousel.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";
import { homeProducts } from "../../../data/data";

const HomeCarousel = () => {
  return (
    <section className="home  ">
      <Carousel
        className="home-carousel"
        autoPlay
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        renderArrowPrev={(onClickHandler) => {
          return (
            <button
              onClick={onClickHandler}
              className="home__navigation-btn  home__navigation-btn--left "
            >
              <IoMdArrowDropleft />
            </button>
          );
        }}
        renderArrowNext={(onClickHandler) => {
          return (
            <button
              onClick={onClickHandler}
              className="home__navigation-btn  home__navigation-btn--right "
            >
              <IoMdArrowDropright />
            </button>
          );
        }}
      >
        {homeProducts.map(({ id, product, des, img }) => (
          <article className="home-product" key={id}>
            <div className="home__img-container">
              <img className="home-product__img" alt={product} src={img} />
            </div>
            <div className="home-product__info">
              <h1 className="home-product__title">{product}</h1>
              <p className="home-product__des">{des}</p>
              <button className="home-product__btn  btn--clear ">
                see more
              </button>
            </div>
          </article>
        ))}
      </Carousel>
    </section>
  );
};

export default HomeCarousel;
