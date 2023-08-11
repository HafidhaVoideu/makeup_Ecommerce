import "./item.css";

type ItemProps = {
  category: string;
  title: string;
  body: string;
  time: string;
  author: string;
  img: string;
  isBig: boolean;
};

const Item = ({
  category,
  title,
  body,
  time,
  author,
  img,
  isBig,
}: ItemProps) => {
  return (
    <article className={` post ${isBig && "post--big"}  `}>
      <div className={`${isBig && "post__img--big"}  post__img `}>
        <img src={img} alt="product" />
      </div>
      <div className="post__content">
        <h2 className="post__category"> {category} </h2>
        <h1 className={`${isBig && "post__title--big"}  post__title `}>
          {title}
        </h1>
        <p className="post__body">{body}</p>
        <div className="post__info">
          <span className="post__date"> {time} • </span>
          <span className="post__author">{author} </span>
        </div>
      </div>
    </article>
  );
};

export default Item;
