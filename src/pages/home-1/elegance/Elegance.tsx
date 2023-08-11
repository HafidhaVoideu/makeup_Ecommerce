import "./elegance.css";
import spa from "../../../assets/spa.png";
const Elegance = () => {
  return (
    <section className="elegance-sec ">
      <article className="elegance-sec__article">
        <div className="elegance-sec__img-conainer">
          <img className="elegance-sec__img" src={spa} alt="beauty-products" />
        </div>

        <div className="elegance-sec__content">
          <h1 className="elegance-sec__title">Elegance is what you deserve</h1>
          <p className="elegance-sec__des">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab ad
            consequuntur aspernatur sit incidunt, hic ut quo animi suscipit!
            Quam consequuntur, illum amet similique nihil at tempora inventore
            perspiciatis labore. Fugit ut quasi eum neque reprehenderit
            doloremque ex minus ab perspiciatis vitae, dolorum repellendus
            maiores aut iusto veniam quisquam deleniti tempora itaque amet nihil
            non eos? Tempora necessitatibus labore eius!
          </p>
        </div>
      </article>
    </section>
  );
};

export default Elegance;
