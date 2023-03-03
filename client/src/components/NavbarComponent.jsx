import { useState } from "react";
import { HashLink } from "react-router-hash-link";

const NavbarComponent = () => {
  const [isNavbarActive, setIsNavbarActive] = useState(false);

  const menuToggle = () => {
    setIsNavbarActive((current) => !current);
  };

  return (
    <div>
      <div id="menu-bars" className={`fas ${isNavbarActive ? "fa-times" : "fa-bars"}`} onClick={menuToggle}></div>
      <header className={isNavbarActive ? "active" : ""}>
        <a href="#home" className="logo">
          <span>Smart</span>Tech
        </a>

        <nav className="navbar d-block">
          <div className="image">
            <img src={require("./images/young-man.jpg")} alt="" />
            <p className="username">Username</p>
          </div>
          <HashLink smooth to={"/#home"} onClick={menuToggle}>
            <span className="material-symbols-outlined">home</span>HOME
          </HashLink>
          <div className="dropdown">
            <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
              <span className="material-symbols-outlined">sensors</span>SENSORS
            </a>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <li>
                <HashLink className="dropdown-item" href="#tempt-sensor" onClick={menuToggle} smooth to={"/#temp-servo-display"}>
                  Temperature
                </HashLink>
              </li>
              <li>
                <a className="dropdown-item" href="#" onClick={menuToggle}>
                  Humidity
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#" onClick={menuToggle}>
                  Ligth Intensity
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#" onClick={menuToggle}>
                  Ultrasonic
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#" onClick={menuToggle}>
                  Level
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#" onClick={menuToggle}>
                  pH
                </a>
              </li>
            </ul>
          </div>
          <a href="#service" onClick={menuToggle}>
            <span className="material-symbols-outlined">tune</span>MANUAL
          </a>
          <a href="#experience" onClick={menuToggle}>
            <span className="material-symbols-outlined time">schedule</span>TIMER
          </a>
          <a href="#contact" onClick={menuToggle}>
            <span className="material-symbols-outlined camera">photo_camera</span>
            CAMERA
          </a>
        </nav>
        <div className="follow">
          <div className="image">
            <img src={require("./images/KMUTT.png")} alt="" />
          </div>
        </div>
      </header>
    </div>
  );
};

export default NavbarComponent;
