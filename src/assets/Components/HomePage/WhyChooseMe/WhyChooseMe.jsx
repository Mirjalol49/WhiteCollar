import "./WhyChooseMe.css";

const WhyChooseMe = () => {
  return (
    <section>
      <div className="container">
        <p className="chart-subtitle">Why Choose Me</p>
        <h2 className="chart-main-title ">
          We provide solutions to grow your business
        </h2>
        <p>
          Leverage agile frameworks to provide a robust synopsis for high level
          overviews. thinking to further the overall proposition.{" "}
        </p>
        <div className="chart-box">
          <div className="chart-box__start">
            <div className="chart-box__chart">95%</div>
            <div className="chart-box__textbox">
              <p className="chart-box__text">Clients</p>
              <p className="chart-box__text-title">Quick Responses</p>
            </div>
          </div>
          <div className="chart-box__end">
            <div className="chart-box__chart">85%</div>
            <div className="chart-box__textbox">
              <p className="chart-box__text">Projects</p>
              <p className="chart-box__text-title">Finished Jobs</p>
            </div>
          </div>
        </div>
        <div className="chart-done">
          <span>2,800+ Active clients</span>
          <span>106+</span>
          <span>1,670 + 5 ⭐ stars reviews</span>
          <a href="/link">Get in Touch</a>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseMe;
