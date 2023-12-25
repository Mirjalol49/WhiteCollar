import "./WhyChooseMe.css";
import ChartBg from "../../../Images/Img/chartBg.jpg";
const WhyChooseMe = () => {
  return (
    <section className="chart">
      <div className="chart-inner-wrapper">
        <p className="chart-subtitle">Why Choose Me</p>
        <h2 className="chart-main-title ">
          We Provide Solutions To Grow Your Business
        </h2>
        <p className="chart-text">
          Leverage agile frameworks to provide a robust synopsis for high level
          overviews. thinking to further the overall proposition.{" "}
        </p>
        <div className="chart-box">
          <div className="chart-box__start">
            <div className="chart-barbox">
              <div className="chart-box__chart">
                <span className="chart-bar-content">95%</span>
              </div>
            </div>
            <div className="chart-box__textbox">
              <p className="chart-box__text">Clients</p>
              <p className="chart-box__text-title">Quick Responses</p>
            </div>
          </div>
          <div className="chart-box__end">
            <div className="chart-barbox">
              <div className="chart-box__chart">
                <span className="chart-bar-content">85%</span>
              </div>
            </div>
            <div className="chart-box__textbox">
              <p className="chart-box__text">Projects</p>
              <p className="chart-box__text-title">Finished Jobs</p>
            </div>
          </div>
        </div>
        <div className="chart-done">
          <span className="chart-done__text">2,800+ Active clients</span>
          <span className="chart-done__text">106+</span>
          <span className="chart-done__text">
            1,670 + <span className="chart-done__highlight">5 ⭐ stars</span>{" "}
            reviews
          </span>
          <a className="chart-done__link" href="/link">
            Get in Touch
          </a>
        </div>
      </div>

      <img src={ChartBg} alt="chatbg" />
    </section>
  );
};

export default WhyChooseMe;
