import "./OurProject.css";
import Button from "../../../Generics/Button/Button";
import ProjectImg1 from "../../../Images/Img/projectImg1.png";
import ProjectImg2 from "../../../Images/Img/projectImg2.png";
import ProjectImg3 from "../../../Images/Img/projectImg3.png";
import ProjectImg4 from "../../../Images/Img/projectImg4.png";
const OurProject = () => {
  return (
    <section className="our-project">
      <div className="container">
        <div className="our-project__box">
          <div>
            <p className="our-project__subtitle">Our Project</p>
            <h2 className="our-project__title">
              You can check our projects as inspirations
            </h2>
          </div>
          <Button backgroundColor="#40DDB6">More work</Button>
        </div>
      </div>
      <div className="our-project__img-box">
        <img
          className="our-project__img"
          src={ProjectImg1}
          alt="project images"
        />
        <img
          className="our-project__img"
          src={ProjectImg2}
          alt="project images"
        />
        <img
          className="our-project__img"
          src={ProjectImg3}
          alt="project images"
        />
        <img
          className="our-project__img"
          src={ProjectImg4}
          alt="project images"
        />
      </div>
    </section>
  );
};

export default OurProject;
