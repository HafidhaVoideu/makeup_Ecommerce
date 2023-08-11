import "./service.css";
import "./service.css";
type ServiceProps = {
  service: string;
  des: string;
  icon: any;
};

const Service = ({ service, des, icon }: ServiceProps) => {
  return (
    <article className="service">
      <div className="service__img">
        <span className="service__img__bg"></span>

        <span className="service__img__icon">{icon}</span>
      </div>
      <div className="service__info">
        <h1 className="service__title">{service}</h1>
        <p className="service__des">{des}</p>
      </div>
    </article>
  );
};

export default Service;
