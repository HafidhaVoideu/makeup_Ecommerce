import { services } from "../../data/data";
import Service from "../service/Service";
import "./services.css";
const Services = () => {
  return (
    <section className="services section ">
      <div className="services__list">
        {services.map(({ id, service, des, icon }) => (
          <Service key={id} service={service} des={des} icon={icon} />
        ))}
      </div>
    </section>
  );
};

export default Services;
