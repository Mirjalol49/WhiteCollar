import LocationIcon from "../../../Images/icons/locationIcon.svg";
import Message from "../../../Images/icons/messageIcon.svg";
import TimeIcon from "../../../Images/icons/timeicon.svg";
import Instagram from "../../../Images/icons/insta.svg";
import Facebook from "../../../Images/icons/facebook.svg";
import Twitter from "../../../Images/icons/twitter.svg";
import Pinterest from "../../../Images/icons/pinterest.svg";
import "./Header.css";
const Header = () => {
  return (
    <header className="main-header">
      <div className="container">
        {/* Top main box*/}
        <div className="main-header__top-box">
          {/* Top start box*/}
          <div className="main-header__top-start">
            <div className="main-header__inner-box">
              <img
                src={LocationIcon}
                alt="location icon"
                width={15}
                height={22}
              />
              <address className="main-header__add">
                24 Olive Street, Prairie, NY 53590
              </address>
            </div>
            <div className="main-header__inner-box">
              <img src={Message} alt="message icon" width={20} height={15} />
              <a
                className="main-header__email"
                href="whitecollar@gmail.com"
                target="blank"
              >
                whitecollar@gmail.com
              </a>
            </div>
          </div>

          {/* Top end box*/}
          <div className="main-header__top-end">
            <div className="main-header__end-inner">
              <img src={TimeIcon} alt="time icon" width={14} height={14} />
              <time className="main-header__time">
                Mon - Fri: 8:00 am - 5:00 pm
              </time>
            </div>
            <div className="main-header__end-inner-links">
              <a
                className="main-header__social"
                href="https://www.instagram.com/"
                target="blank"
              >
                <img
                  className="main-header__social-img"
                  src={Instagram}
                  alt="instagram"
                  width={17}
                  height={16}
                />
              </a>
              <a
                className="main-header__social"
                href="https://www.facebook.com/"
                target="blank"
              >
                <img
                  className="main-header__social-img"
                  src={Facebook}
                  alt="facebook"
                  width={17}
                  height={16}
                />
              </a>
              <a
                className="main-header__social"
                href="https://twitter.com/home"
                target="blank"
              >
                <img
                  className="main-header__social-img"
                  src={Twitter}
                  alt="twitter"
                  width={17}
                  height={16}
                />
              </a>
              <a
                className="main-header__social"
                href="https://www.pinterest.com/"
                target="blank"
              >
                <img
                  className="main-header__social-img"
                  src={Pinterest}
                  alt="Pinterest"
                  width={17}
                  height={16}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
