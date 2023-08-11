import Services from "../../components/services/Services";
import Beauty from "./beauty/Beauty";
import Best from "./best/Best";
import Elegance from "./elegance/Elegance";
import Gift from "./gift/Gift";
import HomeCarousel from "./main/HomeCarousel";

const Home = () => {
  return (
    <>
      <HomeCarousel />
      <Beauty />
      <Best />
      <Elegance />
      <Services />
      <Gift />
    </>
  );
};

export default Home;
