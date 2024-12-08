import Avatar from "../avatar/Avatar";
import "./style.css";
import cv from "../../img/cv/cv_Maksim_Khorevich.pdf";

const Header = () => {
  return (
    <header className="header">
      <div className="ava">
        <Avatar />
      </div>
      <div className="header__wrapper">
        <h1 className="header__title">
          <div className="text">
            Hi, my name is <em>Maksim</em>
          </div>
          <br />a frontend developer
        </h1>
        <a
          href={cv}
          download="Maksim_Khorevich"
          className="btn"
          id="Maksim_Khorevich"
        >
          Download CV
        </a>
      </div>
    </header>
  );
};

export default Header;
