import "./Brands.css";
import Brands1 from "../../../Images/Img/brands1.svg";
import Brands2 from "../../../Images/Img/brands2.svg";
import Brands3 from "../../../Images/Img/brands3.svg";
import Brands4 from "../../../Images/Img/brands4.svg";
import Brands5 from "../../../Images/Img/brands5.svg";

const Brands = () => {
  return (
    <section className="brands">
      <div className="container">
        <div className="brands-wrapper">
          <img src={Brands1} alt="brands img" width={136} height={46} />
          <img src={Brands2} alt="brands img" width={103} height={98} />
          <img src={Brands3} alt="brands img" width={170} height={44} />
          <img src={Brands4} alt="brands img" width={150} height={45} />
          <img src={Brands5} alt="brands img" width={119} height={71} />
        </div>
      </div>
    </section>
  );
};

export default Brands;
