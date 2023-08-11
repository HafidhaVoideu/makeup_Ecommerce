import "./review.css";
import { AiFillStar } from "react-icons/ai";

type ReviewType = {
  rating: number;
  comment: string;
  img: string;
  name: string;
  date: string;
};

const Review = ({ rating, comment, img, name, date }: ReviewType) => {
  return (
    <article className="review">
      <div className="review__container">
        <div className="review__rating">
          {Array.from(Array(rating).keys()).map((item) => (
            <AiFillStar key={item} />
          ))}
        </div>
        <p className="review__comment">{comment}</p>
      </div>

      <article className="review__profile">
        <img className="review__profile__img" src={img} />
        <div className="review__profile__info">
          <h1 className="review__profile__name">{name}</h1>
          <span className="review__profile__date">{date}</span>
        </div>
      </article>
    </article>
  );
};

export default Review;
