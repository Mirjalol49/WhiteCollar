import { solutionsData } from "./data";
import "./Solutions.css";
const Solutions = () => {
  return (
    <section className="solutions">
      <div className="container">
        <p className="solutions-head-title">We are expertise in</p>
        <h2 className="solutions-title">
          We Provide Professional Business Solutions.
        </h2>
        <div className="solutions-box">
          {solutionsData.map((item) => {
            return (
              <div className="solutions-inbox" key={item.id}>
                <div className="solutions-titlebox">
                  <h3 className="solutions-in-title">{item.title}</h3>
                  <img src={item.img} alt={item.title} />
                </div>

                <a className="solutions-inlink" href="./link">
                  {item.link}
                </a>
              </div>
            );
          })}
          <a className="solutions-readmore" href="./link">
            Read More
          </a>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
