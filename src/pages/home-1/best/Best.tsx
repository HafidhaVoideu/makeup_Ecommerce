import banner from "../../../assets/banner.jpg";
import FeaturedProd from "../../../feautred-products/FeaturedProd";

const Best = () => {
  return (
    <section className="best-products">
      <img src={banner} alt="banner" />
      <FeaturedProd title="Our best" link="?rating_greater_than=3" />
    </section>
  );
};

export default Best;
