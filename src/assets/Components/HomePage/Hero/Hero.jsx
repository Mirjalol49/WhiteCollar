import Logo from "../../../Images/icons/logo.svg";
import "./Hero.css";
import Button from "../../../Generics/Button/Button";
import PlayBtn from "../../../Images/icons/playButton.png";
const Hero = () => {
  return (
    <main className="main">
      <section className="hero-section">
        <div className="container">
          <div className="hero-wrapper">
            <a href="./index.html">
              <img src={Logo} alt="logo" width={200} height={100} />
            </a>
            <div className="hero-in-wrapper">
              <nav className="main-nav">
                <ul className="nav-list">
                  <li className="nav-item">
                    <a className="nav-link" href="./link">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="./link">
                      About Us
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="./link">
                      Pages
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="./link">
                      Services
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="./link">
                      Blog
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="./link">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </nav>
              <Button>Get Consulting</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="main-section">
        <div className="main-section__wrapper">
          {" "}
          <p className="main-section__info">Welcome to WhiteCollar Solution</p>
          <h1 className="main-section__title">
            The Best Value for{" "}
            <span className="main-section__in-title">Business</span> and
            Corporation
          </h1>
          <p className="main-section__text">
            Collaboratively administrate empowered markets plug and play
            networks dynamically procrastinated
          </p>
          <div className="main-section__btn-wrapper">
            <Button color="#000" backgroundColor="#40DDB6">
              Get Consulting
            </Button>
            <a
              className="main-section__play-vid"
              role="button"
              href="https://www.youtube.com/watch?v=nvqE0kSXTT4&pp=ygUUd2hpdGUgY29sbGFyIHRyYWlsZXI%3D"
              target="blank"
            >
              <img
                className="playbtn"
                src={PlayBtn}
                alt="play button"
                width={60}
                height={60}
              />
              Watch the videos
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Hero;
