import { useEffect, useState } from "react";
import { ProductType } from "../redux/features/shop/shopSlice";

import axios from "../axios/axios";
import Loading from "../components/loading/Loading";
import Product from "../components/product/Product";
import "./featuredProd.css";

type FeaturedProdProps = {
  title: string;
  link: string;
};

const FeaturedProd = ({ title, link }: FeaturedProdProps) => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  let content;

  const fetchFeaturedProducts = async () => {
    setStatus("pending");
    try {
      const response = await axios.get(link);
      setProducts(response.data);
      setStatus("success");

      return response;
    } catch (error) {
      setStatus("failed");
      setError(error as string);
    }
  };
  useEffect(() => {
    fetchFeaturedProducts();
  }, []);

  if (status === "success") {
    console.log("products:", products);
    content = products
      .slice(0, 8)
      ?.map(
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
          <Product
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
  } else if (status === "pending") content = <Loading />;
  else content = <p>{error}</p>;

  return (
    <section className=" section featured-prod">
      <header className="featured-prod__header ">
        <h1 className="featured-prod__title">{title}</h1>
        <button className="featured-prod__btn  btn--clear">see more</button>
      </header>
      <div className="featured-prod__content">{content}</div>
    </section>
  );
};

export default FeaturedProd;
