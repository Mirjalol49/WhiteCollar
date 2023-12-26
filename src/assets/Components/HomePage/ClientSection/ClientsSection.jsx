import "./ClientSection.css";
import ClientImg1 from "../../../Images/Img/clientImg1.png";
import ClientImg2 from "../../../Images/Img/clientImg2.jpg";
import Star from "../../../Images/icons/Star.svg";

const ClientsSection = () => {
  return (
    <section>
      <div className="container">
        <div className="client-box">
          <div className="client-wrapper">
            <div className="client-setion__titlebox">
              <p className="client-setion__subTitle">Testimonial</p>
              <h2 className="client-setion__title">What Our Client Say's</h2>
              <p className="client-setion__text">
                Leverage agile frameworks to provide a robust synopsis for high
                level overviews.Iterative{" "}
              </p>
            </div>

            <div className="client-section__ratebox">
              <div className="client-section__rate-in-box">
                <img
                  className="client-section__rate-avatar"
                  src={ClientImg1}
                  alt="client img"
                />
                <div className="client-section__rate-textbox">
                  <h3 className="client-section__rate-title">
                    Nattasha Kelvin
                  </h3>
                  <p className="client-section__rate-text">Designer</p>
                  <img
                    className="client-section__mid-rate"
                    src={Star}
                    alt="star"
                  />
                </div>
              </div>
              <p className="client-section__rate-subtext">
                “ dd an excerpt from your personal biography, or simply let the
                world know who you are and what you have to offer. Connect with
                your site visitor’s on a personal level and make sure that your
                site.
              </p>
            </div>

            <div className="client-section__endbox">
              <div className="client-section__rate-in-box">
                <img
                  className="client-section__rate-avatar"
                  src={ClientImg2}
                  alt="client img"
                />
                <div className="client-section__rate-textbox">
                  <h3 className="client-section__rate-title">
                    Nattasha Kelvin
                  </h3>
                  <p className="client-section__rate-text">Designer</p>
                  <img
                    className="client-section__end-rate"
                    src={Star}
                    alt="star"
                  />
                </div>
              </div>
              <p className="client-section__end-subtext">
                “ Leverage agile frameworks to provide a robust synopsis for
                high level overviews ”
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
