import { useRef } from "react";
import "./blog.css";
import Item from "../../components/blog/blogitem/Item";
import { posts, editors } from "../../data/data";
import Editor from "../../components/blog/editor/Editor";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
const Blog = () => {
  const ref = useRef<HTMLDivElement>(null);

  // ***************** Handlers ******************
  const handleRight = () => {
    if (ref.current) ref.current.scrollLeft += 170;
  };
  const handleLeft = () => {
    if (ref.current) ref.current.scrollLeft -= 170;
  };

  return (
    <section className="blog section">
      {/* PPOSTS SECTION */}

      <nav className="blog__nav"></nav>

      <section className="blog__main">
        {posts
          .slice(0, 4)
          .map(({ id, category, title, img, body, creator, time, big }) => (
            <Item
              key={id}
              title={title}
              category={category}
              time={time}
              author={creator}
              body={body}
              img={img}
              isBig={big}
            />
          ))}
      </section>

      {/* EDITORS SECTION */}

      <section className="blog__editors">
        <div className="blog__editors__title-container">
          <h1 className="blog__editors__title">Our Editors</h1>
          <div className="divider" />
        </div>

        <div className="blog__editors__container">
          <div ref={ref} className="blog__editors__editors-list">
            {editors.map(({ id, name, img, role }) => (
              <Editor key={id} name={name} img={img} role={role} />
            ))}
          </div>

          <div className="blog__editor__arrows-container">
            <IoIosArrowBack
              className="blog__editor__left-arrow"
              onClick={handleLeft}
            />
            <IoIosArrowForward
              className="blog__editor__right-arrow"
              onClick={handleRight}
            />
          </div>
        </div>
      </section>

      {/* MORE POSTS  SECTION */}

      <section className="blog__more-posts">
        {posts
          .slice(4, 9)
          .map(({ id, category, title, img, body, creator, time, big }) => (
            <Item
              key={id}
              title={title}
              category={category}
              time={time}
              author={creator}
              body={body}
              img={img}
              isBig={big}
            />
          ))}
      </section>

      <button className="blog__btn btn--clear">Show More</button>
    </section>
  );
};

export default Blog;
