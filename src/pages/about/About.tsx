import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Review from "../../components/review/Review";
import Services from "../../components/services/Services";
import "./about.css";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { useRef } from "react";
import AboutHeader from "../../components/about/AboutHeader";
import avene from "../../assets/brands/avene.svg";
import filorga from "../../assets/brands/filorga.svg";
import isdin from "../../assets/brands/isdin.svg";
import roche from "../../assets/brands/la-roche-posay.svg";
import sesderma from "../../assets/brands/sesderma.svg";
import vichy from "../../assets/brands/vichy.svg";
import { reviews } from "../../data/data";

const About = () => {
  const ref = useRef<HTMLDivElement>(null);

  const handleRight = () => {
    if (ref.current) ref.current.scrollLeft += 200;
  };

  const handleLeft = () => {
    if (ref.current) ref.current.scrollLeft -= 200;
  };

  return (
    <section className="about section">
      <div className="about__content  ">
        <h1 className="about__title"> About Us</h1>
        <p className="about__des">
          Fresh was created with the idea of giving beauty seekers from all
          ages, all sexes,and all walks of the life to experience a world of
          beauty products in one location, a one stop shop which we proudly call
          Beauty Wonderland.
        </p>
        <p className="about__des">
          With this goal in mind, Fresh set upon the journey to source the most
          unique and sought after products and brands from the global beauty
          industry.
        </p>
        <p className="about__des">
          This journey led Fresh to the fall in love with the constantly
          revolving beauty trends of the Japanese and Korean Cosmetics Industry.
          With this passion, Fresh set its eyes on bringing these unique
          creations to the Australian Market and allow the Australian consumers
          to also fall in love with these beauty trends. And with that, the
          evolution of Fresh began, by opening more and more stores every year,
          creating a significant influence on the Asian Cosmetics Industry in
          Australia, and by introducing new customers everyday into our Beauty
          Wonderland.
        </p>
      </div>

      <section className="about__brands">
        <AboutHeader title="Brands" type="brands" />
        <div className="about__brands__container">
          <img src={avene} alt="avene" />
          <img src={filorga} alt="filorga" />
          <img src={isdin} alt="isdin" />
          <img src={roche} alt="roche" />
          <img src={vichy} alt="vichy" />
          <img src={sesderma} alt="sesderma" />
        </div>
      </section>

      <section className="about__reviews">
        <AboutHeader title="Customer Reviews" type="reviews" />
        <div ref={ref} className="about__reviews-container">
          <article className="about__intro ">
            <p className="about__intro__rating">
              <span>4,0</span> out of 5
            </p>
            <div className="about__intro__rating ">
              {Array.from(Array(4).keys()).map((item) => (
                <AiFillStar key={item} />
              ))}

              <AiOutlineStar />
              <p className="about__intro__nb-reviews">15544 reviews</p>
            </div>
            <p className="about__intro__source-reviews">
              showing our favorite reviews from <span>Facebook</span>
            </p>
          </article>

          {reviews.map(({ id, rating, comment, img, name, date }) => (
            <Review
              key={id}
              rating={rating}
              comment={comment}
              img={img}
              name={name}
              date={date}
            />
          ))}
        </div>
        <div className="about__reviews__arrows-container">
          <IoIosArrowBack
            className="about__reviews__left-arrow"
            onClick={handleLeft}
          />
          <IoIosArrowForward
            className="about__reviews__right-arrow"
            onClick={handleRight}
          />
        </div>
      </section>
      <AboutHeader title="Services" type="services" />

      <Services />
    </section>
  );
};

export default About;
