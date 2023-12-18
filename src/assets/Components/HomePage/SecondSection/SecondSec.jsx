import "./SecondSec.css";
import SecondImg from "../../../Images/Img/secondImg.jpg";
import Button from "../../../Generics/Button/Button";
const SecondSec = () => {
  return (
    <section className="second-section">
      <div className="container">
        <div className="second-section__wrapper">
          <div className="second-section__start-wrapper">
            <img src={SecondImg} alt="backround img" width={408} height={446} />
            <h2 className="second-section__start-title">
              We’re Ready To Grow Your Business With Us
            </h2>
            <p className="second-section__start-text">
              Leverage agile frameworks to provide a robust synopsis for high
              level overviews. thinking to further the overall value
              proposition.{" "}
            </p>
            <a className="second-section__start-contact" href="/link">
              Get in Touch
            </a>
          </div>
          <div className="second-section__end-wrapper">
            <p className="second-section__end-intro">Welcome Whitecollar</p>
            <h2 className="second-section__end-title">
              We Care About Your Business Plan.
            </h2>
            <p className="second-section__end-text">
              Leverage agile frameworks to provide a robust synopsis for high
              level overviews.Iterative approaches to corporate strategy foster
              collaborative thinking to further the overal.
            </p>
            <p className="second-section__end-sub-text">
              Leverage agile frameworks to provide a robust synopsis for high
              level overviews.Iterative approaches to corporate strategy{" "}
            </p>

            <h3 className="second-section__end-check-title">
              Components of a Business Strategy
            </h3>
            <h3 className="second-section__end-check-title">
              Business Consulting
            </h3>
            <div className="second-section__end-awward-box">
              <div className="second-section__end-awward-in">
                <h4 className="second-section__end-awward">Experience</h4>
                <p className="second-section__end-subtext">
                  Leverage frameworks toprovidee werment.
                </p>
              </div>
              <div className="second-section__end-awward-in">
                <h4 className="second-section__end-awward-sec">
                  Awwards Winner
                </h4>
                <p className="second-section__end-subtext">
                  Leverage frameworks toprovidee werment.
                </p>
              </div>
            </div>
            <Button>More About Us</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondSec;
